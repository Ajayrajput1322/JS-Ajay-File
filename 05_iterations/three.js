// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5] 

for ( const num of arr) {
    console.log(num);

}
const greetings = "hello world!"
for (const greet of greetings) {
    console.log('each char is ${greet}');
}

// Maps

const map = new map()
map.set('IN', "India")
map.set('USA', "united states of america")
map.Set('fr', "france")
map.set('IN', "India")


// console.log(map);

for (const key of map) {
     console.log(key, ':-', value);
}

const myobject = {
    'game1': 'NFS',
    'game2': "spiderman"
}

// for (const [key, value] of myObject) {
   // console.log(key, ':-', value);

   //}
