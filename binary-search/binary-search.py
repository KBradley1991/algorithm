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


class binary_src:
    def __init__(self, arrayList, target):
        self.arrayList = arrayList
        self.target = target
        self.lowest_number = 0
        self.highest_number = len(arrayList) - 1

    def binary_rec_src(self):
        if(self.highest_number < self.lowest_number):
            return False

    def binary_basic_src(self):
        while(self.highest_number >= self.lowest_number):
            middle_number = (self.lowest_number + self.highest_number) // 2
            if(self.arrayList[middle_number] == self.target):
                return True
            elif (self.target < self.arrayList[middle_number]):
                self.highest_number = middle_number - 1
            else:
                self.lowest_number = middle_number + 1
        return False


if __name__ == "__main__":
    arrayList = [2, 3, 4, 6, 8]
    print(binary_search(arrayList, 4))
    print(binary_src(arrayList, 4).binary_basic_src())
