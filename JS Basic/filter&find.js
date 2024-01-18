const people=[
    {name:"zeeshan",age:22,position:"junior Developer"},
    {name:"skbmnf",age:30,position:"senior Developer"},
    {name:"zeessn",age:40,position:"manager"}
];

people[3]={
    name:"gneessn",age:28,position:"senior Developer"
};

//  USING FILTER METHOD 
const adultspeople=people.filter((person)=>{
    if(person.age>23)
        return person;
});
console.log(adultspeople);

//USING FIND METHOD
const adultPeople=people.find((person)=>{
    if(person.age>23)
    return person;
});
console.log(adultPeople);