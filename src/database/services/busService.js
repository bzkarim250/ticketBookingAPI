import Bus from '../models/bus';
import Agency from '../models/agency';

class BusServices {
  static async getAllBuses() {
    const buses = await Bus.find().populate({ path: 'agency', select: '-_id name' });
    return buses;
  }

  static async createBus(busData) {
    const bus = await Bus.create(busData);
    return bus;
  }

  static async getBusById(busId) {
    const bus = await Bus.findById(busId);
    return bus;
  }

  static async getSingleBus(query) {
    const bus = await Bus.findOne(query);
    return bus;
  }

  static async updateBus(busId, busData) {
    const bus = await Bus.findByIdAndUpdate(busId, busData, { new: true });
    return bus;
  }

  static async deleteBus(busId) {
    const bus = await Bus.findByIdAndDelete(busId);
    return bus;
  }

  static async getAvailableBuses(agency, from, to, numberOfTickets) {
    const agence = await Agency.findOne({ name: agency });
    const { id } = agence;
    const buses = await Bus.findOne({
      availableSeats: { $gte: numberOfTickets },
      status: true,
      agency: id,
      from,
      to,
    });
    return buses;
  }

  static async decrementAvailableSeats(busId, numSeats) {
    const bus = await Bus.findById(busId);
    bus.availableSeats -= numSeats;
    await bus.save();
    return bus;
  }
}

export default BusServices;
