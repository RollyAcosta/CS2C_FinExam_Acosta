let str1 = "RACECAR";
let str2 = "RECORDER";

let reversedStr1 = str1.split("").reverse().join("");
let reversedStr2 = str2.split("").reverse().join("");

console.log("Original string 1:", str1);
console.log("Reversed string 1:", reversedStr1);
console.log("Is string 1 a palindrome?", str1 === reversedStr1);

console.log("\nOriginal string 2:", str2);
console.log("Reversed string 2:", reversedStr2);
console.log("Is string 2 a palindrome?", str2 === reversedStr2);

