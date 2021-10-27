const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our List model
class List extends Model {}

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
        // required: true,   
    },
    // Not sure how this will work yet
    // boardId: {
    //     type: DataTypes.STRING,
    // },
    sortOrder: {
        type: DataTypes.INTEGER,
    }
}, {


    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'list'
});

module.exports = List;