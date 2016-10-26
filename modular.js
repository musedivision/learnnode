// MAKE IT MODULAR (Exercise 6 of 13) 

var fp = require("./filterPrint.js")

var dir = process.argv[2]
var ext = process.argv[3]

fp(dir, ext, function(error, data) {
    
    if(error) {console.error('There was an error', error)}
    
    data.forEach((file) => {
        console.log(file)
    })
})

