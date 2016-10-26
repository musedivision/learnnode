// HTTP COLLECT (Exercise 8 of 13) 

// output - 1st line - interger of number of characters in all data
//          2nd line - complete string of characters received 


var http = require("http")
var bl = require("bl")

http.get(process.argv[2], (response) => {
    
    response.setEncoding('utf8')
    
    response.pipe(bl((err,data) => {
        if(err){console.error(err)}
        
        var complete = data.toString()
        
        console.log(complete.length)
        console.log(complete)
    }))
    
    response.on('error', console.error)
}).on('error', console.error)