"use strict";
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    makeSound() {
        console.log("I am sounding");
    }
}
const isDog = (animal) => {
    return animal instanceof Dog;
};
const isCat = (animal) => {
    return animal instanceof Cat;
};
const getAnimal = (animal) => {
    if (isDog(animal)) {
        animal.soundGew();
    }
    else if (isCat(animal)) {
        animal.soundMew();
    }
};
class Dog extends Animal {
    constructor(name, species) {
        super(name, species);
    }
    soundGew() {
        console.log(`${this.name} sound gew`);
    }
}
class Cat extends Animal {
    constructor(name, species) {
        super(name, species);
    }
    soundMew() {
        console.log(`${this.name} sound mew`);
    }
}
const dog = new Dog("tomi", "dog");
const cat = new Cat("pusi", "cat");
