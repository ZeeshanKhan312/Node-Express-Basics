//SYNCHRONOUS WAY   
const fileSystem=require('fs');
const {readFileSync}=require('fs');

var text1=readFileSync('./NodeJS/text1.txt','utf8');
console.log(text1);

fileSystem.writeFileSync('./NodeJS/result.txt',"Hello working on Modules-file system");

fileSystem.writeFileSync(
    './NodeJS/result.txt',
    ` Adding string ${text1} `,
    {flag:'a'}
);
console.log(fileSystem.readFileSync('./NodeJS/result.txt','utf8'));

// //ASYNCHRONOUS WAY
// const{readFile,writeFile}=require('fs');

// readFile('./NodeJs/text1.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     const text1=result;

//     writeFile('./NodeJS/result.txt',
//     `Adding String in asynchronous manner ${text1}`,
//     {flag:'a'},
//     (err,result)=>{
//         if(err){
//             console.log(err);
//             return;
//         }

//     });
// });

fileSystem.appendFile('./NodeJs/result.txt',
                        " File has been appended using apend method",
                        (err,result)=>{
                            if(err)
                                console.log(err);
                        }
);

// fileSystem.unlink('./NodeJS/result.txt',(err)=>{
//     if(err)
//         console.log(err);
// });



