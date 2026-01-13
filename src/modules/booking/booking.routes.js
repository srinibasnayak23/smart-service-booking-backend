// modules/booking/booking.routes.js
const express = require('express');
const bookingController = require('./booking.controller');

const router = express.Router();

// TODO: Uncomment when auth middleware is ready
// router.post('/', authMiddleware, bookingController.createBooking);
// router.get('/:id', authMiddleware, bookingController.getBookingById);
// router.get('/', authMiddleware, bookingController.getBookings);
// router.put('/:id/status', authMiddleware, bookingController.updateBookingStatus);
// router.post('/:id/cancel', authMiddleware, bookingController.cancelBooking);
// router.get('/customer/my-bookings', authMiddleware, bookingController.getCustomerBookings);
// router.get('/technician/my-bookings', authMiddleware, bookingController.getTechnicianBookings);

module.exports = router;
