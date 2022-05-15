function sortArr(arr, n) {
  let i,
    count0 = 0,
    count1 = 0,
    count2 = 0;

  for (i = 0; i < n; i++) {
    switch (arr[i]) {
      case 0:
        count0++;
        break;
      case 1:
        count1++;
        break;
      case 2:
        count2++;
        break;
    }
  }

  i = 0;

  while (count0 > 0) {
    arr[i++] = 0;
    count0--;
  }

  while (count1 > 0) {
    arr[i++] = 1;
    count1--;
  }

  while (count2 > 0) {
    arr[i++] = 2;
    count2--;
  }

  printArr(arr, n);
}
function printArr(arr, n) {
  for (let i = 0; i < n; i++) console.log(arr[i]);
}
let arr = [0, 1, 1, 0, 1, 2];
let n = arr.length;
sortArr(arr, n);
