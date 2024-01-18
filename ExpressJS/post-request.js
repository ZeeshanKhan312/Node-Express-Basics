//EXAMPLE OF POST REQUEST
const express = require('express');
const app=express();

const people=[
    {id:1,
    name:'danish'},
    {id:2,
        name:'zeeshan'},
    {id:3,
        name:'saziya'
}];

module.exports={people}
app.use(express.static('./ExpressJS/methods-public'));

app.get('/',(req,res)=>{
    res.sendFile('./index.html')
});

// USING FORM EXAMPLE FOR CALLING POST REQUEST
app.use(express.urlencoded({extended:false})); //it's used to parse the incoming request and get the data
app.post('/login',(req,res)=>{
    console.log(req.body);
    const {name,age}=req.body;
    if(name && age)
        res.status(200).send(`Welcome ${name} you are ${age} years old`);
    else
    res.status(401).send("Please Enter the Name and Age")
});

// USING PURE JS FOR CALLING POST REQUEST
app.use(express.json());

app.get('/js/peopleList',(req,res)=>{
    res.status(200).json({success:true, data:people})
})
app.post('/js/addPerson',(req,res)=>{
    const {name}=req.body;
    if(!name)
    res.status(400).json({success:false,msg:'Please provide the name'});

    res.status(201).json({success:true,person:name})
});

app.listen(8080);