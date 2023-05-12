// import { add as addtwo, subtract, multiply } from './module'   // evabe korbo jodi module er moddhe akta akta kore export kora thake.
import * as methods from './module' // akbare sob chole ashlo. eke bole wild card export

const add = (param1: number, param2: number): number => {
    return param1 + param2
}

// const ok= addtwo(1,2) // for 1
const ok2= methods.add(1, 2) // for 2