// normal function

function add(num1: number, num2: number): number {
  //parameter er type number kore dilam and return er type o number kore dilam
  return num1 + num2;
}
add(3, 3);

const addArrow = (num1: number, num2: number): number => num1 + num2;

const arr = [1, 4, 5];
const newArr = arr.map((ele: number) => ele * ele);

const person: {
  name: string;
  balance: number;
  addBalance(money: number): number; //function params and return type set kore dewa. kono kisu return na korle return type void dia dite hoi.
} = {
  name: "bane",
  balance: 5,
  addBalance(money) {
    return this.balance + money;
  },
};

//* default param
function add2(num1: number, num2: number = 10): number {
  //Function e default value set korar khetre amra sob somoi last parameter a default value dibo. Karon 1st a dia ja na diao tai. Error dibei jodi ata argument pathano hoi. Tai 2nd ta te dite hoi.
  return num1 + num2;
}
add2(3);

//*spread operator
const myFriends = ["ban", "po", "tut"];
const newFriends = ["vom", "tok", "ti"];

myFriends.push(...newFriends);
// console.log(myFriends);

//*rest operator
// er kaj holo alada alada value ke aksathe array te convert kore
const greetFriend = (friend1: string, friend2: string, friend3: string): void =>
  console.log(`hi ${friend1} ${friend2} ${friend3}`);
greetFriend("ban", "po", "tut");

// to ekhn one gulo new friend ashte pre setgulo function a add korle error hobe cz params ase 3 ta. se khetre amra ei rest parameter dia array banai felbo. tahole limit thakbe na r joto isscha friend dilew pblm nai. spread opertor er opposite kaj kore eta

const greetFriend2 = (...friendss: string[]): void =>
  friendss.forEach((friend) => console.log(`hi ${friend}`));

greetFriend2("ban", "po", "tut", "bom");


//* destructuring array object

const [bestfriend] = myFriends

const myBestfriend = {
    fullname: "kalu",
    age:14
}
const { fullname } = myBestfriend;
const { age: boios } = myBestfriend //aliasing kora holo just

// 2tar jonnei type dewa lagena cz j array ba object theke destructure kora hoi seta thekei type pea jai
