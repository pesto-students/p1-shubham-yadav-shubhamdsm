// how to calculate the value of this
// key points
// this is always present in a function
// the value of this is calculated by how you are calling a function

// EXAMPLE 1

function foo() {
  console.log(this);
}

var fn = foo();

// the value of this will be global object in this example of function statement {FUNCTION INVOCATION PATTERN}

// EXAMPLE 2

function foo1() {
  console.log(this);
}
var fn1 = new foo1();
// the value of this will be the newly created object which is fn1  {CONSTRUCTOR INVOCATION PATTERN}

// EXAMPLE 3

let Laptop = {
  name: "Macbook",
  model: "Air",
  callLaptop: function () {
    console.log(this);
  },
};

Laptop.callLaptop();
//  the value of this will be the object before dot which is Laptop {METHOD INVOCATION PATTERN}

// EXAMPLE 4

// function sum(a, b) {
//   return this.a + this.b;
// }
// var sumByBind = sum.bind({ a: 1, b: 2 });

// in this example we are manually assinging the value of this with .bind() method so the value of this would be the object we are passing in the bind parameter {INDIRECT INVOCATION PATTERN}
let computer = {
  company: "Apple",
};

let pc = {
  company: "Windows",
  model: "surface pro",
  canRun: function (name) {
    console.log(this);
  },
};

pc.canRun.call(computer, "bind");
// in this example we manually passing the value of this as a first argument in .call() method
let mouse = {
  company: "dell",
};

let keyboard = {
  company: "logitech",
  model: "mechanical",
  canRun: function (name) {
    console.log(this);
  },
};

keyboard.canRun.apply(mouse, ["bind"]);
// in this example we manually passing the value of this as a first argument in .apply() method
