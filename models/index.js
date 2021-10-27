const Board = require('./Board');
const Card = require('./Card');
const List = require('./List');
const User = require('./User');

User.hasMany(Board);
Board.hasMany(List);
List.hasMany(Card);


module.exports = {
    Board,
    Card,
    List, 
    User
}

// this could be adjusted, just thinking about things and writing them down 