// WITHOUT USING EXPRESS.JS

const http= require('http');
const {readFileSync}=require('fs');

const cssFile=readFileSync('./ExpressJS/navbar-app/public/styles.css')
const logoFile=readFileSync('./ExpressJS/navbar-app/public/logo.svg')
const jsFile=readFileSync('./ExpressJS/navbar-app/public/browser-app.js')

const httpServer=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,'welcome to home page',{'content-type':'text/html'}) //writing the head file
        const temp=res;
        console.log(res.statusMessage);
        res.end('<h1>welcome to Home Page</h1>'); //returning a string html
    }
    else if(req.url==='/about'){
        res.writeHead(200,{'content-type':'text/html'});
        res.end(readFileSync('./ExpressJS/navbar-app/index.html')); //returning a html file 
    }
    //style
    else if(req.url==='/styles.css'){
        res.setHeader('content-type','text/html')
        res.writeHead(200,{'content-type':'text/css'});
        res.write(cssFile);
        res.end();
    }
    //image/logo
    else if(req.url==='/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'});
        res.write(logoFile);
        res.end();
    }
    //logic/JS
    else if(req.url==='/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'});
        res.end(jsFile);
    }
    else{
        res.writeHead(404,{'content-type':'text/html'});
        res.write(`
        <h1>OOPS..!</h1>
        <p>the site you are looking for doesn't exist...</p>
        <a href='/'>home page</a>`
    );
    res.end();
    }

}).listen(8080); 