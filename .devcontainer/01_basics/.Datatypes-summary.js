// primitive

// 7 types : string, Number, Boolearn, null, undefined, symbol, Bigint

const score = 100
const scorevalue = 100.3

const isLoggedIn = False
const outsidetemp = null
let userEmail;

const id = symbol('123')
const anotherId = symbol('123')

console.log(id === anotherId);

//const bigNumber = 3456785327678965n



// Reference (Non primitive)

// Array, objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name:"Ajay Rajput",
    age: 20,
}

const myfunction = function(){
    console.log("Hellow world");

}
console.log(typeof outsidetemp);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive), Heap (non-primitive)

let Myyoutubename = "Ajayrajputdotcom"
let anothername = Myyoutubename
anothername = "codewithAjay"

console.log(Myyoutubename);
onsole.log(anothername);

let username = {
    email : "Ajay@gmail.com",
    upi: "Ajay@ybl"
}

let userTwo = userOne

userTwo.email = "Ajay123@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);