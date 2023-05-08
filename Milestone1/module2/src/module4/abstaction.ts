// class declare kore method declare er por oi method er real implementation (mane calculation) somporke amra janbo na. but amra bujhte parbo etar shape ba kaj ki kore. abstraction etai mean kore.

// abstraction 2 vabe kora jai. 1. interface 2. abstract class use kore.

//* interface

interface IVehicle {
  // eta object
  name: string;
  model: string;
}
const vahicle: IVehicle = {
  name: "car",
  model: "gogog",
};
// amra object a jmn interface use korte pari temni class ew korte pari.

interface IVehicle2 {
  startEngine(): void; // eta dekhe bujhte parsi amra j ei type er hobe jinishta. but vitore ki korse seta kintu dekhte parsi na ba jani na. etai abstraction jeta interface dia kora hoise.
  stopEngine(): void;
  move(): void;
}

class Vehicle implements IVehicle {
  // function a amra : IVehicle evabe use kortam type declear. class a ta hoi na. ekhane implements use korte hoi.
  startEngine(): void {
    // akhn implement korar por IVehicle a ja ja ase sgulo use kortei hobe. na hole error dibe. ogulo thakle onno ja kisu di na kno thik thakbe.
    console.log("stating engine");
  }
  stopEngine(): void {
    console.log("stopping engine");
  }
  move(): void {
    console.log("move");
  }
  test() {
    console.log("i am for testing purpose");
  }
  constructor(
    public name: string,
    public brand: string,
    public model: string
  ) {}
}

const vehicle1 = new Vehicle("toyota", "horbori", "gari");

//* abstraction class
// amara abstract class e declare korte pari. example akjn leader tar moto kore tar follower der kaj korate chai. mane leader k follow korbe

abstract class Vehicle3 {
  abstract startEngine(): void;    // abstract class er method k abstract kore ki type seta boledewa holo. implementation follower ra korbe.
  abstract stopEngine(): void;
  move(): void {
    console.log("move");
  }

  constructor(
    public name: string,
    public brand: string,
    public model: string
  ) {}
}

// const car1 = new Vehicle3('car', 'honda', '2393') // abstract kroar age Vheicle3 class ta dia instance create kroa jacchilo. but jokhn amra class take abstract kroe dibo tokhn r ei class dia kono instance create kora jabe na. tar mane amra ei class k extends korbo follow korbo but instance create korte parbo na.

class Car extends Vehicle3 {
  startEngine(): void {     // abstract class a startEngine and stopEngine ei dui ta abstract kora ase. tar mane amader follower hisabe ogulo use kortei hobe. just calculation implementaion follower ra oder moto korbe. mane eggulo must thakbei. tarpor onno kisu add korle korla ei. ei class er instance banano jabe ebar.
    console.log("stating engine");
  }
  stopEngine(): void {
    console.log("stopping engine");
  }
}
const car1 = new Car("car", "honda", "2393");

//note: interface jokhn use korsi move function ta must use korte lagse. but jokhn abstact class use korsi tokhn kora lagini. ba korlew pblm silo na. emni tei parant theke ashsilo. karon holo move funciton ta abstact class er moddhe method abstact kora nai tai. jodi thakto tahole must korte hoto.