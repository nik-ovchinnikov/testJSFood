
'use strict';

function showThis () {
    console.log(this);
}

showThis();

// 1) Обычнпя функция: this = window, но если use strict - undefined

function showThis1 (a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        //return this.a + this.b; не работает
        return a + b;
    }

    console.log(sum());
}
// Котнтекст вызова функции sum - переменные, которые не были найдены в теле функции, бцдут искаться во вншней функции.
showThis1(4, 5);

// 2) Контекс у метода объекта - это сам объект

const obj = {
    a: 20,
    b: 15,
    sum: function () {
        console.log(this);
    }
};
obj.sum();


// В следующем примере мы видим, что shout - обычная функция, которая ведёт себя, как в пункте один, несмотря на то, 
//что она вложена в метод объекта
const obj1 = {
    a: 20,
    b: 15,
    sum: function () {
        function shout () {
            console.log(this);
        }
        shout();
    }
};
obj1.sum();

//Функции-конструкторы
//3) this в конструкторах и классах - это новый экземпляр объекта

function User (name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
}

let ivan = new User('Ivan', 11);

//4) Ручная привящка this
//Присвоение контекста
function sayName(surname) {
    console.log(this);
    console.log(this.name + ' ' + surname);
}

const user1 = {
    name: 'John'
};

sayName.call(user1, 'Smith');
sayName.apply(user1, ['Smith']);

//Контекст для новой функции
function count (num) {
    return this*num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(13));


//expample

const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    console.log(this);
});

// стрелочная функция контекст от родителя
const obj3 = {
    num: 5, 
    sayNumber: function() {
        const say = () => {
            console.log(this);
        }

        say();
    }
};

obj3.sayNumber();


const double2 = a => a * 2; // сокращение от  const double = (a) => {return 2 * a;};


console.log(double(182));