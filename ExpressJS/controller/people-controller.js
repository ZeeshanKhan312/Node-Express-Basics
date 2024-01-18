const {id,people}=require('../post-request');

const getPeople=(req,res)=>{
    res.status(200).json({success:true,data:people});
}

const createPerson=(req,res)=>{
    const {name}=req.body;
    if (!name){
        res.status(401).json({success:false,msg:'Please provide the name'});
    }
    res.status(201)
        .json({success:true, data:id,name})
}

const updatePerson = (req, res) => {
    const { id } = req.params
    const { name } = req.body
  
    const person = people.find((person) => person.id === Number(id))
  
    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: `no person with id ${id}` })
    }
    const newPeople = people.map((person) => {
      if (person.id === Number(id)) {
        person.name = name
      }
      return person
    })
    res.status(200).json({ success: true, data: newPeople })
  }


module.exports={getPeople,createPerson,updatePerson};