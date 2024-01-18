let sum= function(x,y){
    return x+y;
}

let addition=(x,y)=>{
    x+=12;
    return x+y;
}
console.log(addition(20,30));
console.log(__dirname);


let a=setInterval(()=>{
    console.log("hello it's me");
},2000);

console.log(a)

let b=prompt("do you want to  continue")

if(b=='no'){
    clearTimeout(a);
}