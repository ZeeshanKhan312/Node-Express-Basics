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

    if(numericFilters){
        const operatorMap={
            '>':'$gt',
            '>=':'$gte',
            '=':'$eq',
            '<':'$lt',
            '<=':'$lte'
        }

        const regEx= /\b(<|>|>=|=|<|<=)\b/g

        let filter=numericFilters.replace(regEx,(match)=>`-${operatorMap[match]}-`); //replace the > to $gt and so on...

        const option=['price','rating'];
        filter=filter.split(',').forEach((item)=>{
            const [field,opr,value]=item.split('-');
            if(option.includes(field))
                filterObject[field]={[opr]:Number(value)}
        });
        
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

const addProduct =async(req,res)=>{
    const newProduct=await product.create(req.body);
    res.status(201).json(newProduct);
}

const deleteProduct =async(req,res)=>{
    const item=await product.findOneAndDelete({_id:req.params.id});
    if(item){
        res.status(200).json({msg:`product deleted with ${req.params.id}`})
    }
    else
        res.status(400).json({msg:`No product found with ID: ${req.params.id}`})
}

const getSingleProduct=async(req,res)=>{
    const item=await product.findOne({_id:req.params.id});
    if(item){
        res.status(200).json(item);
    }
    else{
        res.status(400).json({msg:`No product found with ID: ${req.params.id}`})
    }
}

module.exports={getAllProducts,filterProduct,getProductOverview,
                addProduct,deleteProduct,getSingleProduct};