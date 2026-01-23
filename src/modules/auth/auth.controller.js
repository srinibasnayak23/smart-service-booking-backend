const authService = require('./auth.service');
const responseUtil = require('../../utils/response.util');

class AuthController {
  async register(req, res, next) {
    try {
      const result = await authService.register(req.body);
      responseUtil.created(res, result, 'User registered successfully');
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const result = await authService.login(email, password);
      responseUtil.success(res, result, 'Login successful', 200);
    } catch (error) {
      next(error);
    }
  }

  async refreshToken(req, res, next) {
    try {
      const { refreshToken } = req.body;
      const result = await authService.refreshToken(refreshToken);
      responseUtil.success(res, result, 'Token refreshed successfully', 200);
    } catch (error) {
      next(error);
    }
  }

  async logout(req, res, next) {
    try {
      const userId = req.user?.id;
      if (!userId) {
        const error = new Error('User not authenticated');
        error.statusCode = 401;
        throw error;
      }

      const result = await authService.logout(userId);
      responseUtil.success(res, null, result.message, 200);
    } catch (error) {
      next(error);
    }
  }

  async getCurrentUser(req, res, next) {
    try {
      const userId = req.user?.id;
      if (!userId) {
        const error = new Error('User not authenticated');
        error.statusCode = 401;
        throw error;
      }

      const user = await authService.getCurrentUser(userId);
      responseUtil.success(res, user, 'User profile retrieved successfully', 200);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AuthController(); 