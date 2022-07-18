function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let student3 = new Student("Harry", "male", 16);
let student4 = new Student("Hermione", "female", 17);
let student5 = new Student("Ron", "male", 18);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

student3.setSubject("Charms");
student4.setSubject("Transfiguration");
student5.setSubject("Potions");

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
    }
}

student3.addMark(5);
student4.addMark(4);
student5.addMark(3);
student3.addMark(3);
student4.addMark(5);
student5.addMark(4);

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    this.marks = marks;
  } else {
    marks.forEach((item) => this.marks.push(item));
    }
}

student3.addMarks(5, 5, 5);
student4.addMarks(4, 4, 4);
student5.addMarks(3, 3, 3);

Student.prototype.getAverage = function () {
  let sum = 0;
  this.marks.forEach ((item) => sum += item);
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

student5.exclude("low grades");
console.log(student3, student4, student5);
console.log(student3.getAverage(), student4.getAverage());