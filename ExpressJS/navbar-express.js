// WITH USING EXPRESS.JS

const express= require('express');

const app=express();

const path=require('path');

app.use(express.static('./ExpressJS/navbar-app/public'));

app.get('/',(req,res)=>{
    res.send('<h1>welcome to Home Page</h1>');
})
app.get('/about',(req,res)=>{
    res.sendFile(path.resolve('./ExpressJS/navbar-app/index.html'))
});
app.all('*',(req,res)=>{
    res.status(404);
    res.send(`h1>OOPS..!</h1>
    <p>the site you are looking for doesn't exist...</p>
    <a href='/'>home page</a>`)
})
app.listen(8080);