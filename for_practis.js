// JavaScript is a powerful programming language that can add interactivity to a website
// It was invented by Brendan Eich in 1997.

// output method :

// 1). console.log();
// 2). alert(" ");
// 3). document.write(" ");

// Q).JavaScript contains a which type of library ?
// => A).JavaScript contains a standard library of objects, like Array, Date, and Math, and a core set of language elements like operators, control structures, and statements.


// Ways to Declare a JavaScript Variable:
// 3 type
// ● Using var x = 5;
// ● Using let y = 10;
// ● Using const d = 7;
// ● Using nothing

// var x = 10;
// var y = "World"
// console.log("X is : "+x);    // 10
// console.log("Hello "+y);     // Hello World
// alert("Hello One!!!!");
// document.write("Lerning JS",x);   // Lerning JS 10

// var x = 10;
// console.log("out",x);    // 10

// {
//     var x = 7;
//     console.log("in",x);   // 7
// }
// console.log(x);  // 7

// let x = 10;
// console.log("out",x);   // 10

// {
//     let x = 7;
//     console.log("in",x);  // 7
// }
// console.log(x);  // 10

// const x = 10;
// console.log("out",x);   // 10

// {
//     const x = 7;
//     console.log("in",x);  // 7
// }
// console.log(x);  // 10

 
/* Hoisting */

// console.log(a);
// var a;     // undefine

// console.log(a);
// let a = 10;



/* Operators */

// Operators and Operands
// The numbers or variables (in an arithmetic operation) are called operands.
// The operation (to be performed between the two operands) is defined by an
// operator.

// 1. Arithmetic => + - * / % **(Exponentiation) ++(Increment)
// 2. Relational / Comparison  => < <= > >= == != === !== ?:
// 3. Assignment  =>  = += -= *= /= %= **=
// 4. Logical  =>  &&(Logical And) ||(Logical Or) !(Logical Not) ^(XOR)
// 5. Type of


let x = 10 , y = 20 , z;

// Arithmetic =>
// console.log(x+y);    //30
// console.log(x-y);    //-10
// console.log(x*y);    //200
// console.log(y/x);    //2
// console.log(x%y);    //10
// console.log(y%x);    //0
// console.log(5**4);   //625
// // console.log(++x);    // 11
// // console.log(x++);    // 11
// console.log(x--);    // 10
// console.log(--x);    // 8


// Relation =>
// console.log(x>y);    // false
// console.log(x<y);    // true
// console.log(x>=y);    // false
// console.log(x<=y);    // true
// console.log(x==y);    // false
// console.log(x!=y);    // true
// console.log(10!='10');    // false
// console.log(10=='10');    // true
// console.log(1==true);    // true
// console.log(1!=true);    // false
// console.log(0!=true);    // true
// console.log(0==true);    // false
// console.log(1==false);    // false
// console.log(1!=false);    // true
// console.log(0!=false);    // false
// console.log(0==false);    // true
// console.log(10==='10');   // flase
// console.log(10===10);   // true
// console.log(x===y);   // false
// console.log(x!==y);   // true
// console.log((x>y)?"True" : "False");   // False
// console.log((11>3)?"True" : "False");  // True



//  Assignment =>
// let z = x;
// console.log(z);    // 10
// console.log(x);    // 10
// console.log(x+=y);   // x = x + y  => 10 + 20 = 30  
// console.log(x-=y);   // x = x - y  => 10 - 20 = -10  
// console.log(x*=y);   // x = x * y  => 10 * 20 = 200  
// console.log(x/=y);   // x = x / y  => 10 / 20 = 0.5  
// console.log(y/=x);   // y = y / x  => 20 / 10 = 2  
// console.log(y%=x);   // y = y % x  => 20 % 10 = 2
// console.log(x%=y);   // x = x / y  => 10 / 20 = 10  
// console.log(5**=2);     // 25



// z = ++x && --y;   // 11 , 19 , 19
// z = --x && ++y;   //  9 , 21 , 21
// z = x++ && ++y;   // 11 , 21 , 21
// z = ++x && ++y;   // 11 , 21 , 21
// z = ++x && y++;   // 11 , 21 , 20
// z = x++ && y++;   // 11 , 21 , 20
// z = x-- && y--;   //  9 , 19 , 20
// z = ++x || --y;   // 11 , 20 , 11
// z = --x || ++y;   //  9 , 20 , 9
// z = x++ || ++y;   // 11 , 20 , 10
// z = ++x || ++y;   // 11 , 20 , 11
// z = ++x || y++;   // 11 , 20 , 11
// z = x++ || y++;   // 11 , 20 , 10
// z = x-- || y--;   //  9 , 20 , 10
// console.log(x,y,z);
z = 40;
console.log(x,+y,z);