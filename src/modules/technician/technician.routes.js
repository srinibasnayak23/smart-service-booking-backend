// modules/technician/technician.routes.js
const express = require('express');
const technicianController = require('./technician.controller');

const router = express.Router();

// TODO: Uncomment when auth middleware is ready
// router.get('/:id', authMiddleware, technicianController.getTechnicianById);
// router.put('/:id', authMiddleware, technicianController.updateTechnician);
// router.post('/:id/availability', authMiddleware, technicianController.setAvailability);
// router.post('/nearby', authMiddleware, technicianController.getNearbyTechnicians);
// router.put('/location', authMiddleware, technicianController.updateLocation);
// router.get('/:id/stats', authMiddleware, technicianController.getStats);

module.exports = router;
