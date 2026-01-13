// modules/technician/technician.service.js
const Technician = require('../../models/Technician');
const User = require('../../models/User');

class TechnicianService {
  async getTechnicianById(technicianId) {
    const technician = await Technician.findById(technicianId).populate('userId', '-password');
    if (!technician) {
      throw new Error('Technician not found');
    }
    return technician;
  }

  async updateTechnician(technicianId, updateData) {
    const technician = await Technician.findByIdAndUpdate(technicianId, updateData, { new: true });
    return technician;
  }

  async setAvailability(technicianId, isAvailable) {
    const technician = await Technician.findByIdAndUpdate(
      technicianId,
      { availability: isAvailable },
      { new: true }
    );
    return technician;
  }

  async getNearbyTechnicians(coordinates, radius = 10, skills = []) {
    const nearbyTechnicians = await Technician.find({
      availability: true,
      currentLocation: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: coordinates, // [longitude, latitude]
          },
          $maxDistance: radius * 1000, // Convert km to meters
        },
      },
      ...(skills.length && { skills: { $in: skills } }),
    }).populate('userId', '-password');

    return nearbyTechnicians;
  }

  async updateTechnicianLocation(userId, coordinates) {
    const technician = await Technician.findOneAndUpdate(
      { userId },
      {
        currentLocation: {
          type: 'Point',
          coordinates: coordinates,
        },
      },
      { new: true }
    );
    return technician;
  }

  async getTechnicianStats(technicianId) {
    const technician = await Technician.findById(technicianId);
    return {
      rating: technician.rating,
      reviewCount: technician.reviewCount,
      totalJobsCompleted: technician.totalJobsCompleted,
      isVerified: technician.isVerified,
    };
  }
}

module.exports = new TechnicianService();
