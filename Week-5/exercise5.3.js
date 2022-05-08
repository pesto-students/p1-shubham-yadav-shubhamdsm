function hasDuplicate(array) {
  return new Set(array).size !== array.length;
}
const array = [1, 2, 1, 3, 1, 2];
if (hasDuplicate(array)) {
  console.log(true);
} else {
  console.log(false);
}
