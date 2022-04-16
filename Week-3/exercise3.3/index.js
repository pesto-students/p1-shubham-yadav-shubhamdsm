function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged?

// Count is0 is logged because the message variable is a string literal so the count variable in the string literal will not increase by the increment function call
