const items=document.querySelectorAll('.text');
let array=Array.from(items,(name)=>{
    if(name.textContent=='zeeshan')
        console.log(name.textContent);
});

console.log(array);