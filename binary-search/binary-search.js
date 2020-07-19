const binary_search_js = (arrayList = [], target = 0) => {
  let lowest_number = 0;
  let height_number = arrayList.length - 1;
  while (height_number >= lowest_number) {
    middle_number = Math.floor((lowest_number + height_number) / 2);
    if (arrayList[middle_number] === target) {
      return true;
    } else if (target < middle_number) {
      height_number = middle_number - 1;
    } else {
      lowest_number = middle_number + 1;
    }
  }
  return false;
};

const arrayListJS = [1, 3, 5, 8, 9];

console.log(binary_search(arrayList, 5));
