// models/Technician.js
const mongoose = require('mongoose');

const technicianSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    skills: [String],
    experience: Number, // in years
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    reviewCount: {
      type: Number,
      default: 0,
    },
    availability: {
      type: Boolean,
      default: false,
    },
    currentLocation: {
      type: {
        type: String,
        enum: ['Point'],
        default: 'Point',
      },
      coordinates: {
        type: [Number], // [longitude, latitude]
      },
    },
    serviceRadius: {
      type: Number, // in km
      default: 10,
    },
    currentBookingId: mongoose.Schema.Types.ObjectId,
    totalJobsCompleted: {
      type: Number,
      default: 0,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Create geospatial index
technicianSchema.index({ currentLocation: '2dsphere' });

module.exports = mongoose.model('Technician', technicianSchema);
