const router = require('express').Router();
const boardRoutes = require('./board-routes');
const cardRoutes = require('./card-routes');
const listRoutes = require('./list-routes');
const userRoutes = require('./user-routes');

router.use('/board', boardRoutes);
router.use('/card', cardRoutes);
router.use('/list', listRoutes);
router.use('/user', userRoutes);

module.exports = router;

// Not sure of this guy ios completely correct, and if we need more cards that can be added