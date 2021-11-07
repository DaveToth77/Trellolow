const User = require('./User');
const Card = require('./Card');
const List = require('./List');

User.hasMany(List, {
    // foreignKey: 'user_id'
  });
  
  List.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });
  
  // User.belongsToMany(List, {
  //   through: Card,
  //   foreignKey: 'user_id',
  //   onDelete: 'SET NULL'
  // });
  
  // List.belongsToMany(User, {
  //   through: Card,
  //   foreignKey: 'user_id',
  //   onDelete: 'SET NULL'
  // });
    
  Card.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });
  
  Card.belongsTo(List, {
    foreignKey: 'user_id',
    // onDelete: 'SET NULL'
  });
  
  User.hasMany(Card, {
    foreignKey: 'user_id',
    // onDelete: 'SET NULL'
  });
  
  List.hasMany(Card, {
  });

module.exports = { User, Card, List };