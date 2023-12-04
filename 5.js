/*
        string => collection of characters (Array)
*/

// let txt;
// let str = "Hello World";
// str = 'Skill Qode'

// txt = "Hello Guys'How Are You"
// txt = 'Hello Guys"How Are You'

// console.log(txt);

/*
        String Methods
        Length -> property
        slice(start position , end position)
        substing(start position , end position)
        substr(start position , length)
        toUpperCase -> upper case convert
        toLowerCase -> lower case convert
        charAt -> return index character
        charCodeAt -> return index character ASCII value
        concat -> merge two string
*/        

let data = "JavaScript is the world's most popular programming language.JavaScript is the programming language of the Web.";

// console.log(data.length)

// console.log(data.slice(12,56));          // s the world's most popular programming langu
// console.log(data.slice(20));          // string to rest of all string
// console.log(data.slice(-18,-5));          // last to counting
// console.log(data.slice(-18));          // last to counting

// console.log(data.substring(12,56));          // s the world's most popular programming langu
// console.log(data.substring(20));          // string to rest of all string
// console.log(data.substring(-4));          // counting to 0
// console.log(data.substring(-4 , 5));          // counting to 0

// console.log(data.substr(5,23));     // cript is the world's mo
// console.log(data.substr(-5,23));     //  Web.

// console.log(data.toUpperCase());
// console.log(data.toLowerCase());

// console.log(data.charAt(56));
// console.log(data.charCodeAt(56));

console.log(data.concat("Hello" , "\n Skill Qode"));