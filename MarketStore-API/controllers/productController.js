const product = require('../models/product');

const getAllProducts =async(req,res)=>{
    const {sort}=req.query;
    let productList;
    if(sort){
        const sortList=sort.split(',').join(' ');
        productList= await product.find({}).sort(sortList);
    }
    else
        productList=await product.find({}) //.limit(10)

    res.status(200).json({
        data:productList,
        total:productList.length
    });
}
 
const filterProduct=async(req,res)=>{
    const {featured,company,name,sort,fields,numericFilters}=req.query;
    const filterObject={}

    if(featured){
        filterObject.featured =(featured==='true')?true:false;
    }
    if(company)
        filterObject.company=company;
    if(name){
        filterObject.name= {$regex:name,$options:'i'}
    }

    let productList= product.find(filterObject);
    //only selecting the required fields of data
    if(fields){
        const fieldList=fields.split(',').join(' ')
        productList=productList.select(fieldList);
    }
    //sorting result according to need
    if(sort){
        const sortList=sort.split(',').join(' ');
        productList=productList.sort(sortList)
    }

    if(numericFilters){
        const operatorMap={
            '>':'&gt',
            '>=':'&gte',
            '=':'&eq',
            '<':'&lt',
            '<=':'&lte'
        }

        const regEx= /\b(<|>|>=|=|<|<=)\b/g
        
    }
    //page implementation
    const page=req.query.page;
    const limit=5;
    const skip=(page-1)*limit;

    productList=await productList.skip(skip).limit(limit);

    if(productList.length!=0)
    res.status(201).json({data:productList,results:productList.length});
    else
        return res.status(404).json({msg:`No product found:`});
}


//pages functionality implementaion
const getProductOverview=async (req,res)=>{
    let {field}=req.query;
    const page=req.query.page||1;
    const skip=(page-1)*5;

    field=field.split(',').join(' ')
    const productList=await product.find({}).select(field).skip(skip).limit(5);

    res.status(200).json({
        data:productList,
        total:productList.length
    });
}

module.exports={getAllProducts,filterProduct,getProductOverview};