"use strict";
{
    //
    class Animal {
        constructor(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        makeSound() {
            console.log(`the ${this.name} say ${this.sound}`);
        }
    }
    const dog = new Animal("tomi", "dog", "gew, gew");
    const cat = new Animal("pusi", "cat", "mew, mew");
    const tiger = new Animal("bengal", "tiger", "oi, oi");
    const cow = new Animal("jahed khan", "cow", "hamba, hamba");
    cow.makeSound();
    //
}
