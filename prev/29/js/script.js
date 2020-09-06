'use strict';

const square = document.getElementById('box');
const buttons = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');

//console.dir(square);
box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = 'background-color: black; width: 700px';

let num = 800;
box.style.cssText = `background-color: black; width: ${num}px`;

buttons[2].style.backgroundColor = 'orange';
buttons[3].style.borderRadius = '100%';

for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'green';
}

hearts.forEach(
    item => {
        item.style.backgroundColor = 'orange';
    }
);

const div = document.createElement('div');
const text = document.createTextNode('Тут был я!');

//div.classList.add('black');

document.body.append(div);

div.style.cssText = 'background-color: yellow; width: 70px; height: 50px';
wrapper.append(div);
//wrapper.prepend(div);

hearts[1].before(div);
hearts[2].after(div);

circles[2].remove();

hearts[0].replaceWith(circles[0]);

wrapper.insertBefore(div, hearts[2]);

div.innerHTML = "<h1>Hekko!!!</h1>";

div.textContent = '<h1>Hello</h1>';

div.insertAdjacentHTML("afterend", "<h1>Hekko!!!</h1>");




