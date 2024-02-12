const product = require('../models/product');

const getAllProducts =async(req,res)=>{
    const productList= await product.find({});
    res.status(200).json({
        data:productList,
        total:productList.length
    });
}
 
const filterProduct=async(req,res)=>{
    const {featured,company,name}=req.query;
    const filterObject={}

    if(featured){
        filterObject.featured =(featured==='true')?true:false;
    }
    if(company)
        filterObject.company=company;
    if(name){
        filterObject.name= {$regex:name,$options:'i'}
    }

    const productList=await product.find(filterObject);
    if(productList.length!=0)
    res.status(201).json({data:productList,results:productList.length});
    else
        return res.status(404).json({msg:`No product found:`});
}

module.exports={getAllProducts,filterProduct};