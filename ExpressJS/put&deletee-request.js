const express= require('express');
const app=express();
app.use(express.json());
const {people}=require('./post-request');

// PUT REQUEST 
app.put('/postman_testing/put/:id',(req,res)=>{
    const {id}=req.params;
    const {name}=req.body;

    const person=people.find((person)=>person.id==id);
    if(!person){
        return res.status(404)
        .json({success:false,msg:`No person found with id: ${id}`});
    }
    else{
        person.name=name;
        return res.status(200)
                .json({success:true,data:person});
    }

});

//DELETE REQUEST
function deletePerson(req,res){
    const person=people.find((person)=>person.id==req.params.id);
    if(!person){
        return res.status(404)
        .json({success:false,msg:`No person found with id: ${req.params.id}`});
    }
    else{
        const newPeople=people.filter((person)=>{
            return person.id !=req.params.id;
        });
        return res.status(200)
            .json({success:true,data:newPeople});
    }
}

app.delete('/postman_testing/delete/:id',deletePerson);

app.listen(5000);