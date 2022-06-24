// Task
// Given a base-10 integer, n, convert it to binary (base-2). 
// Then find and print the base-10 integer denoting the maximum number of consecutive 1's in n's binary representation. 
// When working with different bases, it is common to show the base as a subscript.
// Example
// n=125
// The binary representation of 125 is 1111101. In base 10, there are 5 and 1 consecutive ones in two groups.
// Print the maximum, 5.
// Input Format
// A single integer, n.

function binaryConversion(n) {
    let decimalNum = parseInt(n, 10);
    let binaryForm = decimalNum.toString(2);
    let binaryFormSplit = binaryForm.split('0');
    let lengthArr = binaryFormSplit.map((e) => e.length);
    console.log(lengthArr);
    console.log(Math.max(...lengthArr));

    // for(let i=0; i < binaryFormSplit.length; i++) {        
    //     let itemLength = binaryFormSplit[i].length; 
    //     console.log(typeof(itemLength));     
    //     lengthArr.push(itemLength);               
    // } 
    // console.log(Math.max([9, 41, 6, 98,34]));   
}

binaryConversion(14)