const arrayListTS: number[] = [1, 3, 4, 5, 8];

const binary_search_ts = (numberArray: number[], target: number) => {
  let lowestNum: number = 0;
  let higestNum: number = numberArray.length - 1;
  while (higestNum >= lowestNum) {
    let middleNum: number = Math.floor((lowestNum + higestNum) / 2);
    if (numberArray[middleNum] === target) {
      return true;
    } else if (target < numberArray[middleNum]) {
      higestNum = middleNum - 1;
    } else {
      lowestNum = middleNum + 1;
    }
  }
  return false;
};

class binarySearch {
  arrayList: number[];
  heighestNumber: number;
  lowestNumber: number;
  target: number;
  constructor(
    arrayList: number[],
    heighestNumber: number,
    lowestNumber: number,
    target: number
  ) {
    this.arrayList = [...arrayList];
    this.heighestNumber = heighestNumber;
    this.lowestNumber = lowestNumber;
    this.target = target;
  }

  recBinarySearch() {
    let middleNumber: number = Math.floor(
      (this.lowestNumber + this.heighestNumber) / 2
    );
    if (this.arrayList[middleNumber] == this.target) {
      return true;
    } else if (this.heighestNumber < this.lowestNumber) {
      return false;
    } else if (this.target > this.arrayList[middleNumber]) {
      this.lowestNumber = middleNumber + 1;
      return this.recBinarySearch();
    } else {
      this.heighestNumber = middleNumber - 1;
      return this.recBinarySearch();
    }
  }
}

console.log(binary_search_ts(arrayListTS, 4));
let recSrc = new binarySearch(arrayListTS, arrayListTS.length - 1, 0, 1);
console.log(recSrc.recBinarySearch());
