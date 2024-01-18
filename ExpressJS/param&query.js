const personList=require('./json-basic');

const express=require('express');
const app=express();

//PARAM request
app.get('/data/:name',(req,res)=>{
    const {name}=req.params
    const person=personList.find((data)=>data.name===name);
    if(!person){
        return res.status(404).send("Person doesn't exist in list");
    }
    res.json(person);
})
app.get('/data/:name/friend/:friendId',(req,res)=>{
    console.log(req.params);
    res.send("Testing...!!");
})

//QUERRY request
app.get('/data/v1/search',(req,res)=>{
    const {name,limit}=req.query
    let peopleArray=[...personList];
    peopleArray=peopleArray.filter((people)=>{
        return people.name.startsWith(name);
    });

    if(limit){
        peopleArray=peopleArray.slice(0,Number(limit));
    }
    if(peopleArray.length<1){
        res.status(404).send('No DATA Found!!')
    }

    res.status(200).json(peopleArray);
})

app.get('*',(req,res)=>{
    res.status(404);
    res.send(`h1>OOPS..!</h1>
    <p>the site you are looking for doesn't exist...</p>
    <a href='/'>home page</a>`)
})

app.listen(8080);