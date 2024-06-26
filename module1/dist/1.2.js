"use strict";
function add(num, num2) {
    return num + num2;
}
const addNumber = (num1, num2) => num1 + num2;
const user1 = {
    name: "ra",
    age: 20,
    balance: 0,
    addBalance(balance) {
        return `this is number ${this.balance + balance}`;
    },
};
const array = [10, 20, 30, 40];
const arrayNumber = array.map((elem) => elem * elem);
