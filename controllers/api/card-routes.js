const router = require('express').Router();
const {
    Card
} = require('../../models');

router.get('/', (req, res) => {
    Card.findAll()
        .then(dbCardData => res.json(dbCardData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    // expects => {content: "This is the Card", user_id: 1, post_id: 2}
    Card.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id,
            list_id: req.body.post_id
        })
        .then(dbCardData => res.json(dbCardData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Card.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(dbCardData => {
            if (!dbCardData) {
                res.status(404).json({
                    message: 'No Card found with this id!'
                });
                return;
            }
            res.json(dbCardData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;