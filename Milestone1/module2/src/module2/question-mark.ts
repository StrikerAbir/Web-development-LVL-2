//* ternary operator

const age: number = 22;

const isAdult = age > 18 ? "yes" : "no";

//* nullish coalesnace operator
//* null and undefined

const isAuthenticatedUser = null;
const userName = isAuthenticatedUser ?? "guest"; // '??' eta i nullish coalesnace operator eta only null and undefine er jonne kaj kore .
console.log(userName);

// eta kaj kore emne. jodi authenticate user thake thaole ota thaklo, na thakle 'guest' set kore dibo.
const isOk='' 
const userNames = isOk ?? "guest";
const userNames2 = isOk ? isOk : "guest";
console.log({ userNames }, { userNames2 });


type Manush={
    name: string;
    age: number;
    address: {
        city: "No city";
        road: "No road";
        home?: '';
    }
}

const manush1: Manush = {
    name: 'bane',
    age: 299,
    address: {
        city: "No city",
        road:"No road",
    }
}

const home= manush1?.address?.home??'no home'      // optional chaining kora hoise. sathe nullish operator use kora hoise. jate home na thakle kisu dekhai.

