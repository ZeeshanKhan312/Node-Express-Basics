//SPREAD OPERATOR
const word='animal';
const letter=[...word]
console.log(letter);
const boys=['danish','zeeshan'];
const girls=['saziya','zaeema'];

const friends=boys.concat(girls);
// const friends=[...boys,...girls];
friends[0]='ujhjk'
console.log(friends);
console.log(boys);

const person={
    name:'zeeshan',
    job:'Engineer'
};

//it will give the refernce of the object
// const newPerson=person;
// newPerson.name='danish';
// console.log(newPerson.name);
// console.log(person.name);

//it will pass a copy of the object thus not having any affect on original object
const newPerson={...person};
newPerson.name='danish';
console.log(newPerson.name);
console.log(person.name);

//REST OPERATOR
const number=[1,2,34,5,32,44,12,21];
const [val1,val2,,...array]=number;
console.log(array);