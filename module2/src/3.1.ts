{
  //

  class Animal {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

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
