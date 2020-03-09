const Product = require('../models/product');

exports.getAllProducts = (req, res, next) => {
   Product.findAll()
          .then(products => {
              res.status(200).send({
                  products : products
              });
          })
          .catch(error => {
              console.log(error);
              res.status(500).send({
                  message : 'Something went wrong with the server'
              });
          });
};

exports.getProduct = (req, res, next) => {
    Product.findByPk(req.params.productId)
           .then(product => {
               res.status(200).send({
                   message : 'Success',
                   product : product
               })
           })
           .catch(error => {
               console.log(error);
               res.status(500).send({
                   message : 'Something went wrong'
               });
           })
};

exports.addProduct = (req, res, next) => {
    Product.create({
        title : req.body.title,
        description : req.body.description,
        price : req.body.price
    }).then(result => {
        res.status(200).send({
            status : 'Ok',
            message : 'Product has been inserted'
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status : 'Error',
            message : 'Something went wrong'
        });
    });
};

exports.deleteProduct = (req, res, next) => {
    Product.destroy({
        where : {
            id : req.params.productId
        }
    }).then(response => {
        res.status(200).send({
            message : 'Product has been deleted'
        });
    }).catch(error => {
        res.status(500).send({
            message : 'Something went wrong with the server'
        });
    });
};

exports.updateProduct = (req, res, next) => {
    Product.findByPk(req.params.productId)
           .then(product => {
                console.log(product);

                product.title = req.body.title;
                product.description = req.body.description;
                product.price = req.body.price;

                return product.save();
                
           })
           .then(response => {
               console.log(response);

               res.status(200).send({
                   message : 'Product has beed updated'
               });
           })
           .catch(error => {
               console.log(error);
               res.status(500).send({
                   message : 'Something went wrong with the server!'
               });
           });
};