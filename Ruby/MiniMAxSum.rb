def miniMaxSum(arr)
    min = 0
    max = 0
    sortArray = arr.sort

    sortArray.each_with_index do |a, i|
        if i >= 0 && i <= arr.length() - 2
            min += a
            max += sortArray[i + 1]
        end
    end

    puts"#{min} #{max}"
end
