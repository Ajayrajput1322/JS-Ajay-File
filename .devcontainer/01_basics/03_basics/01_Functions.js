

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
console.log(loginUserMessage("Rahul"))