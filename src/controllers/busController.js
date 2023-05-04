import BusServices from '../database/services/busService';
import output from '../helpers/response';

class BusController {
  static async createBus(req, res) {
    try {
      const {
        plateNo, seat, from, to
      } = req.body;
      const agency = req.agencyId;
      const busExist = await BusServices.getSingleBus({ plateNo });
      if (busExist) {
        return output(res, 409, 'Bus already exists', null, 'BUS_EXISTS');
      }
      const availableSeats = seat;
      const bus = await BusServices.createBus({
        plateNo, seat, availableSeats, agency, from, to
      });
      return output(res, 201, 'Bus created successfully', bus);
    } catch (error) {
      return output(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }

  static async getAllBuses(req, res) {
    try {
      const buses = await BusServices.getAllBuses();
      return output(res, 200, 'all buses are displayed', buses);
    } catch (error) {
      return output(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }

  static async getBusById(req, res) {
    try {
      const bus = await BusServices.getBusById(req.params.id);
      if (!bus) {
        return output(res, 404, 'Bus not found', null, 'BUS_NOT_FOUND');
      }
      return output(res, 200, 'Bus Found Successfull', bus);
    } catch (error) {
      return output(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }

  static async deleteBus(req, res) {
    try {
      const bus = await BusServices.deleteBus(req.params.id);
      if (!bus) return output(res, 400, 'bus not fund', null, 'BAD_REQUEST');
      return output(res, 200, 'bus deleted successfully', bus);
    } catch (error) {
      return output(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }
}
export default BusController;
