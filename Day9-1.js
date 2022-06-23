function miniMaxSum(arr) {
    // Write your code here
    let convertedArr = arr.replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    convertedArr.sort();
    let arrLength = arr.length;
    let firstSum;
    let lastSum;
    for(let i=0; i<5; i++) {
        firstSum += convertedArr[i];
        return firstSum;
    }
    for(let j=arrLength-1; j>arrLength-5; j--) {
        lastSum += convertedArr[j];
        return lastSum;
    }    
    console.log(firstSum+"  "+lastSum);
}
miniMaxSum([5, 8, 16, 7, 6]) 