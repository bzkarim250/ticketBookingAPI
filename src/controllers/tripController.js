import TripServices from '../database/services/tripService';
import output from '../helpers/response';

class TripController {
  static async createTrip(req, res) {
    try {
      const {
        from, to, travelTime, price
      } = req.body;
      const agency = req.agencyId;
      const tripExist = await TripServices.getSingleTrip({ agency, from, to });
      if (tripExist) {
        return output(res, 409, 'Trip already exists', null, 'TRIP_EXISTS');
      }
      const trip = await TripServices.createTrip({
        agency, from, to, travelTime, price
      });
      return output(res, 201, 'Trip created successfully', trip);
    } catch (error) {
      return output(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }

  static async getAllTrips(req, res) {
    try {
      const trips = await TripServices.getAllTrips();
      return output(res, 200, 'all trips are displayed', trips);
    } catch (error) {
      return output(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }

  static async getTripById(req, res) {
    try {
      const trip = await TripServices.getTripById(req.params.id);
      if (!trip) {
        return output(res, 404, 'Trip not found', null, 'TRIP_NOT_FOUND');
      }
      return output(res, 200, 'Trip Found Successfull', trip);
    } catch (error) {
      return output(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }

  static async deleteTrip(req, res) {
    try {
      const trip = await TripServices.deleteTrip(req.params.id);
      if (!trip) return output(res, 400, 'trip not fund', null, 'BAD_REQUEST');
      return output(res, 200, 'trip deleted successfully', trip);
    } catch (error) {
      return output(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }

  static async updateTrip(req, res) {
    try {
      const agency = req.agencyId;
      const tripId = req.params.id;
      const trip = await TripServices.getSingleTrip({ $and: [{ _id: tripId }, { agency }] });
      if (!trip) {
        return output(res, 400, 'You are only allowed to update your own agency', null, 'BAD_REQUEST');
      }
      const updatedTrip = await TripServices.updateTrip(tripId, req.body);
      return output(res, 200, 'Trip routes updated', updatedTrip);
    } catch (error) {
      return output(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }

  static async getTripsByAgency(req, res) {
    try {
      const trips = await TripServices.getTripsByAgency(req.params.agency);
      if (!trips) return output(res, 404, 'No Trips found', null, 'TRIP_NOT_FOUND');
      return output(res, 200, 'Trips Found Successfull', trips);
    } catch (error) {
      return output(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }
}
export default TripController;
