const user = {
    username: "jay",
     price: 999,

     welcomemessage: function() {
        console.log('${this.username} , welcome to website');
        console.log(this); 
    }

}

// user.welcomemessage()
// user.username = "Aj"
// user.welcomemessage()

console.log(this);

// function buddy() {
 //   let username = "hunny"
   // console.log(this.username);
// }

// chai()

// const chai = function () {
   // let username = "hunny"
  //  console.log(this.username);
// }

const chai = () => {
     let username = "hunny"
     console.log(this.username);
  }


  // chai()

  // const addTwo = (num1, num2) => {
   // return num1 + num2
  // }

  // const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Ajy"})


console.log(addTwo(3, 4))


// constyArray = (2, 5,3, 7, 8)

// MyTypeArray.foreach()