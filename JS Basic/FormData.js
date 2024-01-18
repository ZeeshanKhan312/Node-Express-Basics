const form=document.querySelector('.form');

form.addEventListener('submit',(data)=>{
    data.preventDefault();
    // const formData=[...new FormData(data.currentTarget)];
    const formData=new FormData(data.currentTarget);
    formData.append('number','8448120321');
    formData.append('sex','male');
    formData.delete('sex');  //it's case sensitive
    console.log(formData.has('name'));  //has() check whether there is an attribute of that name not ID or Class
    const dataList=[... formData];
    console.log(dataList);

    if([...formData.values()].includes('')){
        console.log("Please Enter all the value")
        return;
    }

    const formKeys=[...formData.keys()];
    console.log(formKeys);

    //CONVERTING THE ARRAYS INTO OBJECT to pass it into Server as JSON

    const formObject=Object.fromEntries([...formData.entries()]);
    console.log(formObject);

    data.currentTarget.reset()//will reset the form 
});