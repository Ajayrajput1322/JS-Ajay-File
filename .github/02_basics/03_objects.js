// singleton
// object create

// objects literals

const mySym = symbol("key1")


const Jsuser = {
    name: "Ajay",
    "full name":"Ajay Rajput",
    [mySum]:"myKey1",
    age: 18,
    location: "jaipur",
    email: "ajay@google.com",
    iaLoggedin: false,
    lastLogindays: ["Monday", "Saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym])

Jsuser.email = "Ajay@chatgpt.com"
Object.freeze(jsuser)
jsuser.email = "ajay@googlus.com"
// console.log(jsuser);

jsuser.greeting = function(){
    console.log("Hello js users");
}
jsuser.greetingTwo = function(){
    console.log('Hello JS users, ${this.name}');
}

console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());