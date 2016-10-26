// JUGGLING ASYNC (Exercise 9 of 13)  

var http = require("http")
var bl = require("bl")

var url = process.argv.slice(2,5)
var full = []
var count = 0

function counter(data, i){
    full[i] = data
    count++
    
    if(count === url.length) {
        full.forEach((chunk) => {
           console.log(chunk) 
        })
    }
}


url.forEach((addr, i) => {
    http.get(addr, (response) => {
        
        response.pipe(bl((err, data) => {
            if(err) {console.log(err)}
            
            counter(data.toString(), i)
           
        }))
    
        
    
        response.on('error', console.error)
    }).on('error', console.error)
})
    

// OFFICIAL SOLUTION

//  this code is modularised way better than mine. i like it



     var http = require('http')  
     var bl = require('bl')  
     var results = []  
     var count = 0  
       
     function printResults () {  
       for (var i = 0; i < 3; i++) {  
         console.log(results[i])  
       }  
     }  
       
     function httpGet (index) {  
       http.get(process.argv[2 + index], function (response) {  
         response.pipe(bl(function (err, data) {  
           if (err) {  
             return console.error(err)  
           }  
       
           results[index] = data.toString()  
           count++  
       
           if (count === 3) {  
             printResults()  
           }  
         }))  
       })  
     }  
       
     for (var i = 0; i < 3; i++) {  
       httpGet(i)  
     }  