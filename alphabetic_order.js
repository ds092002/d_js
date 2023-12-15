let alph = prompt("Enter Alphabetic String : ");

let r = alphabetic_string(alph);
console.log("Soretd String : ",r);

function alphabetic_string(string) {
    return string.split('').sort().join('');
    // let array = string.split('').sort().join('');
    // array.sort();
    // return array.join('');
}
