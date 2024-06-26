function add(num: number, num2: number): number {
  return num + num2;
}

const addNumber = (num1: number, num2: number): number => num1 + num2;
const user1 = {
  name: "ra",
  age: 20,
  balance: 0,
  addBalance(balance: number): string {
    return `this is number ${this.balance + balance}`;
  },
};
const array = [10, 20, 30, 40];
const arrayNumber = array.map((elem: number) => elem * elem);
