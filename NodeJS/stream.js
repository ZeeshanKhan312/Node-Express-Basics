// const fs=require('fs');
// const readStream=fs.createReadStream('./NodeJS/text1.txt','utf-8');
// const writeStream=fs.createWriteStream('./NodeJs/result.txt');

// readStream.pipe(writeStream);

const {createReadStream}=require('fs');
// const readStream=createReadStream('./NodeJS/bigTextFile.txt',
// {highWaterMark:9000,encoding:'utf-8'}
// );

// readStream.on('data',(res)=>{
//     console.log(res);
// });

// readStream.on('error',(err)=>{
//     console.log(err);
// });


var http = require('http');
http.createServer((req,resp)=>{

    const stream=createReadStream('./NodeJS/bigTextFile.txt',
    {highWaterMark:9000,encoding:'utf-8'}
    );

    stream.on('open',()=>{
        stream.pipe(resp);
    });

    stream.on('error',(err)=>{
        console.log(err);
    });
}).listen(5000);

