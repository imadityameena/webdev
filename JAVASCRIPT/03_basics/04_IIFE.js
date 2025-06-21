// Immediately Invoked function Expressions (IIFE)

(function chai(){ //named IIFE
    console.log(`DB CONNECTED`);
    
})();

( (name) => { //Simple IIFE
    console.log(`DB cnnected two ${name}`);
    
})('aditya')