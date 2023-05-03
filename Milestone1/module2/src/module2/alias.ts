// alias
type LoveType = {
  name: string;
  age?: number; //optional type
  address: string;
  profession: string;
};

//same type structure er object sob jagai declear na kore alias kore LoveType name type delear kroe ote rakha holo. akhn proti object a same jishta use korbo. eta bar bar type gulo lekaha lagse na.

const love1: LoveType = {
  name: "cotton candy",
  age: 25,
  profession: "kisuna",
  address: "heart",
};

const love2: LoveType = {
  name: "nai",
  profession: "janina",
  address: "dure",
};

// ei aliasing khali object er jonne na prai sob kisur jonnei korajai.
type LoveMarriedType = boolean;
const isLoveMarried: LoveMarriedType = true;

type NameTyper = string;
const courseName: NameTyper = "ok no go";

// emn ki function er jonnew amra alias korte pari
type OperationType=(x: number, y: number) => number
const calculate = (
  num: number,
  num2: number,
  operation:OperationType
) => {
  return operation(num, num2);
};
calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);
