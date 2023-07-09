def plusMinus(arr)
    p = 0
    n = 0
    z = 0    
    arrLength = arr.length().to_f
    
    arr.each do |a|
        if a > 0
            p += 1
        elsif a < 0
            n += 1
        elsif a == 0
            z += 1
        else
        end
    end

    pRatio = p / (arrLength)
    nRatio = n / (arrLength)
    zRatio = z / (arrLength)
    
    puts pRatio.round(6)
    puts nRatio.round(6)
    puts zRatio.round(6)

end
