const path=require('path');

console.log(path.sep);

const filePath=path.join('/NodeJS','/JSbasic','os-module.js')
console.log(filePath);

console.log(path.basename(filePath));

const absolutePath=path.resolve(__dirname,'content','os-module.js');
console.log(absolutePath);

const pathObject=path.parse(filePath);
console.log(pathObject);
