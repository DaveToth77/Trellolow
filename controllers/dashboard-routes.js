const router = require('express').Router();
const sequelize = require('../config/connection');
const {
    List,
    User,
    Card
} = require('../models');

// get all posts for dashboard
router.get('/', (req, res) => {
    // console.log(req.session);
    // console.log('======================');
    List.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: [
                'id',
                'title',
                'user_id',
            ],
            include: [
                {
                    model: Card,
                    attributes: ['id','title','content','user_id'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model:User,
                    attributes: ['username']
                }
            ]
        })
        .then(dbListData => {
            console.log(`================`)
            console.log(dbListData);
            const lists = dbListData.map(list => list.get({
                plain: true
            }));
            console.log(lists)
            res.render('dashboard', {
                lists, 
                loggedIn: true
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/edit/:id', (req, res) => {
  List.findByPk(req.params.id, {
            attributes: [
                'id',
                'title',
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
            if (dbListData) {
                const List = dbListData.get({
                    plain: true
                });

                res.render('edit-list', {
                    post,
                    loggedIn: true
                });
            } else {
                res.status(404).end();
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

//get all cards for dashboard

router.get('/', (req, res) => {
    console.log(req.session);
    console.log('======================');
    Card.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: [
                'title',
                'content',
                'user_id'
            ],
        })
        .then(dbCardData => {
            console.log(`================`)
            console.log(dbCardData);
            const Cards = dbCardData.map(card => card.get({
                plain: true
            }));
            console.log(Cards)
            res.render('dashboard', {
                cards,
                loggedIn: true
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;