function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request with word  ${location}`);
    if (location === "google") {
      resolve("promise is resolved");
    } else {
      reject("promise is rejected");
    }
  });
}

async function* doWorkForGenerators() {
  try {
    const res = await makeRequest("facebook");
    yield await res;
  } catch (err) {
    yield err;
  }
}
const it = doWorkForGenerators();
console.log(it);
it.next().then(({ value, done }) => {
  console.log(value);
});
async function doWork1() {
  try {
    const res = await makeRequest("apple");
    console.log("resolved promise");
    console.log(res);
  } catch (err) {
    console.log("rejected promise");
    console.log(err);
  }
}
async function doWork2() {
  try {
    const res = await makeRequest("google");
    console.log("Making request");
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

async function doWork3() {
  try {
    const res = await makeRequest("microsoft");
    console.log("Making request");
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
async function runDoWorks() {
  await doWork1();
  await doWork2();
  await doWork3();
}
// runDoWorks();
