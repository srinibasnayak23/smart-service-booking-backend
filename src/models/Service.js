// models/Service.js
const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    category: {
      type: String,
      required: true,
    },
    basePrice: {
      type: Number,
      required: true,
    },
    estimatedDuration: {
      type: Number, // in minutes
      required: true,
    },
    icon: String,
    isActive: {
      type: Boolean,
      default: true,
    },
    requiredSkills: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Service', serviceSchema);
