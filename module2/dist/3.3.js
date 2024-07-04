"use strict";
class BankAccount {
    constructor(id, name, _balance) {
        (this.id = id), (this.name = name), (this._balance = _balance);
    }
    set addBalance(amount) {
        this._balance = this._balance + amount;
    }
    get getBalance() {
        return this._balance;
    }
}
// class StudentAccount extends BankAccount {
//   constructor(id: string, name: number, _balance: number) {
//     super(name, id, _balance);
//   }
// }
const bankAccount = new BankAccount(111, "rakib", 1000);
bankAccount.addBalance = 1000;
const myAccount = bankAccount.getBalance;
console.log(myAccount);
