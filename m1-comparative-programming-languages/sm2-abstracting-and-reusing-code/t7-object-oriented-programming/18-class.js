// Class 

// ES6

// class declaration
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

// class expression
let Rectangle = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

// Named class expression
let Rectangle = class Rectangle2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

// Class declarations are not hoisted
// You first need to declare your class and then access it, otherwise ReferenceError will be thrown
let p = new Rectangle(); // ReferenceError


class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + ' says "Hello!"'); // Hello!
    }
}

let human = new Animal('John');
human.speak();  // logs 'John says "Hello!"'

class Dog extends Animal {
    speak() {
        console.log(this.name + ' says "Woof!"');
    }
}

let myDog = new Dog('Fido');
myDog.speak();  // logs 'Fido says "Woof!"'



