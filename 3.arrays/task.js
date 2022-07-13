function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((item1, item2) => item1 === arr2[item2]);
}

function advancedFilter(arr) {
  let resultArr = arr.filter((item) => item > 0 && item % 3 === 0).map((item) => item * 10);
  return resultArr;
}