// * interface kisuta alias er motoi.

//type alias
type User = {       // primitive type data er khetre amra alias use kore thaki.cz primitive type holo typescript er buildin type. eta interface dia customize korte parbo na.
    name: string;
    age: number;
}

// interface
interface IUser{    // object type er data er khetre amra interface use kore thaki. ete = deawa lage na. direct namer sathe object likhe dilei hoi. alias o use kora jai.  oject, function array esob jagai amra interface use korete pari. cz egulo object e.
    name: string;
    age:number
}

const userWithTypeAlias: User = {
    name: 'type alias',
    age:133
}
const userWithTypeInterface: IUser = {
    name: 'type interface',
    age:133
}

// interface object a use korar akta subidha holo. eta amra extend korte pari
interface IExtendedUser extends IUser{      // mane IUser object ta extend kore extra r akta property add kora holo,.
    role:string
}

const uuser: IExtendedUser = {
    name: 'bane',
    age: 122,
    role:'precedent'
}

// ei extend ta amra type alias ew korte pari union and intersection er maddhome. mane object holew aliasing kore amara korte parbo 

type ExtendedUser = User & {
    role: string;
}

//* oject, function, array esob jagai amra interface use korete pari. cz egulo object e
//function
type addNumberType = (num1: number, num2: number) => number    //type alias eta best use
const addNum: addNumberType = (num1, num2) => num1 + num2

interface IAddNumber {    // interface
  (num1: number, num2: number): number; // :number mane number type return
}
const IaddNum: IAddNumber = (num1, num2) => num1 + num2

//array
type rollNoType = number[];
const rollno:rollNoType=[1,4,5]

interface IRollno{
    [index: number]: number   // array te index thake index gulo j knono type value hold kore. setai set kroe dewa holo. :number mane number type hold korbe.
    // index: number mane index gulo to interger e hoi 
}