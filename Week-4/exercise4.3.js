const fibonacci = {
  [Symbol.iterator]: () => {
    let second = 0;
    let first = 1;
    let current = 1;
    return {
      next: () => {
        current = second + first;
        second = first;
        first = current;

        return { done: false, value: current };
      },
    };
  },
};

for (const i of fibonacci) {
  if (i > 10) {
    break;
  }
  console.log(i);
}
