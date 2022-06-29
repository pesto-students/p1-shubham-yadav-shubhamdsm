function createStack() {
  const items = [1, 2];
  return {
    push: function (item) {
      return items.push(item);
    },
    pop: function () {
      return items.pop();
    },
  };
}
const stack = createStack();
// console.log(stack.getItems());
stack.push(30);
// console.log(stack.getItems());
stack.pop();
console.log(items);
// console.log(stack.getItems());
