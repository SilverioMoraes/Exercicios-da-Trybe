def average(numbers):
    result = 0
    for number in numbers:
        result += number
    return result / len(numbers)


print(average([2, 3, 5, 20]))
