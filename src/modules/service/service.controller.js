// modules/service/service.controller.js
const serviceService = require('./service.service');

class ServiceController {
  async getAllServices(req, res, next) {
    try {
      const services = await serviceService.getAllServices();
      res.status(200).json({
        success: true,
        data: services,
      });
    } catch (error) {
      next(error);
    }
  }

  async getServiceById(req, res, next) {
    try {
      const service = await serviceService.getServiceById(req.params.id);
      res.status(200).json({
        success: true,
        data: service,
      });
    } catch (error) {
      next(error);
    }
  }

  async createService(req, res, next) {
    try {
      const service = await serviceService.createService(req.body);
      res.status(201).json({
        success: true,
        message: 'Service created successfully',
        data: service,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateService(req, res, next) {
    try {
      const service = await serviceService.updateService(req.params.id, req.body);
      res.status(200).json({
        success: true,
        message: 'Service updated successfully',
        data: service,
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteService(req, res, next) {
    try {
      const result = await serviceService.deleteService(req.params.id);
      res.status(200).json({
        success: true,
        message: result.message,
      });
    } catch (error) {
      next(error);
    }
  }

  async getServicesByCategory(req, res, next) {
    try {
      const { category } = req.params;
      const services = await serviceService.getServicesByCategory(category);
      res.status(200).json({
        success: true,
        data: services,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ServiceController();
