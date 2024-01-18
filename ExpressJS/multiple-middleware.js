const express=require('express')
const app=express();

const logger=require('./middleware');
const morgan=require('morgan');  //using 3rd party middleware
const autherised=(req,res,next)=>{
    console.log('User is authorised');
    next();
}

app.use('/about/v2',[logger,autherised]);

app.get('/about/v1',morgan('tiny'),(req,res)=>{  //3rd party middleware
    res.send('Version 1');  
});

app.get('/about/v2/text',(req,res)=>{
    res.send('Testing Multiple middleware');
})
app.get('/about/v2/2.01',(req,res)=>{
    res.send('Testing Multiple middleware 2.01');
})
app.listen(3000);
