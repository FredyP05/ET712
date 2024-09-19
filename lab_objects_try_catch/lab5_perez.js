/*
Sept 19, 2024
Try-catch
*/

console.log("\n---- Example 1: try-catch ----")
// define a function to display a message in upper-case
function yell(message){
    console.log(message.toUpperCase().repeat(3))
}
try{
// call the function
yell(" Good morning ")
yell(123)
}
catch(e){
    console.log(`ERROR! ${e}`)
}
finally{
    console.log("End of calling function yell()")
}
// after example
console.log("\n ---- lines after example 1 ---- ")

console.log("\n---- EXERCISE ----")
// Define a JavaScript function named 'divideNumbers' that takes two parameters, 'a' and 'b'/
// The function should attempt to divide 'a' and 'b' and return the result.
// if the division is undefined, return a message that says 'Error performing the division'
// use try-catch inside the function

function divideNumber(a, b){
    let divide = a/b
    return divide
}   

let s = divideNumber(10,5)
console.log(`Divison example: 10/5 is ${s}`)