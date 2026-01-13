// modules/report/report.routes.js
const express = require('express');
const reportController = require('./report.controller');

const router = express.Router();

// TODO: Uncomment when auth middleware is ready
// router.post('/', authMiddleware, reportController.createReport);
// router.get('/:id', authMiddleware, reportController.getReportById);
// router.get('/', authMiddleware, reportController.getReports);
// router.put('/:id', authMiddleware, reportController.updateReport);
// router.post('/:id/sign-off', authMiddleware, reportController.signOffReport);
// router.get('/technician/my-reports', authMiddleware, reportController.getReportsByTechnician);
// router.get('/customer/my-reports', authMiddleware, reportController.getReportsByCustomer);

module.exports = router;
