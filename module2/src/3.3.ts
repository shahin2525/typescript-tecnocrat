class BankAccount {
  readonly id: number;
  name: string;
  protected _balance: number;
  constructor(id: number, name: string, _balance: number) {
    (this.id = id), (this.name = name), (this._balance = _balance);
  }

  set addBalance(amount: number) {
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
