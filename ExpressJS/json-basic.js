const express=require('express');
const app=express();
const personList=[{
    name:'zeeshan',
    age:23,
    city:'delhi',
    contact:93093232
},{
    name:'danish',
    age:25,
    city:'amroha',
    contact:930932232
},{
    name:'shaleel',
    age:22,
    city:'old delhi',
    contact:930932232
}
];
module.exports={personList};

app.get('/',(req,res)=>{
    res.send(`<h1>welcome to the homepage</h1>
    <p>Get the list of data</p><a href='/data'>Person Data</a>`)
})

app.get('/data',(req,res)=>{
    // res.json({name:'zeeshan',age:23}) //sending json data 
    const newList=personList.map((person)=>{
        const{name,age}=person
        return{name,age};
    });
    res.json(newList); //sending json data as a object
})


app.get('*',(req,res)=>{
    res.status(404);
    res.send(`h1>OOPS..!</h1>
    <p>the site you are looking for doesn't exist...</p>
    <a href='/'>home page</a>`)
})

app.listen(5000);