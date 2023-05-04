
// array function
const createArray = (param: string): string[] => {
    return [param];
}
const result1 = createArray("bangladesh")
// generic array function
 const createArray2 = <T> (param: T): T[] => {
   return [param];
};
// normal function
 function createArray4  <T> (param: T): T[] {
   return [param];
};
const result2 = createArray2<string>("bangladesh")

//tuple

const createArray3 = <T,Y>(param: T,param2:Y): [T,Y] => {
  return [param,param2];
};
const result3 = createArray3<string, string>("bangladesh", "bang");

// spread operator
// const crsh='okkkk'
// const myInfo = {
//     name: "oko",
//     age: 23,
//     salry:2342
// }
//  const newData={...myInfo,crsh}
// ei jinish ta akhn funtion dia korbo

const additIn = <T>(myInfo: T) => {
    const crsh = "okkkk";
    const newData = { ...myInfo, crsh };
return newData          // first a generic korar age etai khali crsh dekhabe hover korle. cz compile hoar por okhane myinfo spread hobe age na. tai reslult5. dia kisu dile khali crsh ashbe onno kisuna. tai compile er age jate type pai se jonno generic kora holo. ete type pawa jabe r sathe result5. dile amra sob data pabo.
}

const myInfo = {
    name: "oko",
    age: 23,
    salry:2342
}
const result5=additIn(myInfo)