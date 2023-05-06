// a type is dependent on another type
type a1 = string;
type a2 = a1 extends string ? string : null;

type a3 = undefined;
type a4 = number;
//nested conditional type
type d = a1 extends null
  ? null
  : a3 extends number
  ? number
  : a4 extends null
  ? null
  : never;

  //example
type Habib = {
    w1: string;
    w2: string;
}
//check korbe habib type a w1 ase kina ? true : false
type CheckProperty<T,K> = K extends keyof T ? true : false

type checkW = CheckProperty<Habib, 'w1'>

//complex example

type Amigos = 'ashik' | 'atik' | 'mihir'
type RemoveAmigos<T,K> = T extends K ? never : T
type CurrentAmigo=RemoveAmigos<Amigos,'mihir'>