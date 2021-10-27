const router = require('express').Router();
const { Card } = require('../../models')

router.get('/', (req, res) => {
    Card.findAll({

    })
    .then(dbCardData => res.json(dbCardData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

// Search bar to find one? 
router.get('/:id', (req, res) => {
    Card.findOne({
        where: {
            id: req.params.id
        },
        // include a specific one?
    })
    .then(dbCardData => res.json(dbCardData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Creates a new route
router.post('/', (req, res) => {
    Card.create({
        // this is to make a new card?
        title: req.body.title,
        content: req.body.content,
        listId: req.body.listId,
        sortOrder: req.body.sortOrder
         
    })
    .then(dbCardData => res.json(dbCardData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

//Deletes a route 
router.delete('/:id', (req, res) => {
    Card.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbCardData => res.json(dbCardData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;