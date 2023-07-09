fn plusMinus(arr: &[i32]) {
    let (mut p, mut n, mut z) = (0.0, 0.0, 0.0);
    let arrLength = arr.len() as f64;
    
    for i in arr.iter() {
        if i > &0 {
            p += 1.0;   
        } else if i < &0 {
            n += 1.0;
        } else if i == &0 {
            z += 1.0;
        } else {

        }
    }
    
    let (pRatio, nRatio, zRatio) = (p / arrLength, n / arrLength, z / arrLength);
    println!("{:.6}", pRatio);
    println!("{:.6}", nRatio);
    println!("{:.6}", zRatio);
}
