const express=require('express');
const router=express.Router();

const{getAllProducts,filterProduct,getProductOverview,
        addProduct,deleteProduct, getSingleProduct}=require('../controllers/productController');

router.route('/products').get(getAllProducts).post(addProduct);
router.route('/products/filter').get(filterProduct);
router.route('/products-overview').get(getProductOverview);
router.route('/products/:id').delete(deleteProduct).get(getSingleProduct);

module.exports=router;