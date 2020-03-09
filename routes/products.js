const express = require('express');
const productController = require('../controllers/product-controller');

const router = express.Router();

router.get('/getAllProducts', productController.getAllProducts);
router.get('/getProduct/:productId', productController.getProduct);
router.post('/addProduct', productController.addProduct);
router.delete('/deleteProduct/:productId', productController.deleteProduct);
router.post('/updateProduct/:productId', productController.updateProduct);

module.exports = router;