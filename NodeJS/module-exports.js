//local var
const contact="32432344";

//sharing
const name="zeeshan";
const age=23;

//sharing a func
const printName=(name)=>{
    console.log(`User name is ${name}`);
}

//PASSING IT AS AN OBJECT
module.exports={name,age,printName};
console.log(module);


//ALTERNATIVE WAY - PASSING IT DIRECTLT
module.exports.address="Delhi,India";
