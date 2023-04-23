import AgencyServices from '../database/services/agencyService';
import out from '../helpers/response';

class AgencyController {
  static async createAgency(req, res) {
    try {
      const { name } = req.body;
      const { id } = req.user;
      const agencyExists = await AgencyServices.getSingleAgency({ name });
      if (agencyExists) return out(res, 409, 'Your company alyready registred', null, 'AGENCY_EXISTS');
      const agency = await AgencyServices.createAgency({ ...req.body, companyAdmin: id });
      return out(res, 201, 'Agency registred succesfully', agency);
    } catch (error) {
      return out(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }

  static async getAllAgencies(req, res) {
    try {
      const agencies = await AgencyServices.getAllAgencies();
      return out(res, 200, 'all agencies retrived', agencies);
    } catch (error) {
      return out(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }
}

export default AgencyController;
