class Person {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    (this.name = name), (this.age = age);
    this.address = address;
  }

  getSleep(numOfHours: number) {
    console.log(`the ${this.name} will sleep for ${numOfHours}`);
  }
}

class Student extends Person {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}
const student = new Student("rakib", 10, "josore");

//

class Teacher extends Person {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  getSleep(numOfHours: number) {
    console.log(`the ${this.name} will sleep for ${numOfHours}`);
  }
  takeClass(numOfClass: number) {
    console.log(`the ${this.name} will take class for ${numOfClass}`);
  }
}
const teacher = new Teacher("rakib", 10, "josore", "professor");
