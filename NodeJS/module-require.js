const user=require('./module-exports');

const{name}=require('./module-exports'); //if not creating object the var name should be same as passed 

console.log(name);

console.log(user.age);

user.printName("zeeshan");

const{address}=require('./module-exports')

console.log(address); //var passed in alternative way