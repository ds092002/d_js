// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr1)

// const myArr = arr1.join()
// console.log(myArr)

// slice, splice

// console.log("A", arr1);  //A [1, 2, 3, 4,5, 6, 7, 8]
// myn1 = arr1.slice(1,4);
// console.log(myn1);  //[ 2, 3, 4 ]
// console.log("B", arr1);   //B [1, 2, 3, 4,5, 6, 7, 8]

// const myn2  = arr1.splice(1,4);
// console.log("c", arr1);  // c [ 1, 6, 7, 8]
// console.log(myn2);   // [ 2, 3, 4, 5 ]

// const marvel_heros = ["Ironman", "Thor","Spiderman"];
// const dc_heros = ["Superman","Batman","Wonder Women"];

// let heros = marvel_heros.concat(dc_heros);
// console.log(heros);

// marvel_heros.flat();
// console.log(marvel_heros);

// let heros = [...marvel_heros,...dc_heros]
// console.log(heros);


// const arr = [1,2,[3,4,5,[6,7,8],[9,10,11],11,12]]
// console.log(arr);
// let aarr2 = arr.flat(Infinity);
// console.log(aarr2);

// console.log(Array.isArray("Dhaval")) // false
// console.log(Array.from("Dhaval")) // [ 'D', 'h', 'a', 'v', 'a', 'l' ]
// console.log(Array.from({name:"Dhaval"})) // []


// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1,score2,score3));

const mySym = Symbol("Dhaval")

const JsUser = {
    name: "Dhaval",
    age: 21,
    email: "dhavalas2002@gmail.com",
    phone: 9999999999,
    location: 'Surat',
    "full Name": "Dhaval Solanki",
    [mySym] : "DS"
}

// JsUser.email = "dhavalas2002@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "dhavalas2002@linkedin.com"

// console.log(JsUser.email);
// console.log(JsUser);
// console.log(JsUser['name']);
// console.log(JsUser["full Name"]);
// console.log(JsUser[mySym]);

JsUser.greeting = function () {
    console.log("Hello Js User");
}

JsUser.greeting2 = function () {
        console.log(`Hello Js User, mr.${this["full Name"]}`);
    }
    
console.log(JsUser.greeting());
console.log(JsUser.greeting2());

