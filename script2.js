"use strict";

let num = 65;

do {
    console.log(num);
    num++;
} while (num <= 55)

for (let i = 1; i < 10; i++){
    if (i === 6){
        continue;
    }

    console.log(i);
}