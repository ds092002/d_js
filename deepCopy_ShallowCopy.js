// Shallow Copy

// const a = {
//     name: "John",
//     age: 23
// }

// const b = a;

// b.age = 24;

// console.log(a)
// console.log(b)

// Deep Copy

// const a = {
//     name: "John",
//     age: 23
// }

// const b = {...a};

// b.age = 24;

// console.log(a)
// console.log(b)


// Here are some JavaScript interview questions along with complete snippets that you can solve. Each problem is designed to be solved in the shortest way possible while practicing key JavaScript concepts.

// 1. Reverse a String
// Write a function to reverse a string.

// javascript
// Copy code
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"
// 2. Check if a Number is Prime
// Write a function that checks if a given number is prime.

// javascript
// Copy code
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false
// 3. Find the Largest Number in an Array
// Write a function that finds the largest number in an array.

// javascript
// Copy code
function findLargest(arr) {
    return Math.max(...arr);
}

console.log(findLargest([1, 3, 7, 2, 5])); // Output: 7
// 4. Flatten an Array
// Write a function to flatten a nested array.

// javascript
// Copy code
function flattenArray(arr) {
    return arr.flat();
}

console.log(flattenArray([1, [2, 3], [4, 5]])); // Output: [1, 2, 3, 4, 5]
// 5. Sum of All Numbers in an Array
// Write a function to sum all numbers in an array.

// javascript
// Copy code
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1, 2, 3, 4])); // Output: 10
// 6. Remove Duplicates from an Array
// Write a function that removes duplicate values from an array.

// javascript
// Copy code
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // Output: [1, 2, 3, 4]
// 7. Check if a String is Palindrome
// Write a function to check if a string is a palindrome.

// javascript
// Copy code
function isPalindrome(str) {
    const cleanedStr = str.replace(/\W/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false
// 8. Merge Two Sorted Arrays
// Write a function that merges two sorted arrays into one sorted array.

// javascript
// Copy code
function mergeArrays(arr1, arr2) {
    return [...arr1 ,...arr2].sort((a, b) => a - b);
}

console.log(mergeArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]
// 9. Find the Factorial of a Number
// Write a function to find the factorial of a number.

// javascript
// Copy code
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
// 10. Find Common Elements in Two Arrays
// Write a function to find common elements between two arrays.

// javascript
// Copy code
function commonElements(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
}

console.log(commonElements([1, 2, 3], [2, 3, 4])); // Output: [2, 3]
// 11. Convert a String to Title Case
// Write a function to convert a string to title case.

// javascript
// Copy code
function titleCase(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

console.log(titleCase("hello world")); // Output: "Hello World"
// 12. Count the Occurrences of a Character in a String
// Write a function that counts how many times a specific character appears in a string.

// javascript
// Copy code
function countChar(str, char) {
    return str.split(char).length - 1;
}

console.log(countChar("javascript", "a")); // Output: 2
// 13. Deep Clone an Object
// Write a function to create a deep copy of an object.

// javascript
// Copy code
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

const original = { a: 1, b: { c: 2 } };
const clone = deepClone(original);
clone.b.c = 3;

console.log(original.b.c); // Output: 2
console.log(clone.b.c); // Output: 3
// 14. Debounce a Function
// Write a function that debounces another function.

// javascript
// Copy code
function debounce(func, delay) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, arguments), delay);
    };
}

const log = () => console.log("Debounced!");
const debouncedLog = debounce(log, 1000);
debouncedLog();
debouncedLog();
debouncedLog(); // "Debounced!" will be logged after 1 second


// 15. Find the Longest Word in a String
// Write a function that finds the longest word in a string.

// javascript
// Copy code
// function findLongestWord(str) {
//     return str.split(' ').reduce((longest, current) => {
//         return current.length > longest.length ? current : longest;
//     }, '');
// }

// console.log(findLongestWord("I am learning JavaScript")); // Output: "JavaScript"
// 16. Convert a String to an Integer
// Write a function that converts a string to an integer (like parseInt).

// javascript
// Copy code
// function stringToInt(str) {
//     return Number(str);
// }

// console.log(stringToInt("1234")); // Output: 1234
// 17. Find Missing Number in an Array
// Write a function that finds the missing number in a given sequence of numbers.

// javascript
// Copy code
// function findMissingNumber(arr) {
//     const n = arr.length + 1;
//     const totalSum = (n * (n + 1)) / 2;
//     const arrSum = arr.reduce((sum, num) => sum + num, 0);
//     return totalSum - arrSum;
// }

// console.log(findMissingNumber([1, 2, 4, 5])); // Output: 3
// 18. Convert an Array to an Object
// Write a function that converts an array of keys to an object with default values.

