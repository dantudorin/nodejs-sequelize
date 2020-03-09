// The part that connects the server to database locally and exports this connection for further usage

const Sequlize = require('sequelize');

const sequelize = new Sequlize('node-complete', 'root', 'tudorin', {
    dialect : 'mysql',
    host : 'localhost',
    port : 3306
});

module.exports = sequelize;