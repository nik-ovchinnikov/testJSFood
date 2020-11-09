'use strict';

const persone = {
    name: 'Niki',
    tel: '89992388232',
    parent: {
        mom: 'Irina',
        papa: 'Mike'    }
};

console.log(JSON.parse(JSON.stringify(persone)));

//глубокое клонирование
const clone = JSON.parse(JSON.stringify(persone));
clone.parent.papa = 'Alexander';
console.log(persone);
console.log(clone);