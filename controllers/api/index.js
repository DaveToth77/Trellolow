const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const listRoutes = require('./list-routes');
const cardRoutes = require('./card-routes');

router.use('/users', userRoutes);
router.use('/lists', listRoutes);
router.use('/cards', cardRoutes);

module.exports = router;