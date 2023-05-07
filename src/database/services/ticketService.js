import Ticket from '../models/ticket';

class TicketServices {
  static async getAllTickets() {
    const tickets = await Ticket.find();
    return tickets;
  }

  static async createTicket(ticketData) {
    const ticket = await Ticket.create(ticketData);
    return ticket;
  }

  static async getTicketById(ticketId) {
    const ticket = await Ticket.findById(ticketId);
    return ticket;
  }

  static async getSingleTicket(query) {
    const ticket = await Ticket.findOne(query);
    return ticket;
  }

  static async updateTicket(ticketId, ticketData) {
    const ticket = await Ticket.findByIdAndUpdate(ticketId, ticketData, { new: true });
    return ticket;
  }

  static async deleteTicket(ticketId) {
    const ticket = await Ticket.findByIdAndDelete(ticketId);
    return ticket;
  }
}

export default TicketServices;
