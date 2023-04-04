import Bus from '../models/bus';

class BusServices {
  static async getAllBuses() {
    const buses = await Bus.find().select('plateNo seat availableSeats');
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
}

export default BusServices;
