'use strict';

//====================variables=====================

const resultContainer = document.querySelector('.calculating__result');
//...............Поля касание которых запускает калькулятор.....................
const genderBox = document.querySelectorAll('#gender .calculating__choose-item');
const constitutionContainer = document
    .querySelector('.calculating__choose_medium');
const activityBox = document.querySelectorAll('#activity .calculating__choose-item');
//let triggerClickArea = {genderBox, activityBox};
//..............Для переключения кнопок......................................


//====================functions=====================
//Переключения полей активности и поля при нажатии
function buttonBoxesEvents (elemBox) {
    
    elemBox.forEach((elem) => {
        elem.addEventListener('click', (e) => {
            if(e.target.classList.length == 2) {
                console.log("is already checked!");
            } else {
                let className = e.target.classList[0];
                let activeEl = e.target.parentNode.querySelector(`.${className}_active`);
                activeEl.classList.remove(`${className}_active`);
                e.target.classList.add(`${className}_active`);

            }
            calculator();
        });
    });
}   

function constitutionEvent () {
    constitutionContainer.addEventListener('input', (e) => {

        let values = e.target.value;       

        //===Проверка введнноё информаци===
        //При ошибке сумма будет отлчаться от нуля
        let sum = 0;
        
            //последний введённый символ
            let lastSymbol = values.charAt(values.length - 1);
            //является ли последний символ числом
            if (!((lastSymbol > -1) && (lastSymbol < 10)) || values.length == 0) {
                sum = sum + 22;
                //отменяем введение символа
                e.target.value = values.substring(0, values.length - 1);
            } else if (values.charAt(0) == 0) {
                sum = sum + 22;
                //отменяем введение символа
                e.target.value = values.substring(1, values.length);
            }
            
        
        
        if (sum === 0) {
            calculator();
        } else {
            console.log('Error in getting constitutiomal parameteres!');
            return 0;
        }
        //=====================================
    
    
        
    //..............Для переключения кнопок......................................
    });
}

function calculator () {
    let gender = document
        .querySelector('#gender .calculating__choose-item_active')
        .getAttribute('data-info');
    let activityRang = document
        .querySelector('#activity .calculating__choose-item_active')
        .getAttribute('data-info');
    let ves = constitutionContainer.querySelector('#ves').value;
    let rost = constitutionContainer.querySelector('#rost').value;
    let vozrast = constitutionContainer.querySelector('#vozrast').value;
    let result = {ves, rost, vozrast};
    
    let sum = 0;
    let res = Object.entries(result);
    res.forEach((elem) => {
       if (elem[1].length == 0) {
           sum = 22;
       }
    });
    
    if (sum == 0) {
        caloryCount(gender, activityRang, result);
    }     
    
}

function caloryCount(gender, activityRang, result) {

    let data = [gender, activityRang, result]; 
    console.log(data);
    if (gender == 'male') {
        resultContainer.innerHTML = "";
        let divInsert = document.createElement('div');
        divInsert.textContent = maleCalculator (activityRang, result.rost, result.ves, result.vozrast);        
        resultContainer.appendChild(divInsert);
    } else if (gender == 'female') {
        resultContainer.innerHTML = "";
        let divInsert = document.createElement('div');
        divInsert.textContent = femaleCalculator (activityRang, result.rost, result.ves, result.vozrast);        
        resultContainer.appendChild(divInsert);
    } else {
        console.log("It is strange, but - error!");
    }
}

function maleCalculator (activityRang, rost, ves, vozrast) {
    let res = (88.36 + (13.4 * ves) + (4.8 * rost) + (5.7* vozrast)) * activityRang; 
    return  Math.round(res);
}

function femaleCalculator (activityRang, rost, ves, vozrast) {
    let res = (447.6 + (9.2 * ves ) + (3.1 * rost) - (4.3* vozrast)) * activityRang; 
    return Math.round(res);
}


//====================scripts=======================
    constitutionEvent();
    buttonBoxesEvents(genderBox);
    buttonBoxesEvents(activityBox);
    
    
