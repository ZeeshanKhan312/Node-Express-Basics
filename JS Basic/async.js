const btn=document.querySelector('.btn');

btn.addEventListener('click',async()=>{
    console.log("btn clicked")
    try{
        //USING ASYNS AND AWAIT CAN MAKE THE FUNCTION ACT IN A SYNCHRONOUS MANNER
        await addColor('.first','red',1000);
        await addColor('.second','blue',3000);
        await addColor('.third','green',2000);
    }
    catch(err){
        console.log(`an error was encountered: ${err}`);
    }
});

function addColor(elem,color,time){
    return new Promise((resolve,reject)=>{
        const element=document.querySelector(elem);
        if(element){
            setTimeout(()=>{
                element.style.color=color;
                resolve();
            },time)
        }
        else{
            reject("Element was not found");
        }
    });

}
