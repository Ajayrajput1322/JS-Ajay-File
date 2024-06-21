const userEmail = "A@Ajjay.ai"

if (userEmail) {
    console.log("Got user Email");
} else {
    console.log("Dont have user email");
}

// false values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
   // console.log("Array is empty");
// }
 
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish coaleshing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ? 10 ?? 10



console.log(val1);

// Terniary operator

// condition ? true : false

const iceteaprice = 100
iceteaprice >= 80 ? 100 console.log("less than 80") : console.log("more yhan 80");