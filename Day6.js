// Task
// Given a string, S, of length N that is indexed from 0 to N-1, 
// print its even-indexed and odd-indexed characters as 2 space-separated strings on a single line (see the Sample below for more detail).

// Note: 0 is considered to be an even index.
function processData(input) {
    //Enter your code here
    /*let strToArr = input.split('');
    let evenArr = [];
    let oddArr = [];
    
    for(let i = 0; i < strToArr.length+1; i++) {
        if(i % 2 === 0) {
            evenArr.push(strToArr[i]);
        }        
        else {
            oddArr.push(strToArr[i]);
        }
    }
    console.log(`${evenArr.join('')}  ${oddArr.join('')} \n`);
    */
   
    let inputCopy = input.split('\n').slice(1);
    inputCopy.forEach((str) => {
      let evenStr = '';
      let oddStr = '';
        for(let i = 0; i < str.length; i++) {
            i % 2 ? oddStr += str[i] : evenStr += str[i];
        }
        console.log(`${evenStr} ${oddStr}`);
    });
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
