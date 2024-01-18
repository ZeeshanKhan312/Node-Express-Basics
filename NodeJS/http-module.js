const http=require('http');

const server=http.createServer((req,resp)=>{
    if(req.url==='/'){
        resp.write("Wecome to the home page");
        resp.end();
    }
    else if(req.url==='/info'){
        resp.end('Here we are studying about the basics of HTTP Module')
    }
    else{
        resp.end(`
            <h1>OOPS..!</h1>
            <p>the site you are looking for doesn't exist...</p>
            <a href='/'>home page</a>`
        );
    }
});

// //USING ON METHOD of EVENT EMITTER LISTENER
// const server=http.createServer();
// server.on('request',(req,resp)=>{
//     if(req.url==='/')
//         resp.end("Wecome to the home page");
//     else{
//         resp.end(`
//             <h1>OOPS..!</h1>
//             <p>the site you are looking for doesn't exist...</p>
//             <a href='/'>home page</a>`
//         );
//     }
// })

server.listen(5000)