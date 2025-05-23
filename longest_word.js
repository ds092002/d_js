const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter Alphabetic String: ", function (alph) {
  let r = longest_word(alph);
  console.log("Longest Word in This line is:", r);
  rl.close();
});

function longest_word(str) {
  let words = str.split(' ');
  let result = '';

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > result.length) {
      result = words[i];
    }
  }
  return result;
}
