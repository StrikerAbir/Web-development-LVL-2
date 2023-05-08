
class Paraent {
  name: string;
  age: number;
  address: string;
  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  makeSleep(hours: number): string {
    return `this ${this.name} will sleep for ${hours}`;
  }
}

class Student extends Paraent {     // extends kore amra inherit korlam 
//   name: string;      
//   age: number;
//   address: string;
  constructor(name: string, age: number, address: string) {  // jehetu eta student class constuctor thaktei hob.jodi er nijosso kono proprty thake tahole obossi this dia initalize korte hobe. r parent class er gulo super dia initialize kore dibo. jethu ota onno class property
    // this.name = name;
    // this.age = age;
    // this.address = address;
      super(name, age, address);
  }
//   makeSleep(hours: number): string {
//     return `this ${this.name} will sleep for ${hours}`;
//   }
}

const student1=new Student('bane',12,'booo')

// ei 2 ta class er moddhe name, age ,address  and makeSleep method common. tai amra akta common class banabo
class Teacher extends Paraent {
//   name: string;
//   age: number;
//   address: string;
  designation: string;
  constructor(name: string, age: number, address: string, designation: string) {
    // this.name = name;
    // this.age = age;
    // this.address = address;
    super(name, age, address);
    this.designation = designation;
  }
//   makeSleep(hours: number): string {
//     return `this ${this.name} will sleep for ${hours}`;
//   }
  takeClasses(noOfClass: number): string {
    return `this ${this.name} will take ${noOfClass} classes`;
  }
}

const teacher1 = new Teacher('poo', 23,'canada','teacher')