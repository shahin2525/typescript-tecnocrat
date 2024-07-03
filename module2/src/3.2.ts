class Animal {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
  makeSound() {
    console.log("I am sounding");
  }
}
const isDog = (animal: Animal): animal is Dog => {
  return animal instanceof Dog;
};
const isCat = (animal: Animal): animal is Cat => {
  return animal instanceof Cat;
};

const getAnimal = (animal: Animal) => {
  if (isDog(animal)) {
    animal.soundGew();
  } else if (isCat(animal)) {
    animal.soundMew();
  }
};

class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  soundGew() {
    console.log(`${this.name} sound gew`);
  }
}

class Cat extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  soundMew() {
    console.log(`${this.name} sound mew`);
  }
}

const dog = new Dog("tomi", "dog");
const cat = new Cat("pusi", "cat");
