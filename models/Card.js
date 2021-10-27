const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Card model
class Card extends Model {}

// create fields/columns for Card model
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
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    listId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sortOrder: {
        type: DataTypes.INTEGER,
    }
}, {


    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'card'
});

module.exports = Card;