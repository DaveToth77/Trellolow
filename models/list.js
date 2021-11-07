const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our list model
class List extends Model {};
// create fields/columns for List model
List.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'list'
  }
);

module.exports = List;
