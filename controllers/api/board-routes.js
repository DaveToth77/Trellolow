const router = require('express').Router //? if this is the correct way of putting it?
const { Card, List, User } = require('../../models');

router.get('/', (req,res) => {
    Card.findAll({ // this card may be in the wrong place

    })
    .then(dbBoardData => res.json(dbBoardData)) // dbBoard data for each of the boards that are working on it
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;

// the Boards one is known to all of the people and really you can get it and you should also be able to delete it