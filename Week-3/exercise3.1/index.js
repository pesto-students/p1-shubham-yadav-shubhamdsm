function memoize(fn) {
  let cache = new Map();
  return function (...args) {
    const key = args.toString();
    if (key) {
      return cache.get(key);
    }
    cache.set(key, fn(...args));
    return cache.get(key);
  };
}
function time(fn) {
  console.time();
  fn();
  console.timeEnd();
}
function add(a, b) {
  return a + b;
}

const memoizeAdd = memoize(add);
time(() => memoizeAdd(100, 100));
time(() => memoizeAdd(200, 300));
time(() => memoizeAdd(100, 100));
