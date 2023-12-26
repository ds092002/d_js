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


// let x = 10 , y = 20 , z;

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
// z = 40;
// console.log(x,+y,z);
// console.log(x != y);   // true
// console.log(1^1);   // 0
// console.log(0^1);   // 1
// console.log(0^0);   // 0
// console.log(1^0);   // 1
// console.log(1^0^1);   // 0
// console.log(1^1^1);   // 1
// console.log(0^1^1);   // 0
// console.log(0^1^0);   // 1
// console.log(0^0^0);   // 0

// console.log(null===NaN);   // false
// console.log(null==NaN);   // false
// console.log(null==undefined);   // true
// console.log(null===undefined);   // true


// console.log(typeof(10));
// console.log(typeof('10'));
// console.log(typeof(true));
// console.log(typeof(10 - 5));
// console.log(typeof(10 - "5"));
// console.log(typeof('10' - "5"));   

/* Conditional Statement*/

// let a = Number(prompt('Enter a : '))
// let b = Number(prompt('Enter b : '))

// if (a>b) {
//     console.log("big");
// }else{
//     console.log("small");
// }

// a = 10210111;
// console.log(typeof(a));
// console.log(typeof(`PASS`));


// == in JavaScript is used for comparing two variables, but it ignores the datatype of variable. === is used for comparing two variables, but this operator also checks datatype and compares two values. Checks the equality of two operands without considering their type. Compares equality of two operands with their types.


/* MAP Method */

// hold key-value pairs   EX:- "BMW",100   key :- BMW , value :- 100

// let data = new Map([["BMW",100],["Audi",200],["VOLVO",300]]);
// console.log(data);

// data.set("Thar",400);
// console.log(data);
// console.log(data.get("VOLVO"));
// console.log(data.set("Neno",600));
// data.delete("Neno");
// console.log(data);
// console.log(data.has("Neno"));
// console.log(data.entries());
// console.log("Map Size : ",data.size);

// let txt = "";
// data.forEach((val , str) =>{
//     txt = txt + str + " => " + val + "\n";
// });
// console.log(txt);


/* SET Method */

// set is a collection of unique value. each value can an occur once in set


// let arr = new Set(["BMW","Volvo","Audi"]);
// console.log(arr);

// arr.add("Thar");
// console.log(arr);
// console.log(arr.add("Benz"));
// arr.delete("Benz");
// console.log(arr);
// console.log(arr.has("Benz"));
// // arr.clear();
// // console.log(arr);
// console.log(arr.entries());
// console.log("SET Size : ",arr.size);

// let txt = "";
// arr.forEach((str) => {
//     txt = txt + str + "\n";
// });
// console.log(txt);


/* String */


// collection of characters (array)

// let txt;
// let str = "Hello World";
// let str = 'Skill Qode'
// console.log(str);
// txt = 'Hello " Indian '
// txt = 'My Name Is "Dhaval"'
// console.log(txt);

// let data = "JavaScript is the world's most popular programming language.JavaScript is the programming language of the Web.";    // 110

// let a = data.length
// console.log(a);
// console.log(data.length);

// end position not include in slice
// console.log(data.slice(5,12));
// console.log(data.slice(-16,-8));
// console.log(data.slice(-5));
// console.log(data.slice(-7));

// substring() is similar to slice().
// console.log(data.substring(7,19));
// console.log(data.substring(-4,5));
// console.log(data.substring(-4,13));


// substr() is similar to slice(). but the difference is that second perameter is specifies the length.
// console.log(data.substr(14,5));
// console.log(data.substr(-7,7));

// replace() method replace a specified value with another value
// console.log(data.replace("JavaScript","C"));
// console.log(data.replace(/JavaScript/g,"C++"));

// console.log(data.replaceAll("language","Devloper"));
// console.log(data.replaceAll("is ","are "));

// console.log(data.toUpperCase());
// console.log(data.toLowerCase());

// let data2 = 'String Methods';
// console.log(data.concat("  ",data2).concat(". String to rest of all String"));


// console.log(data);
// console.log(data.trim());
// console.log(data.trimStart());
// console.log(data.trimEnd());

// const d = "Dhaval";
// console.log(d.padStart(9,"007"));
// let txt = "Hello";
// console.log(txt.padStart(8,"XXX"));

// const d = "Dhaval";
// console.log(d.padEnd(9,"007"));
// let t = "Hello";
// console.log(t.padEnd(8,"XXX"));
// let txt = "1234";
// console.log(txt.padEnd(8,"*"));
// console.log(txt.padEnd(8,"*").concat(9));


// chatAt return the string charecter with using  index number
// console.log(data.charAt(24));

// charCodeAt return the string charecters Ascci Value with using  index number and they return a UTF-16 Code in between 0 and 65535.
// console.log(data.charCodeAt(24));


// split() method is convert sting to array
// console.log(data.split(" "));



/* Math Object */

// console.log(Math.E);   // return euler's number 2.718281828459045
// console.log(Math.PI);

// console.log(Math.round(4.2));    // return nearest integer
// console.log(Math.round(4.6));
// console.log(Math.round(-4.9));

