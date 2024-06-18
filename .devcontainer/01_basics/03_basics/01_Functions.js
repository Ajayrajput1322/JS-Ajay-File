

function saymyName(){
    console.log("A");
    console.log("J");
    console.log("A");
    console.log("Y");
     
}

// saymyName()

// function addTwoNumbers(number1, number2){

   //  console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

// let result = number1 + result2  
// return result
return number1 + number2
}

const result = addTwoNumbers(3, 5)

console.log("Result: ", result);


function LoginUserMessage(username = "Aj"){
    if(!username){
      console.log("Please enter a username");  
      return
    }
    return '${username} just logged in'
}

// console.log(loginUserMessage("Ajay"))
// console.log(loginUserMessage("Rahul"))


function calculatecartprice(val1, val2, ...num1){
    return num1
 }

// console.log(calculatecartprice(290, 400, 500r));

const user = {
    username: "Ajay",
    price: 199
}

function hanleobject(anyobject){
    console.log('username is ${anyobject.username}and price is ${anyobject.price}');
}

// handleobject(user)
handleobject({
    username: "Aj",
    price: 399
})

const myNewarray = [200, 400, 500, 700]

function returnsecondvalue(geyArray){
    return getArray[1]
}

console.log(returnsecondvalue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));