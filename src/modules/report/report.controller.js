// modules/report/report.controller.js
const reportService = require('./report.service');

class ReportController {
  async createReport(req, res, next) {
    try {
      const report = await reportService.createReport(req.body);
      res.status(201).json({
        success: true,
        message: 'Report created successfully',
        data: report,
      });
    } catch (error) {
      next(error);
    }
  }

  async getReportById(req, res, next) {
    try {
      const report = await reportService.getReportById(req.params.id);
      res.status(200).json({
        success: true,
        data: report,
      });
    } catch (error) {
      next(error);
    }
  }

  async getReports(req, res, next) {
    try {
      const reports = await reportService.getReports(req.query);
      res.status(200).json({
        success: true,
        data: reports,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateReport(req, res, next) {
    try {
      const report = await reportService.updateReport(req.params.id, req.body);
      res.status(200).json({
        success: true,
        message: 'Report updated successfully',
        data: report,
      });
    } catch (error) {
      next(error);
    }
  }

  async signOffReport(req, res, next) {
    try {
      const { customerSignature } = req.body;
      const report = await reportService.signOffReport(req.params.id, customerSignature);
      res.status(200).json({
        success: true,
        message: 'Report signed off successfully',
        data: report,
      });
    } catch (error) {
      next(error);
    }
  }

  async getReportsByTechnician(req, res, next) {
    try {
      const reports = await reportService.getReportsByTechnician(req.user.id);
      res.status(200).json({
        success: true,
        data: reports,
      });
    } catch (error) {
      next(error);
    }
  }

  async getReportsByCustomer(req, res, next) {
    try {
      const reports = await reportService.getReportsByCustomer(req.user.id);
      res.status(200).json({
        success: true,
        data: reports,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ReportController();
