// modules/service/service.routes.js
const express = require('express');
const serviceController = require('./service.controller');

const router = express.Router();

router.get('/', serviceController.getAllServices);
router.get('/:id', serviceController.getServiceById);
router.get('/category/:category', serviceController.getServicesByCategory);

// TODO: Uncomment when auth middleware and admin role is ready
// router.post('/', authMiddleware, roleMiddleware.admin, serviceController.createService);
// router.put('/:id', authMiddleware, roleMiddleware.admin, serviceController.updateService);
// router.delete('/:id', authMiddleware, roleMiddleware.admin, serviceController.deleteService);

module.exports = router;
