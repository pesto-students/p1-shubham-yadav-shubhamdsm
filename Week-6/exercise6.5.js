function pairDiff(arr, B) {
  arr.sort((a, b) => a - b);
  let i = 0;
  let j = 1;
  while (i < arr.length && j < arr.length) {
    if (i != j && arr[j] - arr[i] === B) {
      return true;
    } else if (arr[j] - arr[i] < B) {
      j++;
    } else {
      i++;
    }
  }

  return false;
}
let a = [90, 70, 20, 80, 50];
let b = 70;

console.log(pairDiff(a, b));

// Time Complexity: O(n2).
// Space Complexity: O(1).
