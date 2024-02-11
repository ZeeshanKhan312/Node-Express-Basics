require('dotenv').config()
require('express-async-errors');

const express=require('express');
const app=express();
const connectDB=require('./db/connect');
const productRoute=require('./routes/productRoute');

const errorHandlerMiddleware=require('./middleware/error-handler');
const notFoundMiddleware=require('./middleware/not-found')

app.use(express.json());
app.use('/api/v1',productRoute);
app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

const port=process.env.PORT||5000;

const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port,console.log(`Server is listening to port ${port}`));
    }catch(error){
        console.log(error);
    }
}

start();