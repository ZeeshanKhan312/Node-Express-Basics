const express=require('express');
const app=express();

// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

const peopleRouter=require('./people-route') //GETTING THE PEOPLE ROUTER WHICH IS EXPORTED 

app.use('/js/postman',peopleRouter);

app.listen(5000);