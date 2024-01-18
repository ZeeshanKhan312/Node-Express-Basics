
//USING ASYNC FUNCTION
async function fetchVoters(){
    try{
        const res=await fetch('https://www.course-api.com/react-tours-project');
        if(!res.ok){ //way to throw an error while fetching
            const msg=`there was an error ${res.status}:${res.statusText}`;
            throw new Error(msg);
        }
        const res1=await res.json();
        console.log(res1);
    }
    catch(error){
        console.log(error)
    }
}

fetchVoters();

//USING PROMISE .THEN
// fetch('https://www.course-api.com/react-tours-project')
// .then((res)=>res.json())
// .then((resp)=>console.log(resp))
// .catch((err)=>console.log(err));