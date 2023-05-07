//*basic class
// class Animal{       // class object declear korte hole first property dite hobe.,
//     name: string;   // propery dewar por error dibe. cz class  a constructor must lagbei.
//     species: string;
//     sound: string;

//     constructor(name: string, species: string, sound: string) { // constructor er moddhe instractor initialze korte hoi. evabe property declear hoa jai
//         this.name = name;
//         this.species = species;
//         this.sound = sound;
//     };

//     makeSound() {       // class a method create kora holo.
//         console.log(`this ${this.name} says ${this.sound}`)
//     }
// }

// const dog = new Animal('gS', 'dog', 'ghew');
// const cat=new Animal('cat', 'Tushu', 'mew')
// dog.makeSound();


//* simplified class
// property gulo constractor a repeative hocche. eta k simplified kora jai
//*parameter property use kroe. 
//eta use kore amra type and initialize aksathe korte pari.
class Animal {
//   public name: string; // propery gulo public vabei thake default vabe taw explict kroe dia holo
//   public species: string;
//   public sound: string;

  constructor(public name: string, public species: string, public sound: string) { // consturctor er parameter er moddhe param gulo ke public kore dibo. uporer property declear and constructor er moddher propery lekha lage na. typescript compiler akta kore dei.
    // this.name = name;
    // this.species = species;
    // this.sound = sound;
  }

  public makeSound() {
    // class a method create kora holo.
    console.log(`this ${this.name} says ${this.sound}`);
  }
}