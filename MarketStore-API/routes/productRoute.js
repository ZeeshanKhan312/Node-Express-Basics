const express=require('express');
const router=express.Router();

const{getAllProducts,filterProduct}=require('../controllers/productController');

router.route('/products').get(getAllProducts);
router.route('/products/filter').get(filterProduct);

module.exports=router;