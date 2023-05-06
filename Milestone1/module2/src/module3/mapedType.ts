const arrayOfNumbers = [1, 2, 3];     //convert kore ['1','2','3'] string korbo

const arrayOfString = arrayOfNumbers.map((number) => number.toString());
console.log(arrayOfString)

type AreaNumber = {
    height: number;
    width: number;
};
type AreaString = {
    height: string;
    width: string;
}
type AreaReadOnly = {
   readonly height: number;
   readonly width: number;
}
const rectangular: AreaNumber = {
    height: 10,
    width: 12
}
rectangular.height = 10 // change able


const rectangle: AreaReadOnly = {
    height: 10,
    width: 12
}
// rectangle.height=10  // error dibe cz eta readonly type

// amra type change r o short a map and dynamic vabe korte pari .
type Volume = {
    height: number;
    width: number;
    depth: number;
}
type VolumeMap = {
    // [key in 'height']: string;      // index signature kora bole eta ke
    // [key in keyof Volume]: string;   // index dynamic
    [key in keyof Volume]: Volume[key]; // index dynamic and value
}
type VolumeGeneric<T> = { // uporer otai generic kora holo
   readonly [key in keyof T]:T[key]
}
 const area1:VolumeGeneric<{name: string}>={name:'bane'}


// object er moto type er o property amer acccess korte pari.
const obj = {
    name:'areana'
}   //same vabe niche type er property access kora holo. jeta k bole lookup types

// look up types
type A = AreaNumber['height']
type B = keyof AreaNumber // width | height type
