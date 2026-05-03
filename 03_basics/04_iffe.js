// Immediately Invoked Function Expression (IIFE)


// IIFE is a function that is executed immediately after it is defined. It is a common JavaScript pattern used to create a new scope and avoid polluting the global namespace.

(function chai() {
    //name IIFE
console.log(`DB CONNECTED`);

})();

( (name)  => {      //(name) => parameter pass of IIFE
    //unnamed IIFE
console.log(`DB CONNECTED TWO ${name}`);
} )("Vijul");



//2 IFFE ke liye " ; "