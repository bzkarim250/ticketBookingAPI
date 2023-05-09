import nodemailer from 'nodemailer';
import Pdfkit from 'pdfkit';
import fs from 'fs';
import config from './configEnv';

const mailer = async (info, action) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.SEND_MAIL,
      pass: config.PASS_MAIL,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let subject;
  let emailto;
  let composition;
  let username;

  switch (action) {
    case 'bookTicket':
      subject = 'Ticket Booked';
      emailto = info.email;
      username = info.username;
      composition = `
        <p>Dear ${username},</p>
        <p>We would like to let you know that your ticket has been successfully booked. Please find below the details of your trip:</p>
        <ul>
          <li>Agency:${info.agency}</li>
          <li>Bus: ${info.bus}</li>
          <li>From: ${info.from}</li>
          <li>To: ${info.to}</li>
          <li>Departure time: ${info.departureTime}</li>
          <li>Number of tickets: ${info.numberOfTickets}</li>
          <li>Seat numbers: ${info.seatNumbers.join(', ')}</li>
          <li>Price: ${info.price}</li>
        </ul>
        <p>Thank you for choosing our service!</p>
        <p>Best regards,</p>
        <p>BusWise</p>
      `;
      break;
    default:
      subject = '';
      break;
  }

  const doc = new Pdfkit();
  doc.pipe(fs.createWriteStream('ticket.pdf'));

  const amount = info.price / info.numberOfTickets;
  const ticketDocuments = [];

  for (let i = 0; i < info.numberOfTickets; i++) {
    const seatNumber = info.seatNumbers[i];

    // Create a new PDF document for each ticket
    const doc = new Pdfkit();
    doc.pipe(fs.createWriteStream(`ticket-${seatNumber}.pdf`));

    doc.font('Helvetica-Bold').fontSize(20).text(`${info.agency}`, { align: 'center' });
    doc.moveDown();
    doc.font('Helvetica').fontSize(14).text(`Name: ${info.username}`);
    doc.font('Helvetica').fontSize(14).text(`Bus: ${info.bus}`);
    doc.font('Helvetica').fontSize(14).text(`From: ${info.from}`);
    doc.font('Helvetica').fontSize(14).text(`To: ${info.to}`);
    doc.font('Helvetica').fontSize(14).text(`Departure time: ${info.departureTime}`);
    doc.font('Helvetica').fontSize(14).text(`Number of tickets: ${info.numberOfTickets}`);
    doc.font('Helvetica').fontSize(14).text(`Seat number: ${seatNumber}`);
    doc.font('Helvetica').fontSize(14).text(`Price: ${amount}`);
    doc.moveDown();
    doc.font('Helvetica').fontSize(10).text('Booked from BusWise Ticket Booking System');

    doc.end();

    // Store the PDF document in an array
    ticketDocuments.push({
      filename: `ticket-${seatNumber}.pdf`,
      content: fs.createReadStream(`ticket-${seatNumber}.pdf`),
      contentType: 'application/pdf'
    });
  }

  const mailOptions = {
    from: `BusWise ${config.SEND_MAIL}`,
    to: emailto,
    subject,
    html: composition,
    attachments: ticketDocuments
  };

  try {
    const sendEmail = await transporter.sendMail(mailOptions);
    return sendEmail;
  } catch (error) {
    return error;
  }
};

export default mailer;
