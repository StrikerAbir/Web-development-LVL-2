// generic interface

interface CrushInterface<T, U = null> {
  // generic interface emne kore
  name: string;
  state: T;
  another?: U;
}
// multiple generic a function er moto 2 ta pram thakle 2ta param pass korte hoi na hole error dekhai. tai hoi null ba undefined dite hoi jodi na dei kisu. ta na hole funtion er moto default value dia dite hoi. tahole error hoi na.
const crush1: CrushInterface<boolean, null> = { name: "bane", state: false }; // boolean pass kore dilam

interface StateInterface {
  name: string;
  age: number;
}
const crush2: CrushInterface<StateInterface> = {
  name: "bane",
  state: {
    name: "poo",
    age: 23,
  },
};

const crush3: CrushInterface<object, object> = {
    name: 'bane',
    state: {
        name: 'poo',
        age:12
    },
    another: {
        name: 'another',
        age:44
    }
}

// function a jmn multiple parameter pathano jai same ekhanew
type GenericArray3<X, Y> = [X, Y]; //tuple er jonne

const relation2: GenericArray2<string, string> = ["ban", "po"];
// type RelwithSalryType = { name: string; money: number };
interface RelwithSalryTypeInterface2 {
  name: string;
  money: number;
}
const relationMoney2: GenericArray3<RelwithSalryTypeInterface2, string> = [
  { name: "bane", money: 123 },
  "itspo",
];
