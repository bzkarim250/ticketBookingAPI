import AgencyServices from '../database/services/agencyService';
import output from '../helpers/response';

class AgencyController {
  static async createAgency(req, res) {
    try {
      const { name } = req.body;
      const { id } = req.user;
      const agencyExists = await AgencyServices.getSingleAgency({ name });
      if (agencyExists) return output(res, 409, 'Your company already registred', null, 'AGENCY_EXISTS');
      const agency = await AgencyServices.createAgency({ ...req.body, companyAdmin: id });
      return output(res, 201, 'Agency registered succesfully', agency);
    } catch (error) {
      return output(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }

  static async getAllAgencies(req, res) {
    try {
      const agencies = await AgencyServices.getAllAgencies();
      return output(res, 200, 'all agencies retrived', agencies);
    } catch (error) {
      return output(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }
}

export default AgencyController;
