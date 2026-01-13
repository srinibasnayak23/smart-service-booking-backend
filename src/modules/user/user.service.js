// modules/user/user.service.js
const User = require('../../models/User');

class UserService {
  async getUserById(userId) {
    const user = await User.findById(userId).select('-password');
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  async updateUser(userId, updateData) {
    const user = await User.findByIdAndUpdate(userId, updateData, { new: true }).select('-password');
    return user;
  }

  async deleteUser(userId) {
    await User.findByIdAndDelete(userId);
    return { message: 'User deleted successfully' };
  }

  async getAllUsers(filters = {}) {
    const users = await User.find(filters).select('-password');
    return users;
  }

  async updateUserLocation(userId, coordinates) {
    const user = await User.findByIdAndUpdate(
      userId,
      {
        location: {
          type: 'Point',
          coordinates: coordinates, // [longitude, latitude]
        },
      },
      { new: true }
    );
    return user;
  }
}

module.exports = new UserService();
