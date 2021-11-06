// **PROBLEM 1** MAX OF TWO

let x = 1;
let y = 2;

// Write your code below this line.

if (x > y) {
  console.log(x);
} else {
  console.log(y);
}

// Solution to additional challenge:

if (x > y) {
  console.log(x);
} else if (y > x) {
  console.log(y);
} else [console.log("The values are identical.")];

/****PROBLEM 2** FIND THE RANGE
 * The key to solving this is creating variables 'smallest' and 'largest'
 * Then iterate through the array of numbers, checking to see if the number (AKA array[i])
 * is smaller than the smallest current value or higher than the highest current value.
 * If it is, then we update variable 'smallest' or 'largest' and set it to that value 
 * (I am refering to array[i] when I say element).
 */
// Starting array
let array = [28, 43, -12, 30, 4, 0, -36];

// Write your solution below:
let smallest = array[0];
let largest = array[0];

for (let i = 0; i < array.length; i++) {
  if (smallest > array[i]) {
    smallest = array[i];
  } else if (largest < array[i]) {
    largest = array[i];
  }
}

console.log(smallest, largest);

/****PROBLEM 3** FIZZ BUZZ
 * The key to solving this is understanding how to use the modulo operator and the `&&`
 * correctly inside conditional statements like `if` of `else if`.
 * We iterate through, checking if the number is divisible by 3 or 5 (Review modulo if you do not understand this concept).
 * If it is divisible by either of these numbers or both 3 & 5, then we console log different strings.
 */

// Write your solution below this line:
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}

/****PROBLEM 4** FIND LONGEST WORD
 * The key to solving this is understanding how to set an initial variable to 0
 * and update that value based on the use of the if statement.
 */
// Write your solution below:

function findLongestWord(arr) {
  let longestWordLength = 0;
  for (let i = 0; i < arr.length; i++) {
    // arr[i] is a string (ex. 'flower') so we iterate
    // through array of words and use the string.length property
    if (arr[i].length > longestWordLength) {
      longestWordLength = arr[i].length;
    }
  }
  return longestWordLength;
}

/****PROBLEM 5** ADD TO ZERO
 * The key to solving this is understanding how to set an initial variable to 0
 * and update that value based on the use of the if statement.
 */
// Write your solution below:
// Starting array
let array = [28, 43, -12, 30, 4, 0, 12];

// Write your solution below:
let value = "False";
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = "True";
      }
    }
  }
}

console.log(value);

/****PROBLEM 6** FIND LUCKY NUMBERS
 * The key to solving this is understanding how to use
 * the Math.floor(), Math.random(), and .splice() methods to randomly generate numbers
 */

// Write your code below this line.
function findLuckyNumbers(n) {
  let possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let luckyNumbers = [];
  for (let i = 0; i < n; i++) {
    let x = Math.floor(Math.random() * possibleNumbers.length);
    luckyNumbers.push(possibleNumbers[x]);
    possibleNumbers.splice(x, 1);
  }
  return luckyNumbers;
}

/****PROBLEM 7** HAS UNIQUE CHARACTERS
 * The key to solving this is understanding how to use a 'set'. It is a data structure similar to array
 * but with NO duplicate values. So we create a 'set' from the word and check if that is equal to the parameter word.length
 */

// Write your code below
function hasUniqueChars(word) {
  let uniqueChars = new Set([]);
  for (let i = 0; i < word.length; i++) {
    uniqueChars.add(word[i]);
  }
  return uniqueChars.size === word.length;
}

/****PROBLEM 8** IS PALINDROME
 * The key to solving this is understanding how to check two conditions simultaneously 
 * in each iteration of the loop
 */

// Write your code below
