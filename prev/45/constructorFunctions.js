'use strict';

const num = new Number(3);
console.log(num);

function User (name, age) {
    this.name = name;
    this.age = age;
    this.human = true;

    this.hello = function () {
        console.log(`Hello, ${this.name}`)
    };
}

User.prototype.exit = function () {
    console.log(`Пользователь ${this.name} ушёл`);
}

const ivan = new User("Ivan", 35);
const jane = new User("Jane", 25);

ivan.hello();
jane.hello();
ivan.exit();
jane.exit();


console.log(ivan);
console.log(jane);