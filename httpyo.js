//  HTTP CLIENT (Exercise 7 of 13)  

var http = require("http")

var url = process.argv[2]

http.get(url, (response) => {
  
  response.setEncoding('utf8')
  
  response.on('data', (stuff) => {
      console.log(stuff)
  })
  
  response.on('error', console.error) // handle error logging
  
}).on('error', console.error)


// OFFICIAL SOLUTION
    var http = require('http')  
       
     http.get(process.argv[2], function (response) {  
       response.setEncoding('utf8')  
       response.on('data', console.log)  
       response.on('error', console.error)  
     }).on('error', console.error)  
