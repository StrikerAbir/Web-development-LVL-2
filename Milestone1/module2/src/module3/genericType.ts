const rollNumbers: number[] = [1, 2, 4, 5, 7];
const rollNumbers2: string[] = ["33", "44"];

//arrow dieaw same jinish lekha jai evabe
const rollnm: Array<number> = [1, 2, 4, 5, 7];
const rollnm2: Array<string> = ["33", "44"];
const rollnm3: Array<boolean> = [true, false];
const userNameNdRoll: Array<{ name: string; roll: number }> = [
  { name: "tishu", roll: 30 },
  {
    name: "atik",
    roll: 27,
  },
];

// generic vabe.
type GenericArray<T> = Array<T>; // function er moto. func a jmn parameter pathai omn. T dia type bojhai. beshivag pram ta T use kore sobai.

const rollnmG: GenericArray<number> = [1, 2, 4, 5, 7];
const rollnm2G: GenericArray<string> = ["33", "44"];
const rollnm3G: GenericArray<boolean> = [true, false];
const userNameNdRollG: GenericArray<{ name: string; roll: number }> = [
  { name: "tishu", roll: 30 },
  {
    name: "atik",
    roll: 27,
  },
];

// function a jmn multiple parameter pathano jai same ekhanew
type GenericArray2<X, Y> = [X, Y]; //tuple er jonne

const relation: GenericArray2<string, string> = ["ban", "po"];
// type RelwithSalryType = { name: string; money: number };
interface RelwithSalryTypeInterface {
  name: string;
  money: number;
}
const relationMoney: GenericArray2<RelwithSalryTypeInterface, string> = [
  { name: "bane", money: 123 },
  "itspo",
];
