// Function Description
// Complete the factorial function in the editor below. Be sure to use recursion.
// factorial has the following paramter:
// int n: an integer
// Returns
// int: the factorial of n
// Note: If you fail to use recursion or fail to name your recursive function factorial or Factorial, you will get a score of 0.

function factorial(n) {
    // Write your code here
    if(n>0){
        return n * factorial(n-1);
    }
    else {
        return 1;
    }
}

factorial(5)