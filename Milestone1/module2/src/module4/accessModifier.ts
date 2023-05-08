// access modify kora

// public, protected, private/readonly
class BankAccount{
    id: number;
    name: string;
    private _balance: number;
   protected code: number;
    constructor(id: number, name: string, balance: number,code: number) {
        this._balance = balance;
        this.id = id;
        this.name = name;
        this.code=code
    }
    getBalance() {
        console.log(`my balance is ${this._balance}`);
    }
    getDeposit(amount: number) {
        this._balance=this._balance+amount
    }
}

class StudentAccount extends BankAccount{
    test() {
        console.log(this.code);    // private property balance amera ekhane pabo na. but amra protected ta ekhane pacchi. protected amra kom use korbo.
        
    }
}

const myAccount = new BankAccount(33, 'bane', 1222,09)
// myAccount._balance=0 // evabe value change kora jai. jodi balance private kore dile unchangeable hobe
console.log(myAccount);

