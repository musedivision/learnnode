// HTTP JSON API SERVER (Exercise 13 of 13)  

var http = require("http")
var url = require("url")
    
function parsetime(time) {
    return {
            "hour": time.getHours(),
            "minute": time.getMinutes(),
            "second": time.getSeconds()
        }
}

function unixtime(time) {
    return {
        "unixtime": time.getTime()
    }
}


var server = http.createServer(function(req,res){
    
    var urlParts = url.parse(req.url, true);
    var reqPath = urlParts.pathname
    var time = new Date(urlParts.query.iso)
    var result 
    
     
    //  parsetime endpoint logic
    if(reqPath === "/api/parsetime") {
        result = parsetime(time)
    }
    // UNIX time endpoint logic
    if(reqPath === "/api/unixtime") {
        result = unixtime(time)
    }
    
    
    // send response
    if(result){
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(result))
    } else {
        res.writeHead(404)
        res.end()
    }
})

server.listen(Number(process.argv[2]))

// edited my solution to refactor it with a better separation of concerns
// i had my logic to get the different times inside the server body, i moved them into functions - very nice :)