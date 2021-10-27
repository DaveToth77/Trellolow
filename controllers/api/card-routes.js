// const router = require('express').Router();
// const { User, Board, List } = require('../../models');

// router.get('/', (req, res) => {
//     Card.findAll({

//     })
//     .then(dbCardData => res.json(dbCardData))
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     })
// })

// // Search bar to find one? 
// router.get('/:id', (req, res) => {
//     Card.findOne({
//         where: {
//             id: req.params.id
//         },
//         // include a specific one?
//     })
//     .then(dbCardData => res.json(dbCardData))
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// // Creates a new route
// router.post('/', (req, res) => {
//     Card.create({
//         card_name: req.body.card_name // this is to make a new card?
//     })
//     .then(dbCardData => res.json(dbCardData))
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// //Deletes a route 
// router.delete('/:id', (req, res) => {
//     Card.destroy({
//         where: {
//             id: req.params.id
//         }
//     })
//     .then(dbCardData => res.json(dbCardData))
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     })
// })

// module.exports = router;