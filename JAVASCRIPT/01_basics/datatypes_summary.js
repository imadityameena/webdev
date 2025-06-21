// Primitive Datatype

// 7 types : string, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggeedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);


const bigNumber =54325364247278367266n


//Reference (Non-primitive) Datatype

// Array, objects, functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "aditya",
    age: 21,
}

const myfunction = function(){
    console.log("Hello,world")
}

console.log(typeof anotherId)


// ---------------------------------------------------------

// Stack memory (primitive), Heap (non-primitive)

let myYoutubename = "Huppyy plays"

let anotherName = myYoutubename
anotherName = "chaiorCOde"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {

    email: "aditya@gmail.com",
    upi: "xyz@ybl"
    
}

let  usertwo = userOne

usertwo.email = "meena@gmail.com"

console.log(userOne.email);
console.log(usertwo.email);


