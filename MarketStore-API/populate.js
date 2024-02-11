//AUTOMATICALLY ADD ALL THE DATAS TO THE DATABASE AT ONCE FROM JSON FILE
require('dotenv').config()

 const connectDB=require('./db/connect');
 const productSchema=require('./models/product');
 const products=require('./products.json');
const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URI);
        await productSchema.deleteMany(); //to delete the pre existing data from the db
        await productSchema.create(products);
        console.log('Success!!');
        process.exit(0);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

start();