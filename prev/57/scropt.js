'use strict';

//filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Valdemart'];

const shortNames = names.filter(function(name) {
    return name.length < 5;
});

console.log(shortNames);


//map

const answers = ['Ivan', 'Anna', 'Hello'];

const result = answers.map(item => item.toLocaleLowerCase());
console.log(result);

//every/some

const some = [4, 22, 123];
console.log(some.some(item => typeof(item) === 'number'));
console.log(some.every(item => typeof(item) === 'number'));

//reduce

const arr = [4, 3, 3, 32, 12, 44];
const result2 = arr.reduce((sum, current) => sum + current);
console.log(result2);


const arr3 = ["apple", 'pflaume', 'kiwi'];
const result3 = arr3.reduce((sum, current) => sum + current);
console.log(result3);
//третья переменная у редьюс = это начальное значение суммы



//пример
const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj);
//console.log(newArr);

const humanNames = newArr.filter(type => {
    return type.some((item) => item ==='persone');
})
.map((item) => item[0]);
//console.log(humanNames);
// let sumArr = [];
// let result4 = humanNames.forEach((current) => {
//     // return `${sum}, ${current[0]}`;
//     sumArr.push(current[1]);
// });
// console.log(sumArr);
console.log(humanNames);




