let data = [11,22,33,44,55,66,77,88];

/*======| Max & Min |========*/
// MaxNum = (a) =>{
//     return Math.max.apply(null,a)
// };
// console.log(MaxNum(data));
// MinNum = (a) =>{
//     return Math.min.apply(null,a)
// };
// console.log(MaxNum(data));
// console.log(MinNum(data));
        

/*======| forEach => convert array into string |========*/
// let a = "";
// data.forEach((val, index)=>{
//     a = a + " " + val;
// })
// console.log(a);

/*======| Map |========*/
// let a = [];
// a = data.map((val, index)=>{
//     return val * 6;
// })
// console.log(a);

/*======| Filter |========*/
// let a = [];
// a = data.filter((val, index)=>{
//     return val >= 33;
// })
// console.log(a);

/*======| Reduce |========*/
// let abc;
// abc = data.reduce((a,val, index)=>{
//     return a + val;
// })
// console.log(abc);
/*======| Reduce Right |========*/
// let abc;
// abc = data.reduceRight((a,val, index)=>{
//     return a + val;
// })
// console.log(abc);