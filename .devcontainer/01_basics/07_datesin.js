// Dates

let mydate = new Date()
console.log(myDate.tostring());
console.log(myDate.toDatestring());
console.log(myDate.toLocalestring());
console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 0, 23)
// let myCreatedDate = new Date(2024, 0, 23, 5, 3)
// let myCreatedDate = new Date("2024-01-14)"
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.tolocaleString());

let myTime = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth() + 1);
console.log(newdate.getDay());

// '${newDate.getDay()} and the time '

newdate.toLocalestring('default',{
    weekday: "long"
})




