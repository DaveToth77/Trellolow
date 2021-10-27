const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const cardRoutes = require('./card-routes.js');

router.use('/users', userRoutes);
router.use('/cards', cardRoutes);

module.exports = router;