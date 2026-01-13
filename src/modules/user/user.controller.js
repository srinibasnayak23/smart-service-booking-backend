// modules/user/user.controller.js
const userService = require('./user.service');

class UserController {
  async getUserById(req, res, next) {
    try {
      const user = await userService.getUserById(req.params.id);
      res.status(200).json({
        success: true,
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateUser(req, res, next) {
    try {
      const user = await userService.updateUser(req.params.id, req.body);
      res.status(200).json({
        success: true,
        message: 'User updated successfully',
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteUser(req, res, next) {
    try {
      const result = await userService.deleteUser(req.params.id);
      res.status(200).json({
        success: true,
        message: result.message,
      });
    } catch (error) {
      next(error);
    }
  }

  async getAllUsers(req, res, next) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json({
        success: true,
        data: users,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateLocation(req, res, next) {
    try {
      const { coordinates } = req.body;
      const user = await userService.updateUserLocation(req.params.id, coordinates);
      res.status(200).json({
        success: true,
        message: 'Location updated successfully',
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
