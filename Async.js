// Exercise 4: ASYNC I/O
var fs = require("fs")

var lines = 0

// callback for async file read - cool beans
function callback(err, buffer) {
    lines = buffer.split(/\n/).length -1
    console.log(lines)
    if(err) {console.log(err)}
} 

fs.readFile(process.argv[2], 'utf8', callback)

// OFFICIAL SOLUTION
var fs = require('fs')  
var file = process.argv[2]  
       
fs.readFile(file, function (err, contents) {  
    if (err) {  
        return console.log(err)  
    }  
    // fs.readFile(file, 'utf8', callback) can also be used  
    var lines = contents.toString().split('\n').length - 1  
    console.log(lines)  
})  

