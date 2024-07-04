{
  //

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }
    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShape = (pram: Shape) => {
    console.log(pram.getArea());
  };

  const instance1 = new Shape();
  const instance2 = new Circle(5);
  const instance3 = new Rectangle(5, 5);

  getShape(instance1);
  getShape(instance2);
  getShape(instance3);

  //
}
