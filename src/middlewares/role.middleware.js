// middlewares/role.middleware.js

const roleMiddleware = {
  admin: (req, res, next) => {
    try {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: 'User not authenticated',
        });
      }

      if (req.user.role !== 'admin') {
        return res.status(403).json({
          success: false,
          message: 'Access denied. Admin role required.',
        });
      }

      next();
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error checking role permission',
      });
    }
  },

  technician: (req, res, next) => {
    try {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: 'User not authenticated',
        });
      }

      if (req.user.role !== 'technician') {
        return res.status(403).json({
          success: false,
          message: 'Access denied. Technician role required.',
        });
      }

      next();
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error checking role permission',
      });
    }
  },

  customer: (req, res, next) => {
    try {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: 'User not authenticated',
        });
      }

      if (req.user.role !== 'customer') {
        return res.status(403).json({
          success: false,
          message: 'Access denied. Customer role required.',
        });
      }

      next();
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error checking role permission',
      });
    }
  },

  adminOrSelf: (req, res, next) => {
    try {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: 'User not authenticated',
        });
      }

      if (req.user.role === 'admin' || req.user.id === req.params.id) {
        return next();
      }

      return res.status(403).json({
        success: false,
        message: 'Access denied. You can only access your own data.',
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error checking role permission',
      });
    }
  },
};

module.exports = roleMiddleware;
