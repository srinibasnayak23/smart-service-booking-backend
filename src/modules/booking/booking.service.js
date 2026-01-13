// modules/booking/booking.service.js
const Booking = require('../../models/Booking');

class BookingService {
  async createBooking(bookingData) {
    const booking = new Booking(bookingData);
    await booking.save();
    return booking;
  }

  async getBookingById(bookingId) {
    const booking = await Booking.findById(bookingId)
      .populate('customerId', '-password')
      .populate('technicianId', '-password')
      .populate('serviceId');
    if (!booking) {
      throw new Error('Booking not found');
    }
    return booking;
  }

  async getBookings(filters = {}) {
    const bookings = await Booking.find(filters)
      .populate('customerId', '-password')
      .populate('technicianId', '-password')
      .populate('serviceId');
    return bookings;
  }

  async updateBookingStatus(bookingId, status) {
    const updateData = { status };
    if (status === 'completed') {
      updateData.completedAt = new Date();
    } else if (status === 'cancelled') {
      updateData.cancelledAt = new Date();
    }

    const booking = await Booking.findByIdAndUpdate(bookingId, updateData, { new: true });
    return booking;
  }

  async cancelBooking(bookingId, reason) {
    const booking = await Booking.findByIdAndUpdate(
      bookingId,
      {
        status: 'cancelled',
        cancelledAt: new Date(),
        cancellationReason: reason,
      },
      { new: true }
    );
    return booking;
  }

  async assignTechnician(bookingId, technicianId, assignmentScore) {
    const booking = await Booking.findByIdAndUpdate(
      bookingId,
      {
        technicianId,
        status: 'assigned',
        assignmentScore,
      },
      { new: true }
    );
    return booking;
  }

  async getCustomerBookings(customerId) {
    return await Booking.find({ customerId }).populate('serviceId').sort({ createdAt: -1 });
  }

  async getTechnicianBookings(technicianId) {
    return await Booking.find({ technicianId }).populate('serviceId').sort({ createdAt: -1 });
  }
}

module.exports = new BookingService();
