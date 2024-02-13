const express=require('express');
const router=express.Router();

const{getAllProducts,filterProduct,getProductOverview}=require('../controllers/productController');

router.route('/products').get(getAllProducts);
router.route('/products/filter').get(filterProduct);
router.route('/products-overview').get(getProductOverview)

module.exports=router;