arr = [2, 3, 1, 7]

result = arr.inject { |accum, el| accum + el }

p result
p arr.sum