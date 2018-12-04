console.log("hello world")
//cmd ? highlighted : comment out
/*aasfaf
af
a
faf*/
//console.log is a great tool to debug later down the line. For now we're going to use it as a learning tool

var a = 1
var A = 1 /* capitalization is a big thing to pay attention to with variables*/

console.log(A)

var b = 1
var b = 2
console.log(b)

let c = 3//let is a lot stricter of a command, harder to overwrite
c = 4
console.log(c)

var firstName = "Taylor"
const lastName = "Stewart"
console.log(firstName,lastName)
firstName = "Chris"
console.log(firstName,lastName)

/*
Declarations are the LEFT SIDE of a variable
    It is simply the var x
    It is on the left side of the assignment operator(=)

Initializations are the RIGHT SIDE of a variable
    It sets the value of the variable
    It incorporates te variable name (x), the assignment operatr (=), and the value (10) =>x = 10
*/

var x
console.log("Declarations:", x);

x = 10
console.log("Initialization 1:", x);

var y ="Hello"
console.log("Both:",x,y)

