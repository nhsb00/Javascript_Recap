def bubble_sort(arr)
    (0...arr.length - 1).each do |i|
        if arr[i] > arr[i + 1]
            arr[i], arr[i + 1] = arr[i + 1], arr[i]
        end
    end

    arr
end

arr = [2, 8, 5, 2, 6]
p bubble_sort(arr)