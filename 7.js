// Date Method

let d = new Date();
// console.log(d);
// let d = new Date("2024-05-23 07:17 AM");
// console.log(d);
// Year , Month , Date , Hour , Minute , Second  => month (0 - 11)
// let d = new Date(2024,4,23,7,17,47);
// let d = new Date(2024,4,23,7,17,77);
// console.log(d); 

// console.log(d.toString());    
// console.log(d.toDateString());
// console.log(d.toISOString());
// console.log(d.toUTCString());
// console.log(d.toLocaleDateString());
// console.log(d.toLocaleTimeString());
// console.log(d.toLocaleString());

// console.log(d.getFullYear());
// console.log(d.getMonth());
// console.log(d.getDate());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());
// console.log(d.getTime());
// console.log(d.getDay());
// console.log(d.getTimezoneOffset());

// d.setDate(23);
// d.setFullYear(2023);
// d.setMonth(4);
// d.setHours(7);
// d.setMinutes(17);
// d.setSeconds(47);
// d.setMilliseconds(47);
// d.setTime(259464665200);
// console.log(d);





// Pattern
// let i, j , k;

// for(i=0;i<=5;i++){
//     for(k=5;k>i;k--){
//         process.stdout.write(" ");
//     }
//     for(j=0;j<i;j++){
//         process.stdout.write(" *");
//     }
//     console.log("")
// }
// for(i=4;i>0;i--){
//     for(k=4;k>=i;k--){
//         process.stdout.write(" ");
//     }
//     for(j=i;j>0;j--){
//         process.stdout.write(" *");
//     }
//     console.log("")
// }

let c = [2,6,3,4,5,1];

console.log(c);
c.sort(function(a,b){return a - b})
console.log(c.reverse());
// c.Math.max(...c)
console.log(c);
