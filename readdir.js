// exercies 5: filtered ls

var fs = require("fs")
var path = require("path")

var dir = process.argv[2]
var ext = `.${process.argv[3]}`

//refactor with path
function filterPrint(list){
    list.forEach((file) => {
        if(path.extname(file) === ext){
            console.log(file)
        }
    })
}

// start async file dir read
fs.readdir(dir, function(err, list){
    if(err) {console.log(err)}
    filterPrint(list)
})

//first try
// function printer(list) {
//     // fitler
//     list = list.filter((str) => {
//         return (str.search(ext) !== -1)
//     })
    
//     // print
//     list.forEach((item) => {
//         console.log(item)
//     })
// }