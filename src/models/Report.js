// models/Report.js
const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema(
  {
    bookingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Booking',
      required: true,
    },
    technicianId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    workDescription: String,
    issues: String,
    resolution: String,
    images: [String], // URLs or paths to uploaded images
    materials: [
      {
        name: String,
        quantity: Number,
        cost: Number,
      },
    ],
    totalMaterialCost: Number,
    laborCost: Number,
    totalCost: Number,
    notes: String,
    technicianSignature: String,
    customerSignature: String,
    customerApproved: {
      type: Boolean,
      default: false,
    },
    approvedAt: Date,
    status: {
      type: String,
      enum: ['pending', 'submitted', 'approved', 'rejected'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Report', reportSchema);
