// routes.js
const express = require('express');

// Import module routes
const authRoutes = require('./modules/auth/auth.routes');
const userRoutes = require('./modules/user/user.routes');
const technicianRoutes = require('./modules/technician/technician.routes');
const serviceRoutes = require('./modules/service/service.routes');
const bookingRoutes = require('./modules/booking/booking.routes');
const reportRoutes = require('./modules/report/report.routes');

const router = express.Router();

// Health check endpoint
router.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Smart Service Booking API is running' });
});

// Mount module routes
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/technicians', technicianRoutes);
router.use('/services', serviceRoutes);
router.use('/bookings', bookingRoutes);
router.use('/reports', reportRoutes);

module.exports = router;
