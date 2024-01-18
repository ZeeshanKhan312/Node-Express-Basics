// after 1s first red;
// after 3s second blue; 4s
// after 2s third green; 6s
// IN SEQUENCE !!!!

//USING CALLBACK FUNCTION
const btn=document.querySelector('.btn');
btn.addEventListener('click',()=>{
    setTimeout(()=>{
        const first = document.querySelector('.first');
        first.style.color='red';
        setTimeout(()=>{
            const second = document.querySelector('.second');
            second.style.color='blue';
            setTimeout(()=>{
                const third = document.querySelector('.third');
                third.style.color='yellow';
            },2000);
        },3000);
    },1000);
});

//USING PROMISE FUNCTION
const btn2=document.querySelector('.btn2');

btn2.addEventListener('click',()=>{
    addColor('.first2','red',1000)
    .then(()=>addColor('.second2','blue',3000))
    .then(()=>addColor('.third2','green',2000))
    .catch((err)=>console.log(err));
});

function addColor(elem,color,time){
    const element=document.querySelector(elem);
    return new Promise((resolve,reject)=>{
        if(element){
            setTimeout(()=>{
                element.style.color=color
                resolve();
            },time)
        }
        else{
            reject(`There is no such element : "${elem}"`)
        }
    })
    
}