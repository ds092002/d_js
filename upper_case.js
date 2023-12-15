// let alph = prompt("Enter Alphabetic String : ");

// let r = upperCase(alph);
// console.log("First Letter Upper Case : ",r);

// function upperCase(string) {
//     let wordS = string.split('');
//     let wordSec = charAt(0).toUppercase();
//     let words = string.slice(1);
//     return wordS + wordSec + words;
// }
// .join('');
let alph = prompt("Enter Alphabetic String: ");

let r = upperCase(alph);
console.log("First Letter Uppercase: ", r);

function upperCase(string) {
    let words = string.split(' ');
    let result = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let capitalized = word.charAt(0).toUpperCase() + word.slice(1);
        result.push(capitalized);
    }

    return result.join(' ');
}

    





// function convertFirstLetterToUppercase(str) {
//     // Split the string into an array of words
//     const words = str.split(' ');
  
//     // Iterate over each word and convert the first letter to uppercase
//     const convertedWords = words.map(word => {
//       const firstLetter = word.charAt(0).toUpperCase();
//       const restOfWord = word.slice(1);
//       return firstLetter + restOfWord;
//     });
  
//     // Join the modified words back into a string
//     const convertedString = convertedWords.join(' ');
  
//     return convertedString;
//   }
  
//   // Example usage
//   const inputString = 'the quick brown fox';
//   const convertedString = convertFirstLetterToUppercase(inputString);
//   console.log(convertedString); // Output: 'The Quick Brown Fox'
  