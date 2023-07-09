function plusMinus(arr: number[]): void {
    let p = 0, n = 0, z = 0;
    const len = arr.length || 0;
      
    if (len > 0 && len <= arr.length) {
          arr.map((elem, key) => {
               if (elem > 0) {
                    p++;
               } else if (elem < 0) {
                    n++; 
               } else {
                    z++;
               }
                  
               return elem; 
          }); 
     }
    
    let pRatio = (p / len) || 0;
    let nRatio = (n / len) || 0;
    let zRatio = (z / len) || 0;
    
    console.log(pRatio.toFixed(6));
    console.log(nRatio.toFixed(6));
    console.log(zRatio.toFixed(6));
}
