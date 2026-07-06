class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }

  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value;
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;