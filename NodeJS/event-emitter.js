const event=require('events');
const eventEmitter = new event();

eventEmitter.on('function',()=>{
    console.log("listening to anonymous function");
});

const func1= function(name, age){
    console.log("listening to a function expression");
    console.log(`the given name is ${name} and age is ${age}`);
}

eventEmitter.once('function',func1); //will fire only once

// eventEmitter.off('function',func1);
for(var i=0;i<4;i++)
    eventEmitter.emit('function','zeeshan',23);

console.log(eventEmitter.listeners('function'));
console.log(eventEmitter.listenerCount('function')); //1 bcuz eventEmitter.once is not listening anymore