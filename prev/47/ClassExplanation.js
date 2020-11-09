'use strict';

class Rectangle {
    constructor (height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);
const long = new Rectangle(20, 250);

console.log(square.calcArea());
console.log(long.calcArea());


//наследование

class ColoredRectangleWithText extends Rectangle{
    constructor(height, width, text, color){
        super(height, width);//всегда на первом месте в конструкторе
        this.text = text;
        this.color = color;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет ${this.color}`);
    }
}

const div = new ColoredRectangleWithText(10, 33, "Hello, World!", "red");

div.showMyProps();