const sequelizeConection = require('../utils/database-connetion');
const Sequelize = require('sequelize');

const Product = sequelizeConection.define('products', {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },

    title : Sequelize.STRING,

    description : {
        type : Sequelize.STRING,
        allowNull : false,
    },

    price : {
        type : Sequelize.DOUBLE,
        allowNull : false
    }
});

module.exports = Product;
