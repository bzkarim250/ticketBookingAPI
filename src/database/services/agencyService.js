import Agency from '../models/agency';

class AgencyServices {
  static async getAllAgencies() {
    const agencies = await Agency.find();
    return agencies;
  }

  static async createAgency(agencyData) {
    const agency = await Agency.create(agencyData);
    return agency;
  }

  static async getAgencyById(agencyId) {
    const agency = await Agency.findById(agencyId);
    return agency;
  }

  static async getSingleAgency(query) {
    const agency = await Agency.findOne(query);
    return agency;
  }

  static async updateAgency(agencyId, agencyData) {
    const agency = await Agency.findByIdAndUpdate(agencyId, agencyData, { new: true });
    return agency;
  }

  static async deleteAgency(agencyId) {
    const agency = await Agency.findByIdAndDelete(agencyId);
    return agency;
  }
}

export default AgencyServices;
