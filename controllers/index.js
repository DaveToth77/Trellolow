const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req,res) => {
    res.send("Incorrect")
});

module.exports = router;

// This was helpful from the routes form other places to help