//*type gard
//type k badha dewa holo type garding er main kaj
// keyof gard  -> ei key ward runtime a kaj kore.
// type alias na kore type gard use kore amra type check korte pari. Type alias bad practice

// key of gard example
type AlphaNumeric=string|number
function add(param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric {
    // param1+param2 // error dibe cz 2 ta param er string or number type kora ase. eta ak hobe na.
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        return param1+param2
    } else {
        return param1.toString() +param2.toString()
    }
    //ekhane amra akta gard create korlam j number hole emn hobe na hole emn hobe.
}

// in gard example
type NormalUserType = {
    name: string;
}
type AdminUserType = {
    name: string;
    role: 'admin';
}

function getUser(user: NormalUserType | AdminUserType) {
    if ('role' in user) {
        return ` i am ${user.name} and admin`
    } else {
        return ' i am normal user'
    }
}
const normalUser1: NormalUserType = { name: 'ane' };
const adminUser1: AdminUserType = { name: 'bane', role: 'admin' };
console.log(getUser(normalUser1));
console.log(getUser(adminUser1));

// instanceof gard -> class and object k gard kore.

class Animals{
    name: string;
    species: string;
    constructor(species: string, name: string) {
        this.species = species;
        this.name = name;
    }
    makeSound() {
        console.log('make sound');
    }
}
class Dog extends Animals{
    constructor(name: string, species: string) {
        super(name,species);
    }
    makeBark() {
        console.log('bark bark');
    }
}
class Cat extends Animals{
    constructor(name: string, species: string) {
        super(name,species);
    }
    makeMew() {
        console.log('meaw meaw');
    }
}
// ei function a amra Dog ba Cat class er j method ase ota use korte parsilam na. cz obj param jane na j eta dog na cat. ei khetre amera type gard korbo 'instanceof' gard dia.
function isDog(animal:Animals): animal is Dog{  // retrun korbe j eta asholei Dog eta kora holo jate nicher function a obj bujhte pare j eta Dog. na dile bujhtona.
    return animal instanceof Dog
}
function getInstance(obj: Animals) {
    if (isDog(obj)) { // eta function diaw check kora jai.
        obj.makeBark()
    }
    if (obj instanceof Cat) {
        obj.makeMew()
    }
    else {
        obj.makeSound()
    }
}
const animal1 = new Dog('kala kutta', 'dog');   // instance ->dog
const animal2= new Cat('kala biral','cat')      // instance ->cat

getInstance(animal1)
