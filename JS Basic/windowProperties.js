const box=document.querySelector('.box');
console.log('width', window.innerWidth);
console.log('width',window.outerWidth);

const btn=document.querySelector('.btn');

btn.addEventListener('click',()=>{
    const dime=box.getBoundingClientRect();
    console.log(dime);
});