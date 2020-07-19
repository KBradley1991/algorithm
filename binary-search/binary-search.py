def binary_search(arrayList, target):
    lowest_number = 0
    highest_number = len(arrayList) - 1
    while (highest_number >= lowest_number):
        middle_number = (lowest_number + highest_number) // 2
        if(arrayList[middle_number] == target):
            return True
        elif (target < middle_number):
            highest_number = middle_number - 1
        else:
            lowest_number = middle_number + 1
    return False


if __name__ == "__main__":
    arrayList = [2, 3, 4, 6, 8]
    print(binary_search(arrayList, 6))
