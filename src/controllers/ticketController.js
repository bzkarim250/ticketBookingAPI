import TicketServices from '../database/services/ticketService';
import BusServices from '../database/services/busService';
import TripServices from '../database/services/tripService';
import output from '../helpers/response';
import mailer from '../helpers/mailer';

class TicketController {
  static async createTicket(req, res) {
    try {
      const {
        agency, from, to, numberOfTickets, departureTime
      } = req.body;
      const { id, username, email } = req.user;
      const trip = await TripServices.tripExists(agency, from, to);
      if (!trip) return output(res, 400, 'No available trip or route found', null, 'NO_AVAILABLE_TRIP');
      const { price } = trip;
      const bus = await BusServices.getAvailableBuses(agency, from, to, numberOfTickets);
      if (!bus) {
        return output(res, 400, 'No available bus found', null, 'NO_AVAILABLE_BUS');
      }
      const numberOfSeatsNeeded = numberOfTickets;
      const seatNumbers = [];
      for (let i = 0; i < numberOfSeatsNeeded; i++) {
        seatNumbers.push(bus.seat - bus.availableSeats + i + 1);
      }
      await BusServices.decrementAvailableSeats(bus._id, numberOfTickets);
      const amount = price * numberOfTickets;
      const ticket = await TicketServices.createTicket({
        user: id,
        bus: bus._id,
        agency: bus.agency,
        from,
        to,
        numberOfTickets,
        seatNumbers,
        departureTime,
        price: amount
      });
      await mailer({
        username, bus: bus.plateNo, agency, from, to, seatNumbers, departureTime, numberOfTickets, price: amount, email
      }, 'bookTicket');

      return output(res, 201, 'Your ticket has been successfully booked', ticket);
    } catch (error) {
      return output(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }
}

export default TicketController;
