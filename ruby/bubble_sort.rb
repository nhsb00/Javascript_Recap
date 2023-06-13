def bubble_sort(arr)
    sorted = false

    while !sorted
        sorted = true
        (0...arr.length - 1).each do |i|
            if arr[i] > arr[i + 1] #if the adj elements are OUT OF ORDER
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                sorted = false
            end
        end
    end

    arr
end

arr = [2, 8, 5, 2, 6]
p bubble_sort(arr)