// modules/booking/booking.controller.js
const bookingService = require('./booking.service');

class BookingController {
  async createBooking(req, res, next) {
    try {
      const booking = await bookingService.createBooking(req.body);
      res.status(201).json({
        success: true,
        message: 'Booking created successfully',
        data: booking,
      });
    } catch (error) {
      next(error);
    }
  }

  async getBookingById(req, res, next) {
    try {
      const booking = await bookingService.getBookingById(req.params.id);
      res.status(200).json({
        success: true,
        data: booking,
      });
    } catch (error) {
      next(error);
    }
  }

  async getBookings(req, res, next) {
    try {
      const bookings = await bookingService.getBookings(req.query);
      res.status(200).json({
        success: true,
        data: bookings,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateBookingStatus(req, res, next) {
    try {
      const { status } = req.body;
      const booking = await bookingService.updateBookingStatus(req.params.id, status);
      res.status(200).json({
        success: true,
        message: 'Booking status updated',
        data: booking,
      });
    } catch (error) {
      next(error);
    }
  }

  async cancelBooking(req, res, next) {
    try {
      const { reason } = req.body;
      const booking = await bookingService.cancelBooking(req.params.id, reason);
      res.status(200).json({
        success: true,
        message: 'Booking cancelled',
        data: booking,
      });
    } catch (error) {
      next(error);
    }
  }

  async getCustomerBookings(req, res, next) {
    try {
      const bookings = await bookingService.getCustomerBookings(req.user.id);
      res.status(200).json({
        success: true,
        data: bookings,
      });
    } catch (error) {
      next(error);
    }
  }

  async getTechnicianBookings(req, res, next) {
    try {
      const bookings = await bookingService.getTechnicianBookings(req.user.id);
      res.status(200).json({
        success: true,
        data: bookings,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new BookingController();
