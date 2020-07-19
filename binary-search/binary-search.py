def binary_search(arrayList, target):
    lowest_number = 0
    highest_number = len(arrayList) - 1
    while (highest_number >= lowest_number):
        middle_number = (lowest_number + highest_number) // 2
        if(arrayList[middle_number] == target):
            return True
        elif (target < arrayList[middle_number]):
            highest_number = middle_number - 1
        else:
            lowest_number = middle_number + 1
    return False


''' 
# Still working on this
def binary_search_recurssion(arrayList, target):
    lowest_number = 0
    highest_number = len(arrayList) - 1
    middle_number = (lowest_number + highest_number)//2
    if(highest_number < lowest_number):
        return False
    elif (arrayList[middle_number] == target):
        return True
    elif (target > arrayList[middle_number]):
        print('still working on this')
'''

if __name__ == "__main__":
    arrayList = [2, 3, 4, 6, 8]
    print(binary_search(arrayList, 4))
