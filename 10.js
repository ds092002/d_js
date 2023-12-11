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

function myFunction(a, b, c) {
    return a, b, c;
}
let text = myFunction(1, 2, 3);
console.log(text);

// for string
// function myFunction(a,b){
//     return a * b;
// }
// let text = myFunction.toString();
// console.log(text(4,5));

// for Length
// function myFunction(a,b){
//     return arguments.length;
// }
// let text = myFunction;
// console.log(text(4,5));


/*  Arrow Function => */

// ES5

// let x = function(x,y){
//     return x * y;
// }

// console.log(x(4,5));

// ES6

// const x = (x,y) => x * y;
// console.log(x(10,5));


/* Function Rest Parameters */

// function sum(...args){
//     let sum = 0;
//     for (let i = 0; i < args.length; i++)
//             sum+=args[i];
//     return sum;
// }

// let x = sum(1,2,3,4,5,6,7,8,9,10);
// console.log(x);


/* Argument Object */

// function sum(){
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++)
//             sum += arguments[i];
//     return sum;
// }

// let x = sum(1,2,3,4,5,6,7,8,9);
// console.log(x);
