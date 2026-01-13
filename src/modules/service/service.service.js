// modules/service/service.service.js
const Service = require('../../models/Service');

class ServiceService {
  async getAllServices() {
    return await Service.find({ isActive: true });
  }

  async getServiceById(serviceId) {
    const service = await Service.findById(serviceId);
    if (!service) {
      throw new Error('Service not found');
    }
    return service;
  }

  async createService(serviceData) {
    const service = new Service(serviceData);
    await service.save();
    return service;
  }

  async updateService(serviceId, updateData) {
    const service = await Service.findByIdAndUpdate(serviceId, updateData, { new: true });
    return service;
  }

  async deleteService(serviceId) {
    await Service.findByIdAndDelete(serviceId);
    return { message: 'Service deleted successfully' };
  }

  async getServicesByCategory(category) {
    return await Service.find({ category, isActive: true });
  }
}

module.exports = new ServiceService();
