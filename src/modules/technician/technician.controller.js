// modules/technician/technician.controller.js
const technicianService = require('./technician.service');

class TechnicianController {
  async getTechnicianById(req, res, next) {
    try {
      const technician = await technicianService.getTechnicianById(req.params.id);
      res.status(200).json({
        success: true,
        data: technician,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateTechnician(req, res, next) {
    try {
      const technician = await technicianService.updateTechnician(req.params.id, req.body);
      res.status(200).json({
        success: true,
        message: 'Technician updated successfully',
        data: technician,
      });
    } catch (error) {
      next(error);
    }
  }

  async setAvailability(req, res, next) {
    try {
      const { availability } = req.body;
      const technician = await technicianService.setAvailability(req.params.id, availability);
      res.status(200).json({
        success: true,
        message: 'Availability updated',
        data: technician,
      });
    } catch (error) {
      next(error);
    }
  }

  async getNearbyTechnicians(req, res, next) {
    try {
      const { coordinates, radius, skills } = req.body;
      const technicians = await technicianService.getNearbyTechnicians(coordinates, radius, skills);
      res.status(200).json({
        success: true,
        data: technicians,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateLocation(req, res, next) {
    try {
      const { coordinates } = req.body;
      const technician = await technicianService.updateTechnicianLocation(req.user.id, coordinates);
      res.status(200).json({
        success: true,
        message: 'Location updated',
        data: technician,
      });
    } catch (error) {
      next(error);
    }
  }

  async getStats(req, res, next) {
    try {
      const stats = await technicianService.getTechnicianStats(req.params.id);
      res.status(200).json({
        success: true,
        data: stats,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new TechnicianController();
