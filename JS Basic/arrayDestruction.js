// let first="zeeshan";
// let second="khan";

// [second,first]=[first,second]; //a short trick for swapping multiple values

// console.log(first,second);

// let arr=[12,34,45,21];

// const [val1,,...val3]=arr;

// console.log(val3[0]);

const obj={
    first:'zeeshan',
    last:'khan',
    address:{
        city:'delhi',
        zip:110025
    },
};

const{first,lastName,address:{city}}=obj;

console.log(first);

