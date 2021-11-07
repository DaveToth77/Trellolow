const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Card extends Model {}

Card.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    content: {
      type: DataTypes.STRING,
      allowNull: true,
      // references: {
        // model: 'list',
        // key: 'id'
      // }
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: true,
  
    },
  //   list_id: {
  //     type: DataTypes.INTEGER,
  //     references: {
  //       model: 'list',
  //       key: 'id'
  //     }
  //   }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'card'
  }
);

module.exports = Card;