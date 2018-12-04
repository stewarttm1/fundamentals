//Booleans
//What is a boolean?
var on = true;
console.log(on);//true
let off = false;
console.log(off); //false

//boolean can represent: true/falso, yes/no, on/off

//null = empty value (not 0; not undefined)
var empty = null;
console.log(empty); //null

var undef = undefined;
console.log(undef); //undefined

let grass;
console.log(grass); //undefined
/*
We've talked before about how every variable is basically a storage container in Javascript
think of variables with null and undefined as packages coming out of UPS
null packages are packages that were intentionally packed up with nothing, but have been assembled
undefined packages are packages that have nothing in them, but have not yet been assembled to leave UPS
*/

//Numbers
var degrees = 90;
console.log(degrees);

var precise = 999999999999999;
console.log(precise);

var rounded = 999999999999999;
console.log(rounded);

var notQuite = 0.2 + 0.1;
console.log(notQuite);

var numbersarehard = (.2*10+0.1*10)/10;
console.log(numbersarehard);

let stringone = "double quotes";
let stringtwo = "single quotes";
console.log(stringone,stringtwo);

//Numbers VS Strings
let first = 1050 + 100;//1150
let second = "1050" + "100";
console.log(first);
console.log(second);
console.log(typeof first);

/*
Addition vs Concentration

When JS sees combining two or more numbers, it adds the values together using the uilt-in
math functionality; when it sees adding together one or more strings, it changes and the plus
sign becomes an assignment operator-- it smashes the values together without trying to synthesize the values
*/

let third = 1050 + "100";

console.log(third);
console.log(typeof third);

var firstName = "Taylor";
var lastName = "Stewart";
var housenumber = "10547";
var street = "Greenway Drive";
var city = "Fishers";
var state = "IN";
var zipcode = 46037;

console.log(firstName,lastName);
console.log(housenumber,street);
console.log(city +",", state, zipcode);

console.log(`${firstName} ${lastName} \n${housenumber} ${street} \n${city} ${state} ${zipcode}`)//keep this shit

//objects
/*
What is an object?

A container that can hold multiple data types.

Denoted by {}
Has keys and values (color(key): "blue" (value)), seperated with a colon
Each key seperated with a comma
*/

let burritosNow = {
    size: "large",
    quantity: 4,
    now: true,
};
console.log(burritosNow);
console.log(typeof burritosNow);//object

/*
Arrays are great for lists

Denoted by []
Has values ("blue","red","green"), seperated with commas
/*

var burritos = ["large", 4, true];
console.log(burritos);// ["large", 4, true]

console.log(typeof burritos);// object
*/
