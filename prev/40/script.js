//==========работа с дататими=======

'use strict';

// const now = new Date();
// console.log(now);

const now1 = new Date('2020-05-01');
console.log(now1);

const now2 = new Date(0);
console.log(now2);

//========Методы getter=========
const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getUTCHours());
console.log(now.getHours());


console.log(now.getTimezoneOffset()); // разница в минутах с Гринвич
console.log(now.getTime());

//========Методы setters=========
const now3 = new Date();
// console.log(now3.getFullYear());
// console.log(now3.getMonth());
// console.log(now3.getDate());
// console.log(now3.getUTCHours());
console.log(now3.setHours(18, 40));


console.log(now3.getTimezoneOffset()); // разница в минутах с Гринвич
console.log(now3.getTime());

//======

const now5 = new Date('2020-05-01');
new Date.parse('2020-05-02');

console.log(now5);

//====разница в датах
let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i **3;
}

let end = new Date();

console.log(`Цикл отработал за ${end - start}`);