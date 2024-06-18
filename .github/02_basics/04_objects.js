// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Rahul"
tinderUser.isLoggedIn = False

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    Fullname: {
        UserFullname: {
            Firstname: "Ajay",
            lastname: "Rajput"
        }
    }
}

console.log(regualrUser.Fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1,obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, obj2}
console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    }
    {
        id: 1,
        email: "h@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(object.keys(tinderuser));
console.log(object.values(tinderuser));
console.log(object.entries(tinderuser));

console.log(tinderUser.hasownproperty('isLoggedin'));






const course = {
    coursename: "js in hindi",
    price: "999", 
    courseInstructor: "ajay"
 }
 
 // course.courseInstructor
 
 const {courseInstructor: instructor} = course
 
 // console.log(courseInstructor);
 console.log(instructor);
 
 
 //*JSON **********************/ /
 
 // {
 //   "name": "ajay",
 //  "coursename": "js with Ajay",
 //   "price": "free"
 //}
 
 [
     {},
     {},
     {}
 ]