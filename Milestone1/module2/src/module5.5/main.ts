// import { add as addtwo, subtract, multiply } from './module'   // evabe korbo jodi module er moddhe akta akta kore export kora thake.
// import * as methods from './module' // akbare sob chole ashlo. eke bole wild card export
// import average from './module'  // default vabe export korar karone object akare import korte hocche na. avarage na dia jodi onno kono nam o dei ami. taw oi function kei indicate korbe. jehetu akhn only average export kora ase.
import jekono from './module'
const add = (param1: number, param2: number): number => {
    return param1 + param2
}

// const ok= addtwo(1,2) // for 1
// const ok2 = methods.add(1, 2) // for 2
// const ok3 = average(2, 2); // for 3
const ok4 = jekono.average(2, 3);