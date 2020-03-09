const express =  require('express');
const productRoute = require('./routes/products');
const bodyParser = require('body-parser');
const sequelize = require('./utils/database-connetion');

const application = express();

application.use(bodyParser.urlencoded({
    extended : true
}));

application.use(bodyParser.json());

application.use(productRoute);

application.use((req, res, next) => {
    res.status(404).send({
        message : 'Route not found! Try other',
        statusCode : '404'
    });
});

const serverPort = 3000;

sequelize.sync()
         .then(result => {
            application.listen(serverPort);
         })
         .catch(error => {
             console.log(error);
         });
