// poli mane onek. morphism mane rup.
// jokhn onek gulo class thakbe and class er same method different different output dibe setai holo polymorphism

class Person {
  takeNape(): void {
    console.log("sleep 8 hour");
  }
}
class Students extends Person {
  takeNape(): void {
    console.log("10 hour sleep");
  }
}
class Developer extends Person {
    takeNape(): void {
        console.log('i am sleeping 5 hours');
    }
}

function getNape(param:Person) {
    param.takeNape();
}
const person1 = new Person();
const person2 = new Students();
const person3 = new Developer();
getNape(person1)
getNape(person2)
getNape(person3) // same method but different different output dicche different class a. eta i polymorphism


class Shape{
    getArea(): number {
        return 0;
    }
}

class Circle extends Shape{
    radious: number;
    constructor(radious: number) {
        super();
        this.radious = radious;
    }
    getArea():number {
        return Math.PI * this.radious * this.radious;
    }
}

class Rectangle extends Shape{
    height: number;
    width: number;
    constructor(height: number, width: number) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea(): number {
        return this.width*this.height;
    }
}

function getAreaOfShape(params:Shape) {
    console.log(params.getArea());
}

getAreaOfShape(new Circle(10));
getAreaOfShape(new Rectangle(10,20))