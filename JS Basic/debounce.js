const btn=document.querySelector('.btn');

const debounce=()=>{
    let debounceTime;
    return()=>{
        // console.log(debounceTime);
        clearTimeout(debounceTime);
        debounceTime=setTimeout(()=>{
            console.log('btn clicked');
        },2000);
    }
}
btn.addEventListener('click',debounce())