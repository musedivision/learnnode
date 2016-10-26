// my filter print module
// three arguments 
// directory name : filename extension string : callback function

var fs = require("fs")
var path = require("path")


function filterPrint(dir, ext, callback) {
    
    // start async file dir read
    fs.readdir(dir, function(err, list){
        
        if(err) {return callback(err)} // error handled
        
        var data = list.filter((file) => {
            return (path.extname(file) === `.${ext}`)
        })
        
        callback(null, data)
    })
    
}


module.exports = filterPrint