function plusMinus(arr) {
    // Write your code here
    let p = 0, n = 0, z = 0;
    let arrLength = arr.length;
    
    for(let i = 0; i <= arrLength; i++) {
        if (arr[i] > 0) {
            ++p;
        } else if (arr[i] < 0) {
            ++n;
        } else if (arr[i] == 0) {
            ++z;
        } else {
        }
    }
    
    let pRatio = p/arrLength;
    let nRatio = n/arrLength;
    let zRatio = z/arrLength;
    
    console.log(pRatio.toFixed(6));
    console.log(nRatio.toFixed(6));
    console.log(zRatio.toFixed(6));
}
