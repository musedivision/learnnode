//  ## TIME SERVER (Exercise 10 of 13) 

// listen to TCP connections on port provided
// return a "YYYY-MM-DD hh:mm"   "2013-07-06 17:42"  date string followed by a new line character

//  strftime : %F = YYYY-MM-DD , %R = hh:mm

var net = require("net")
var strftime = require("strftime")

var port = Number(process.argv[2])
    
var server = net.createServer( (socket) => {
    
    // create the date object
    var data = strftime('%F %R%n')
    
    socket.write(data)
    socket.end()    
})


server.listen(port)

// OFFICIAL SOLUTION

var net = require('net')  
       
     function zeroFill (i) {  
       return (i < 10 ? '0' : '') + i  
     }  
       
     function now () {  
       var d = new Date()  
       return d.getFullYear() + '-' +  
         zeroFill(d.getMonth() + 1) + '-' +  
         zeroFill(d.getDate()) + ' ' +  
         zeroFill(d.getHours()) + ':' +  
         zeroFill(d.getMinutes())  
     }  
       
     var server = net.createServer(function (socket) {  
       socket.end(now() + '\n')  
     })  
       
     server.listen(Number(process.argv[2]))