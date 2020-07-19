const arrayList: number[] = [1, 3, 4, 5, 8];

const binary_search = (numberArray: number[], target: number) => {
  let lowestNum: number = 0;
  let higestNum: number = numberArray.length - 1;
  while (higestNum >= lowestNum) {
    let middleNum: number = Math.floor((lowestNum + higestNum) / 2);
    if (numberArray[middleNum] === target) {
      return true;
    } else if (target < middleNum) {
      higestNum = middleNum - 1;
    } else {
      lowestNum = middleNum + 1;
    }
  }
  return false;
};
console.log(binary_search(arrayList, 8));
