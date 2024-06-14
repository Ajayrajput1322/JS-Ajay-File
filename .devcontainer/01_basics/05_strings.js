const name = "Ajay"
const repocount = 50
// console.log(name + repocount + "value");

console.log(`Hello my name is ${name}my repo count is ${repocount}`);


const gameName = new String('Ajayhhc')

console.log(gameName[0]);
console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUppercase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newstring = gameName.substring(0, 4)
console.log(newString);

const anotherstring = gameName.slice(-8,4)
console.log(anotherstring);

const newStringOne = "   Ajay   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Ajay.com/Ajay%30Rajput"

console.log(url.replace('%30', '-'));

url.includes(url.includes('Rahul'))

console.log(gameName.split('-'));