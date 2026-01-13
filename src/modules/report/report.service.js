// modules/report/report.service.js
const Report = require('../../models/Report');

class ReportService {
  async createReport(reportData) {
    const report = new Report(reportData);
    await report.save();
    return report;
  }

  async getReportById(reportId) {
    const report = await Report.findById(reportId)
      .populate('bookingId')
      .populate('technicianId', '-password')
      .populate('customerId', '-password');
    if (!report) {
      throw new Error('Report not found');
    }
    return report;
  }

  async getReports(filters = {}) {
    const reports = await Report.find(filters)
      .populate('bookingId')
      .populate('technicianId', '-password')
      .populate('customerId', '-password');
    return reports;
  }

  async updateReport(reportId, updateData) {
    const report = await Report.findByIdAndUpdate(reportId, updateData, { new: true });
    return report;
  }

  async signOffReport(reportId, customerSignature) {
    const report = await Report.findByIdAndUpdate(
      reportId,
      {
        customerSignature,
        customerApproved: true,
        approvedAt: new Date(),
        status: 'approved',
      },
      { new: true }
    );
    return report;
  }

  async getReportsByTechnician(technicianId) {
    return await Report.find({ technicianId }).sort({ createdAt: -1 });
  }

  async getReportsByCustomer(customerId) {
    return await Report.find({ customerId }).sort({ createdAt: -1 });
  }
}

module.exports = new ReportService();