// javascript
// Copy code
// function arrayToObject(arr) {
//     return arr.reduce((obj, key) => {
//         obj[key] = null; // Default value can be changed
//         return obj;
//     }, {});
// }

// console.log(arrayToObject(["name", "age", "address"])); // Output: { name: null, age: null, address: null }
// 19. Find the Index of the First Occurrence of a Character in a String
// Write a function that returns the index of the first occurrence of a given character.

// javascript
// Copy code
// function firstOccurrence(str, char) {
//     return str.indexOf(char);
// }

// console.log(firstOccurrence("hello", "l")); // Output: 2
// 20. Merge Two Objects
// Write a function to merge two objects.

// javascript
// Copy code
// function mergeObjects(obj1, obj2) {
//     return { ...obj1, ...obj2 };
// }

// console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 })); 
// // Output: { a: 1, b: 2, c: 3, d: 4 }
// 21. Calculate the Fibonacci Sequence
// Write a function to return the nth Fibonacci number.

// javascript
// Copy code
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(4)); // Output: 8
// 22. Find the Most Frequent Element in an Array
// Write a function to find the most frequent element in an array.

// javascript
// Copy code
// function mostFrequentElement(arr) {
//     const frequency = {};
//     arr.forEach(item => frequency[item] = (frequency[item] || 0) + 1);
//     const maxCount = Math.max(...Object.values(frequency));
//     return Object.keys(frequency).find(key => frequency[key] === maxCount);
// }

// console.log(mostFrequentElement([1, 2, 2, 3, 3, 3])); // Output: 3
// 23. Count Vowels and Consonants in a String
// Write a function that counts vowels and consonants in a string.

// javascript
// Copy code
// function countVowelsAndConsonants(str) {
//     const vowels = 'aeiouAEIOU';
//     let vowelsCount = 0;
//     let consonantsCount = 0;

//     for (let char of str) {
//         if (vowels.includes(char)) {
//             vowelsCount++;
//         } else if (/[a-zA-Z]/.test(char)) {
//             consonantsCount++;
//         }
//     }

//     return { vowels: vowelsCount, consonants: consonantsCount };
// }

// console.log(countVowelsAndConsonants("JavaScript is awesome!")); 
// // Output: { vowels: 7, consonants: 13 }
// 24. Remove All Falsey Values from an Array
// Write a function that removes all falsy values from an array.

// javascript
// Copy code
function removeFalsyValues(arr) {
    return arr.filter(Boolean);
}

console.log(removeFalsyValues([0, 1, false, 2, "", 3, null])); 
// // Output: [1, 2, 3]
// 25. Capitalize the First Letter of Each Word in a String
// Write a function that capitalizes the first letter of each word in a string.

// javascript
// Copy code
// function capitalizeWords(str) {
//     return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }

// console.log(capitalizeWords("hello world")); // Output: "Hello World"
// 26. Find the Intersection of Two Arrays
// Write a function that finds the intersection of two arrays.

// javascript
// Copy code
// function intersection(arr1, arr2) {
//     return arr1.filter(item => arr2.includes(item));
// }

// console.log(intersection([1, 2, 3], [3, 4, 5])); // Output: [3]
// 27. Convert an Object to an Array of Key-Value Pairs
// Write a function that converts an object to an array of key-value pairs.

// javascript
// Copy code
function objectToArray(obj) {
    return Object.entries(obj);
}

console.log(objectToArray({ name: "Dhaval", age: 25 })); 
// // Output: [["name", "Dhaval"], ["age", 25]]
// 28. Group Array Elements by Property
// Write a function that groups array elements by a specific property.

// javascript
// Copy code
function groupBy(arr, key) {
    return arr.reduce((result, currentValue) => {
        (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
        return result;
    }, {});
}

const users = [
    { name: "Dhaval", age: 25 },
    { name: "John", age: 30 },
    { name: "Jane", age: 25 }
];
console.log(groupBy(users, "age"));
// 29. Count the Number of Words in a String
// Write a function that counts the number of words in a string.

// javascript
// Copy code
function countWords(str) {
    return str.trim().split(/\s+/).length;
}

console.log(countWords("JavaScript is awesome!")); // Output: 3
// 30. Convert an Array to a Set
// Write a function to convert an array to a Set, removing duplicates.

// javascript
// Copy code
function arrayToSet(arr) {
    return new Set(arr);
}

console.log(arrayToSet([1, 2, 2, 3, 4, 4])); // Output: Set {1, 2, 3, 4}

const inputArray = [1, 'a', 2, 'b', 3, 'c'];

const numbers = inputArray.filter(item => typeof item === 'number');
const letters = inputArray.filter(item => typeof item === 'string');

console.log(numbers); // Output: [1, 2, 3]
console.log(letters); // Output: ['a', 'b', 'c']
