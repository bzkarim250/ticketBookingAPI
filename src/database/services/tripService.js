import Trip from '../models/trip';
import Agency from '../models/agency';

class TripServices {
  static async getAllTrips() {
    const trips = await Trip.find().populate({ path: 'agency', select: '-_id name' });
    return trips;
  }

  static async createTrip(tripData) {
    const trip = await Trip.create(tripData);
    return trip;
  }

  static async getTripById(tripId) {
    const trip = await Trip.findById(tripId);
    return trip;
  }

  static async tripExists(agency, from, to) {
    const agence = await Agency.findOne({ name: agency });
    const { id } = agence;
    const trip = await Trip.findOne({ agency: id, from, to });
    return trip;
  }

  static async getSingleTrip(query) {
    const trip = await Trip.findOne(query);
    return trip;
  }

  static async updateTrip(tripId, tripData) {
    const trip = await Trip.findByIdAndUpdate(tripId, tripData, { new: true });
    return trip;
  }

  static async deleteTrip(TripId) {
    const trip = await Trip.findByIdAndDelete(TripId);
    return trip;
  }

  static async getTripsByAgency(agency) {
    const agence = await Agency.findOne({ name: agency });
    if (!agence) return null;
    const { id } = agence;
    const trips = await Trip.find({ agency: id });
    return trips;
  }
}

export default TripServices;
