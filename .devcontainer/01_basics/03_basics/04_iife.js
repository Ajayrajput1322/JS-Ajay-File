// Immediately Involed Function Expression (IIFE)


(function chai(){
    console.log('DB connected');
})();

( (name) => {
    console.log('DB CONNECTED TWO ${name}');
})('AJAY')