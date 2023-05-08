// access modify kora

// public, protected, private/readonly
class BankAccount2 {
  id: number;
  name: string;
  private _balance: number;
  constructor(id: number, name: string, balance: number) {
    this._balance = balance;
    this.id = id;
    this.name = name;
    }
    //getter
    get balance():number {
        return this._balance
    }

    //setter
    set deposit(amount: number) {
        this._balance = this._balance + amount;
    }

//   getBalance():string {
//     return (`my balance is ${this._balance}`);
//   }
//   getDeposit(amount: number) {
//     this._balance = this._balance + amount;
//   }
}

class StudentAccount2 extends BankAccount2 {
  test() {
  
  }
}

const myAccount2 = new BankAccount2(33, "bane", 1222);

// console.log(myAccount2.getBalance());
console.log(myAccount2.balance); // _balance private hoar karone property akare balance k access kora jai na. ei jonno jodi amra private property access korte chai then getter use korte hobe. 
myAccount2.deposit = 10;  //r property te kono kisu set korte hole setter.
console.log(myAccount2.balance);

// note: getter and setter dia amra function call na kore property akare value dekhte pari private gulou.