// console.log("HELLO WORLD")

// process.argv 
// first arg is the process.execPath - the absolute pathname of the executable that started the node process
// second arg is the path of the JS file being executed

// Exercise 2: BABY STEPS
// access the passed in arguments and sum them
var args = process.argv.slice(2, process.argv.length)

// add all the passed arguments together
args = args.reduce((prev, curr) => {
    return parseInt(prev) + parseInt(curr)
}, 0)

// print
console.log(args)

// OFFICIAL SOLUTION
var result = 0  
       
for (var i = 2; i < process.argv.length; i++) {  
    result += Number(process.argv[i])  
}  
       
console.log(result)

// Excercise 3 : 