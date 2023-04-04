import BusServices from '../database/services/busService';
import out from '../helpers/response';

class BusController {
  static async createBus(req, res) {
    try {
      const { plateNo, seat, status } = req.body;
      const busExist = await BusServices.getSingleBus({ plateNo });
      if (busExist) {
        return out(res, 409, 'Bus already exists', null, 'BUS_EXISTS');
      }
      const availableSeats = seat;
      const bus = await BusServices.createBus({
        plateNo, seat, status, availableSeats
      });
      return out(res, 201, 'Bus created successfully', bus);
    } catch (error) {
      return out(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }

  static async getAllBuses(req, res) {
    try {
      const buses = await BusServices.getAllBuses();
      return out(res, 200, 'all buses are displayed', buses);
    } catch (error) {
      return out(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }

  static async getBusById(req, res) {
    try {
      const bus = await BusServices.getBusById(req.params.id);
      if (!bus) {
        return out(res, 404, 'Bus not found', null, 'BUS_NOT_FOUND');
      }
      return out(res, 200, 'Bus Found Successfull', bus);
    } catch (error) {
      return out(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }
}
export default BusController;
