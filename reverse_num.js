let num = Number(prompt("Enter Number : "));

let r = a(num);
console.log("Currect Number : ",num);   
console.log("The Reverse Number is : ",r);

 function a(n) {
    let sum = 0 ;
    while (n!=0) {
        sum = sum * 10 + n%10;
        n = Math.floor(n / 10);
    }
    return sum;
}



// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter Number: ', (num) => {
//   let reversed = reverseNumber(parseInt(num));
//   console.log("Original Number: ", num);
//   console.log("Reversed Number: ", reversed);
  
//   rl.close();
// });

// function reverseNumber(n) {
//   let reversed = 0;
//   while (n !== 0) {
//     reversed = reversed * 10 + n % 10;
//     n = Math.floor(n / 10);
//   }
//   return reversed;
// }

