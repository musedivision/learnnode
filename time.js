//  ## TIME SERVER (Exercise 10 of 13) 

// listen to TCP connections on port provided
// return a "YYYY-MM-DD hh:mm"   "2013-07-06 17:42"  date string followed by a new line character

//  strftime : %F = YYYY-MM-DD , %R = hh:mm

var net = require("net")
var strftime = require("strftime")

var port = process.argv[2]
    
var server = net.createServer( (socket) => {
    
    // create the date object
    var data = strftime('%F %R')
    
    socket.write(data)
    socket.end()    
})


server.listen(port)