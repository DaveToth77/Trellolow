const router = require('express').Router();
const sequelize = require('../config/connection');
const {
    List,
    User,
    Card
} = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
    console.log('======================');
    List.findAll({
            attributes: [
                'id',
                'title',
                'user_id',
            ],
            // include: [{
            //         model: Card,
            //         attributes: [
            //             'id',
            //             'title',
            //             'content',
            //             'user_id',
            //         ],
            //         include: {
            //             model: User,
            //             attributes: ['username']
            //         }
            //     },
            //     {
            //         model: User,
            //         attributes: ['username']
            //     }
            // ]
        })
        .then(dbListData => {
            const lists = dbListData.map(list => list.get({
                plain: true
            }));

            res.render('homepage', {
                lists,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get single post
router.get('/lists/:id', (req, res) => {
    Post.findOne({
            where: {
                id: req.params.id
            },
            attributes: [
                'id',
                'title',
                'user_id',
            ],
            // include: [{
            //         model: Card,
            //         attributes: [
            //             'id', 
            //             'title', 
            //             'content', 
            //             'user_id', 
            //         ],
            //         include: {
            //             model: User,
            //             attributes: ['username']
            //         }
            //     },
            //     {
            //         model: User,
            //         attributes: ['username']
            //     }
            // ]
        })
        .then(dbListData => {
            if (!dbListData) {
                res.status(404).json({
                    message: 'No list found with this id'
                });
                return;
            }

            const post = dbListData.get({
                plain: true
            });

            res.render('single-list', {
                post,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;