/* exported Student */

// function Student(firstName, lastName, subject) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.subject = subject;
// }

// Student.prototype.getFullName = function () {
//   const { firstName, lastName } = this;
//   return `${firstName} ${lastName}`;
// };

// Student.prototype.getIntroduction = function () {
//   const { subject } = this;
//   const fullName = this.getFullName();
//   return `Hello, my name is ${fullName} and I am studying ${subject}.`;
// };

class Student {
  constructor(fn, ln, s) {
    this.firstName = fn;
    this.lastName = ln;
    this.subject = s;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getIntroduction() {
    const fn = this.getFullName();
    return `Hello, my name is ${fn} and I am studying ${this.subject}.`;
  }
}
