// Task
// Given n names and phone numbers, assemble a phone book that maps friends' names to their respective phone numbers.
// You will then be given an unknown number of names to query your phone book for. For each name queried, print the associated entry from your phone book on a new line in the form name=phoneNumber; if an entry for name is not found, print Not found instead.

// Note: Your phone book should be a Dictionary/Map/HashMap data structure.

// Input Format:
// The first line contains an integer, n, denoting the number of entries in the phone book.
// Each of the n subsequent lines describes an entry in the form of 2 space-separated values on a single line. The first value is a friend's name, and the second value is an 8-digit phone number.

// After the n lines of phone book entries, there are an unknown number of lines of queries. Each line (query) contains a name to look up, and you must continue reading lines until there is no more input.

// Note: Names consist of lowercase English alphabetic letters and are first names only.

function processData(input) {
  //Enter your code here
  var tempArray = input.split("\n");
  var entriesLength = tempArray.splice(0, 1); //get the number of entries out of the array
  var queries = tempArray.splice(entriesLength); //dump the queries into their own array

  for (var i = 0; i < entriesLength; i++) {
    tempArray[i] = tempArray[i].split(" "); //split the names from the phones to prepare for mapping
  }

  var phoneBookMap = new Map(tempArray); //turn the array into a map

  for (var i = 0; i < queries.length; i++) {
    if (phoneBookMap.has(queries[i])) {
      //check if the qeury (name) exists in the phone book
      console.log(queries[i] + "=" + phoneBookMap.get(queries[i]));
    } else {
      console.log("Not found");
    }
  }
  F;
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
