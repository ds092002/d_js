/* Function  */

// let x = function(a,b){return a * b };
// let z = x(4,3);
// console.log(z);


/* Self - invoking Function ---   IIFE */

// (function () {
//     let x = "Hello ! I Called My Self";
//     console.log(x);
// })();


/* Function Constrcuctor */

// const myFunction = new Function("a","b","return a * b");
// let x = myFunction(4,3);
// console.log(x);


/* Arrow Function */

// ES5

// let x = function(x,y){
//     return x * y;
// }
// console.log(x(7,7));

// ES6

// let x = (x,y) => x * y;
// console.log(x(7,7));


/* Function Are Object */

function myFunction(a,b){
    return a * b;
}
let text = myFunction.toString();
console.log(text(4,5));