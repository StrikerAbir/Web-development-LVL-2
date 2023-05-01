// normal function

function add(num1: number,num2:number):number {  //parameter er type number kore dilam and return er type o number kore dilam
    return num1 + num2;
}
add(3, 3)

const addArrow = (num1: number, num2: number): number => num1 + num2;

const arr = [1, 4, 5]
const newArr = arr.map((ele: number) => ele * ele)

const person: {
    name: string,
    balance: number,
    addBalance(money: number):number   //function params and return type set kore dewa. kono kisu return na korle return type void dia dite hoi.
} = {
    name: 'bane',
    balance: 5,
    addBalance(money) {
        return this.balance + money
    }
}