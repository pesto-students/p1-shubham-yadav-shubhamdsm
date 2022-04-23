function Person(name) {
  this.name = name;
}
Person.prototype.teach = function () {
  return `${this.name} teaches ${this.subject}`;
};
function Teacher(name, subject) {
  Person.call(this, name);
  this.subject = subject;
}
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype = Object.assign(Teacher.prototype, { constructor: Teacher });
const t = new Teacher("shubham", "maths");
console.log(t.teach());
const p = new Person("shubham");

console.log(t.constructor.name);
console.log(p.constructor.name);
console.log(t instanceof Teacher);
console.log(t instanceof Person);
console.log(p instanceof Person);
console.log(p instanceof Teacher);
