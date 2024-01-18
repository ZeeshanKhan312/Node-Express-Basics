const os=require('os');
console.log(os.userInfo());

//returs the system uptime in seconds
const upTime=os.uptime();
console.log(upTime);

//creating an object to store the OS details
const osObject={
    name:os.type(),
    release:os.release(),
    platform:os.platform(),
    hostname:os.hostname(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem()
};
console.log(osObject);