// const router = require('express').Router();
// const { User, Board, Card } = require('../../models');

// router.get('/', (req, res) => {
//     List.findAll({

//     })
//     .then(dbListData => res.json(dbListData))
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     })
// })

// // Search bar to find one? 
// router.get('/:id', (req, res) => {
//     List.findOne({
//         where: {
//             id: req.params.id
//         },
//         // include a specific one?
//     })
//     .then(dbListData => res.json(dbListData))
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// // Creates a new route
// List.post('/', (req, res) => {
//     Card.create({
//         card_name: req.body.card_name // this is to make a new card?
//     })
//     .then(dbListData => res.json(dbListData))
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// //Deletes a route 
// router.delete('/:id', (req, res) => {
//     List.destroy({
//         where: {
//             id: req.params.id
//         }
//     })
//     .then(dbListData => res.json(dbListData))
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     })
// })

// module.exports = router;