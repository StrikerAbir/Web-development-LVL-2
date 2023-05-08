class Counter{
   static counter: number=0;      // static kroe dewa holo. mane class er moddhe variable moto hoa gelo.
    // constructor(counter: number) {
    //     this.counter = counter;
    // }
    static increment() {
        // return this.counter = this.counter + 1;
        return Counter.counter = Counter.counter + 1;
    }
    static decrement() {
        // return this.counter = this.counter - 1;
        return (Counter.counter = Counter.counter - 1);
    }
}
// before static
// const instance1 = new Counter(0);
// const instance2 = new Counter(1);
// ekhane instance 2 ta alada alada vabe memory allocate kore value rakhe. amara jodi na chai j alada alada memeory allocate na koruk tahole amra class a counter property ta ke static kore dibo. and constructor sorai dibo class er.
// console.log(instance1.increment());
// console.log(instance2.increment());

//after static
const instance1 = new Counter();
const instance2 = new Counter();
console.log(Counter.increment());
console.log(Counter.increment());

// otoeb Counter class dia ami sob kisu access korte parsi static gulo. instance dia na.


