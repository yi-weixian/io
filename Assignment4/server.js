/*
 * name: Weixian Yi
 * email: yiw@oregonstate.edu
 */

var http = require("http");
var fs = require("fs");

const PORT = process.env.PORT || 3000;

var html = null;
var css = null;
var js = null;
var html404 = null;

var server = http.createServer(function(request, response){
    
    if(request.url == '/index.html'|| request.url == '/'){
        response.writeHead(200, {"Content-Type": "text/html"});
        if(html == null){
            html = fs.readFileSync('./public/index.html');
            response.write(html);
            console.log('== access HTNL');
        }
        else{
            console.log('  == access HTML chache');
            response.write(html);
        }

        response.end();
    }

    else if(request.url == '/style.css'){
        response.writeHead(200, {"Content-Type": "text/css"});
        if(css == null){
            css = fs.readFileSync('./public/style.css');
            console.log('== access CSS');
            response.write(css);
        }
        else{
            console.log('  == access CSS chache');
            response.write(css);
        }
        response.end();
    }

    else if(request.url == '/index.js'){
        response.writeHead(200, {"Content-Type": "application/javascript"});
        if(js == null){
            js = fs.readFileSync('./public/index.js');
            console.log('== access JS');
            response.write(js);
        }
        else{
            console.log('  == access JS chache');
            response.write(js);
        }
        response.end();
    }

    else if(request.url == '/404.html'){
        response.writeHead(200, {"Content-Type": "text/html"});
        if(html404 == null){
            html404 = fs.readFileSync('./public/404.html');
            console.log('== access 404');
            response.write(html404);
        }
        else{
            console.log('  == access html404 chache');
            response.write(html404);
        }
        response.end();
    }

    else {
        response.writeHead(404, {"Content-Type": "text/html"});
        if(html404 == null){
            html404 = fs.readFileSync('./public/404.html');
            console.log('== access 404');
            response.write(html404);
        }
        else{
            console.log('  == access html404 chache');
            response.write(html404);
        }
        response.end();
    }
});

server.listen(PORT, function(){
    console.log("== listening...");
});