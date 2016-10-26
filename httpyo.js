//  HTTP CLIENT (Exercise 7 of 13)  

var http = require("http")

var url = process.argv[2]

http.get(url, (response) => {
  
  response.setEncoding('utf8')
  response.on('data', (stuff) => {
      console.log(stuff)
  })
  
    
})

