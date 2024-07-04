"use strict";
{
    //
    class Shape {
        getArea() {
            return 0;
        }
    }
    class Circle extends Shape {
        constructor(radius) {
            super();
            this.radius = radius;
        }
        getArea() {
            return Math.PI * this.radius * this.radius;
        }
    }
    class Rectangle extends Shape {
        constructor(height, width) {
            super();
            this.height = height;
            this.width = width;
        }
        getArea() {
            return this.height * this.width;
        }
    }
    const getShape = (pram) => {
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
