const item =[
    {
        name:"phone",
        quantity:2,
        price:999
    },
    {
        name:"TV",
        quantity:1,
        price:599
    },
    {
        name:"PS5",
        quantity:1,
        price:899
    },
    {
        name:"food",
        quantity:4,
        price:99
    },
]

let total=item.reduce((accumulator, currentValue)=>{
    accumulator+=currentValue.price * currentValue.quantity;
    return accumulator;
},0);

console.log(total)

let total2=item.reduce((accumulator, currentValue)=>{
    // const {quantity,price}=currentValue;
    const currentItem=currentValue;
    accumulator.totalItem+=currentItem.quantity;
    accumulator.totalPrice+=currentItem.quantity*currentItem.price;
    
    return accumulator;
},{
    totalItem:0,
    totalPrice:0
});

console.log(total2)