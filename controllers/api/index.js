const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const cardRoutes = require('./card-routes.js');
const listRoutes = require('./list-routes.js');

router.use('/users', userRoutes);
router.use('/cards', cardRoutes);
router.use('/lists', listRoutes);

module.exports = router;