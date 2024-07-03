"use strict";
class BankAccount {
    constructor(id, name, _balance) {
        (this.id = id), (this.name = name), (this._balance = _balance);
    }
    addBalance(amount) {
        this._balance = this._balance + amount;
    }
    getBalance() {
        return this._balance;
    }
}
class StudentAccount extends BankAccount {
    constructor(id, name, _balance) {
        super(name, id, _balance);
    }
}
const bankAccount = new BankAccount(111, "rakib", 1000);
bankAccount.addBalance(5000);
const myAccount = bankAccount.getBalance();
console.log(myAccount);
