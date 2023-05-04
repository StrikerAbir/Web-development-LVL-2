type PersonType = {
    name: string;
    age: number;
    address: string;
}

//property gulo dia mara union type banabo
type newType = 'name' | 'age' | 'address'  // manually amra evabe kori. alada alada kore likhe

type newTypeUsingKeyOf=keyof PersonType     // using keyof. eta use korar fole bar bar amake likhte hoina property gulo. persontype er moddhe ja ja ase ogulo nia type banai dei akai.  2tai same

const a: newType = 'address'
const b:newTypeUsingKeyOf='age'

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
    obj[key]
}
const property = getProperty({ name: 'address', age: 23 }, 'age')
// vdo dekho clear hote hole r o.