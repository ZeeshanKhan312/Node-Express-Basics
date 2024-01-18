const people = [
    {
      name: 'bob',
      age: 20,
      position: 'developer',
    },
    {
      name: 'susan',
      age: 25,
      position: 'developer',
    },
    {
      name: 'anna',
      age: 25,
      position: 'designer',
    },
    {
      name: 'susy',
      age: 30,
      position: 'the boss',
    },
    {
      name: 'john',
      age: 26,
      position: 'intern',
    },
  ];

  const names=people.map((person)=> `<h2>${person.name}</h2>`);

  const result1=document.getElementById('result');
  result1.innerHTML=names.join('');

// "Set()"- TO GET ONLY THE UNIQUE VALUES FROM AN ARRAY 
  const categories=[... new Set(people.map((person)=> person.position) )];

  const result2=document.querySelector('#profile'); //{#-> for ID || .-> for Class}
  result2.innerHTML=categories.map((category)=>{
    return `<button>${category}</button>`;
  }).join(' ');