// console.log(Math.ceil(5.1));      // return Ronud up value
// console.log(Math.ceil(8.2));
// console.log(Math.ceil(-6.5));

// console.log(Math.floor(4.6));     // return Round Down value
// console.log(Math.floor(7.2));
// console.log(Math.floor(-7.2));

// console.log(Math.trunc(7.79789));    // removing fectorial digit
// console.log(Math.trunc(-8.23));

// console.log(Math.sign(7));   // return negetive , positive , null 
// console.log(Math.sign(0));
// console.log(Math.sign(-7));

// console.log(Math.pow(4,4));    // return x to the power of y 
// console.log(Math.pow(10,4));

// console.log(Math.sqrt(256));      // return squre root of number
// console.log(Math.sqrt(625));
// console.log(Math.sqrt(25));

// console.log(Math.abs(-7));      // return absolute (positive) number
// console.log(Math.abs(-2.23));
// console.log(Math.abs(.23));

// console.log(Math.min(52,63,10,2,8,7));
// console.log(Math.max(52,63,10,2,8,7));

// console.log(Math.random());



/*
    Math.E eluer number
    Math.PI pi number
    Math.round  return nearest number
    Math.ceil   return round up value
    Math.floor return round down value
    Math.trunc  remove fectorial digit
    Math.abs  return absolute (positive) number
    Math.pow  return x power by y
    Math.min  return minimum number
    Math.max  return maximum number
    Math.sqrt  return squre root
    Math.sign  return negitive, positive , null number
*/



/* Date Method */

// let d = new Date();
// console.log(d);
// let d = new Date("2024-03-09 06:30 AM")
// console.log(d);
// let d = new Date(2024,9,2,5,18,62)    // => year,month,date,hour,min.sec  => month = 0 - 11 
// console.log(d);

// console.log(d.toString());    //Tue Dec 26 2023 17:47:27 GMT+0530 (India Standard Time)
// console.log(d.toDateString()); //Tue Dec 26 2023
// console.log(d.toISOString()); //2023-12-26T12:18:14.854Z
// console.log(d.toUTCString()); // Tue, 26 Dec 2023 12:18:24 GMT
// console.log(d.toLocaleDateString()); // 26/12/2023
// console.log(d.toLocaleTimeString());//17:48:37
// console.log(d.toLocaleString()); //26/12/2023, 17:48:43

// console.log(d.getFullYear());    // get year in four digit
// console.log(d.getMonth());      // get month in  (0-11)
// console.log(d.getDate());       // get Date in (1-31)
// console.log(d.getDay());        // get Weekday in (0-6)
// console.log(d.getHours());      // get hours (0-23)
// console.log(d.getMinutes());    // get minites (0-59)
// console.log(d.getSeconds());    // get seconds (0-59)
// console.log(d.getMilliseconds()); // get millisec (0-999)
// console.log(d.getTime());       // get Time since january 1, 1970
// console.log(d.getTimezoneOffset()); 

// d.setFullYear(2023);
// d.setMonth(2);
// d.setDate(9);
// d.setHours(6);
// d.setMinutes(30);
// d.setSeconds(30);
// d.setMilliseconds(999);
// //d.setTime(1615645665566);
// console.log(d);



// let data = "777";
// console.log(data);
// console.log(Number(data));

// let data = 12.47995404;
// console.log(data);
// console.log(data.toString());
// console.log((12+4565).toString());

// let x = 2.718281828459045;
// console.log(x.toExponential(8));
// console.log(x.toExponential(6));
// console.log(x.toExponential(5));
// console.log(x.toExponential(4));
// console.log(x.toExponential(2));

// let x = 2.718281828459045;
// console.log(x.toFixed(8));
// console.log(x.toFixed(2));
// console.log(x.toFixed(6));

// let x = 2.718281828459045;
// console.log(x.toPrecision(10));
// console.log(x.toPrecision(6));

// let x = 2.718281828459045;
// console.log(x.valueOf());
// console.log((45+65).valueOf());


// console.log(Number(true));
// console.log(Number(false));
// console.log(Number("10"));
// console.log(Number("98 "));
// console.log(Number(" 69"));
// console.log(Number(" 69   "));
// console.log(Number("143.69"));
// console.log(Number("13,69"));
// console.log(Number("13 69"));
// console.log(Number("D2"));         

// console.log(parseInt('-20'));
// console.log(parseInt('-20.7'));
// console.log(parseInt('7'));
// console.log(parseInt('7 8 9'));
// console.log(parseInt('25 year'));
// console.log(parseInt('year 02'));

// console.log(parseFloat('496'));
// console.log(parseFloat('-496.745'));
// console.log(parseFloat('   56 '));
// console.log(parseFloat('45   '));
// console.log(parseFloat('  5    '));
// console.log(parseFloat('745 old'));
// console.log(parseFloat(' bvyhui 6458'));

// console.log(Number.isInteger(10));
// console.log(Number.isInteger(-1.7));
// console.log(Number.isInteger(6.7));

// console.log(Number.isSafeInteger(45595495954945555544145612121020202));
// console.log(Number.isSafeInteger(45.26));

console.log(Number.parseFloat("456"));
console.log(parseFloat("456"));