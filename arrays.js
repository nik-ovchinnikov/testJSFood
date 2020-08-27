"use strict";

const arr = [1, 2, 3, 5, 7];

//arr.pop();

arr.push(177);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let key in arr) {
    console.log(arr[key]);
}

for (let value of arr) {
    console.log(value);
}
//================================
const arr1 = [1, 2, 3, 5, 7];

arr1[99] = 3399;

console.log(arr1.length);
//================================

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} в массиве ${arr}`)
});

const str = prompt("", "");
let products = str.split(", ");
console.log(products);

products = products.sort();
console.log(products.join("/"));


const array = [2, 13, 130, 133, 20, 23];

array.sort(compareNum);
console.log(array);

function compareNum(a,b) {
    return a - b;
}