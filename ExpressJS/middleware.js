// req-->middleware-->res

const express=require('express')
const app=express();

const logger=(req,res,next)=>{
    const method=req.method
    const url=req.url
    const time=new Date().getFullYear()

    console.log(method,url,time);
    // res.send("This is the Logger Page");
    next();
}
module.exports=logger
app.get('/',logger,(req,res)=>{
    res.send('Welcome to Home Page');
})

app.get('/about',(req,res)=>{
    res.send('<h1> About Page</h1>')
})

app.listen(5000);