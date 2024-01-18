
    let startDate=Date.now();
    console.log(startDate);
    console.log(Date(startDate));
    let endDate=new Date(startDate+(1000*60*60*24*4));
    console.log(endDate)

const timeDifference=endDate.getTime()-startDate;
console.log(timeDifference/1000*60*60*24)

let arr=[23,12,42,13,44];
console.log(arr.at(-2));
console.log(arr.at(1));