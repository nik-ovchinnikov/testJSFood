'use strict';

const box = document.getElementById('box');
console.log(box);

const buttons = document.getElementsByTagName('button');
console.log(buttons);

const buttons1 = document.getElementsByTagName('button')[2];
console.log(buttons1);

const buttons2 = document.getElementsByTagName('button');
console.log(buttons2[0]);

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart');
console.log(hearts);
hearts.forEach(item => {
    console.log(item);
});







