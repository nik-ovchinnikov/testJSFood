
//==============запуск с задержкой 4с, в функциб передается аргумент который пишется после времени
//let timerId = setTimeout(logger, 4000, "Hello");

function logger (text) {
    console.log(text);
}

// //сбросить временной интервал

// //clearInterval(timerId);

// //==============сбросить временной интервал при нажатие куда-нибудь, какой-нибудь кнопки

// //const btn = document.querySelector("div.box");
// //console.log(btn);

// function denyTimer(event) {
//     clearInterval(timerId);
// }
// btn.addEventListener("click", denyTimer);

// //================на повторение функции===============
// //let timerId2 = setInterval(logger, 3000, "Hello!!!");

// const btn2 = document.querySelector("button.btn");
// //console.log(btn);

// function denyTimeInterval(event) {
//     clearInterval(timerId2);
// }
// btn2.addEventListener("click", denyTimeInterval);

// //===============для доступа к таймерАйди её инициализируют вне функций=============

// //===============рекурсивный способ адани setTimeout===================

// let id = setTimeout(function log() {
//     //console.log("Test111");
//     id = setTimeout(log, 5000);
// });

//===========плавное перемещение квадратика в другой угол ========
window.addEventListener('DOMContentLoaded', () => {
    const blueSquare = document.querySelector("div.box");
    const animationOn = document.querySelector("button.btn");

    

    function startAnimation () {
        let yPos = 0;
        let xPos = 0;
        setTimeout(logger("Start"), 3000);
        let id = setTimeout(function log() {
            
            if(yPos > 295){return 0;}    

            yPos += 10;
            xPos += 10;
            blueSquare.style.top = `${yPos}px`;
            blueSquare.style.left = `${xPos}px`;
            id = setTimeout(log, 200);
        });
        
    }

    animationOn.addEventListener("click", startAnimation);



});



