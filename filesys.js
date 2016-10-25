// Exercise 3: MY FIRST I/O
var fs = require('fs')


// grab the path and the read the file object
var buffer = fs.readFileSync(process.argv[2])

// transform buffer object to string - split - then count
var lineCount = buffer.toString().split(/\n/).length -1

// print answer
console.log(lineCount)

// OFFICIAL SOLUTION
var fs = require('fs')  
       
var contents = fs.readFileSync(process.argv[2])  
var lines = contents.toString().split('\n').length - 1  
console.log(lines)  
       
// note you can avoid the .toString() by passing 'utf8' as the  
// second argument to readFileSync, then you'll get a String!  
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1  