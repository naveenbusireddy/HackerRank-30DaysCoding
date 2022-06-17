// Task
// Given an integer, n, perform the following conditional actions:

// If n is odd, print Weird
// If n is even and in the inclusive range of 2 to 5, print Not Weird
// If n is even and in the inclusive range of 6 to 20, print Weird
// If n is even and greater than 20, print Not Weird
// Complete the stub code provided in your editor to print whether or not n is weird.

// Input Format
// A single line containing a positive integer, n.

// Explanation
// Sample Case 0: n=3
// n is odd and odd numbers are weird, so we print Weird.
// Sample Case 1: n=24
// n>20 and n is even, so it is not weird. Thus, we print Not Weird.

"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const N = parseInt(readLine().trim(), 10);

  if (N % 2 != 0) {
    console.log("Weird");
  } else if (N > 1 && N < 6) {
    console.log("Not Weird");
  } else if (N > 5 && N < 21) {
    console.log("Weird");
  } else {
    console.log("Not Weird");
  }
}
