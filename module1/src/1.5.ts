{
  //

  type Student = {
    name: string;
    age: number;
    contactNo?: string;
    isMarried: boolean;
    address: string;
  };

  const student1: Student = {
    name: "rakib",
    age: 10,
    contactNo: "1232354",
    isMarried: false,
    address: "kola toal",
  };
  const student2: Student = {
    name: "rakib",
    age: 10,

    isMarried: false,
    address: "kola toal",
  };
  const student3: Student = {
    name: "rakib",
    age: 10,
    contactNo: "1232354",
    isMarried: false,
    address: "kola toal",
  };
  type Add = (x: number, y: number) => number;

  const add: Add = (num1, num2) => num1 + num2;

  //
}
