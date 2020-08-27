"use strict";

let a = 5,
    b = a;

    b = b + 6;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};
console.log(obj);

const copy = obj;

copy.a = 11;

console.log(copy);

console.log(obj);

function copyObj(mainObj) {
    let objCopy = {};

    let key;

    for (key in mainObj) {
        objCopy[key] = mainObj[key];
         
    }
    return objCopy;
}

const numbers = {
    a: 5,
    b: 3,
    c: {
        x: 23,
        y: 21
    }
}

let numbersCopy = copyObj(numbers); //поверхностная копия вложенные объекты копируются ссылки оригинала

numbersCopy.a = 223;
console.log(numbersCopy);
console.log(numbers);

//======================

const add = {
    r: 11,
    fd: 34343
}

console.log(Object.assign(numbersCopy, add));

//========================

const oldArray = ['a', 'd', 'dd'];
const newArray = oldArray.slice();

newArray[1] = 'sdfasdf';
console.log(oldArray);
console.log(newArray);

//===

const video = ['safasdfasdf;', 'asdfasdfasd', 'asdfsadf;'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

      console.log(internet);

//======================

function log (a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [22, 343, 1212, 32];

log(...num);

//==========================

const array = ["a", "d"];

const newArray1 = [...array];

const q = {
    one: 21,
    two: 2
};

const newObj1 = {...q};




