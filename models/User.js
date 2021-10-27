const { Model } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {};

User.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
         },
   
         first_name: {
            type: Datatypes.STRING,
            allowNull: false,
         },
   
         last_name: {
            type: Datatypes.STRING,
            allowNull: false,
         },
         
         email: {
             type: Datatypes.STRING,
             allowNull: false,
         }
    },
         {
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'user'
         }
      )
      
      module.exports = User;