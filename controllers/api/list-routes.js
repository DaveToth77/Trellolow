const router = require('express').Router();
const sequelize = require('../../config/connection');
const {
    List,
    User,
    Card
} = require('../../models');

// get all lists
router.get('/', (req, res) => {
    console.log('======================');
    List.findAll({
            attributes: [
                'id',
                'title',
                'user_id',
            ]
        })
        .then(dbListData => res.json(dbListData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    List.findOne({
            where: {
                id: req.params.id
            },
            attributes: [
                'id',
                'title',
                'user_id',
            ]
        })
        .then(dbListData => {
            if (!dbListData) {
                res.status(404).json({
                    message: 'No list found with this id'
                });
                return;
            }
            res.json(dbListData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    // expects {title: 'Taskmaster goes public!', dbListData_url: 'https://taskmaster.com/press', user_id: 1}
    List.create({
            title: req.body.title,
            user_id: req.session.user_id
        })
        .then(dbListData => res.json(dbListData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.put('/:id', (req, res) => {
    List.update({
            title: req.body.title
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(dbListData => {
            if (!dbListData) {
                res.status(404).json({
                    message: 'No List found with this id'
                });
                return;
            }
            res.json(dbListData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    console.log('id', req.params.id);
    List.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(dbListData => {
            if (!dbListData) {
                res.status(404).json({
                    message: 'No List found with this id'
                });
                return;
            }
            res.json(dbListData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;