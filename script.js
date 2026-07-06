class Person {
	
	constructor(name, age) {
		this._name = name;
		this._age = age;
	}

	
	get Name() {
		return this._name;
	}
	set name(value) {
    this._name = value;
  }

	get age() {
    return this._age;
  }
	
	set Age(age) {
		this._age = age;
	}
}

class Student extends Person {
	
	study() {
		console.log(`${this._name} is studying`);
	}
}

class Teacher extends Person {
	
	teach() {
		console.log(`${this._name} is teaching`);
	}
}
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
