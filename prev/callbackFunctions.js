"use strict";

function first() {
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();


function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

learnJS("Javascript", function() {
    console.log("Я прошёл этот урок!");
});

function done() {
    
    console.log("Я прошёл этот урок!");
}

learnJS("Javascript", done);




