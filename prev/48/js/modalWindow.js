"use strict";

window.addEventListener('DOMContentLoaded', () => {
    //const modalTrigger = document.querySelectorAll('[data-modal]');
    const modalWindow = document.querySelector(".modal");
    //document.body.style.overflow = 'hide'; преостанавливает прокрутку странице при открытом модальном окне
function showContactWindow() {
    
    modalWindow.style.cssText = "display: block;";
    console.log(modalWindow);
    document.body.style.overflow = 'hidden';

    //прекращает работу таймера, по которому открывается модальное окно
    clearInterval(modalIntervalId);
}

function hideContactWindow () {
    modalWindow.style.cssText = "display: none;";
    document.body.style.overflow = '';
}

function hideContactWindowBackClick (event) {
    if(event.target === modalWindow){
        modalWindow.style.cssText = "display: none;";
        document.body.style.overflow = '';
    }    
}

    const contactBtn1 = document.querySelector("button.btn_dark.btn");
    const contactBtn2 = document.querySelector("button.btn_white.btn");
    // console.log(contactBtn2);
    let contactBtns = [contactBtn1, contactBtn2];

    for(let k = 0; k <= 1; k++) {
        contactBtns[k].addEventListener("click", showContactWindow);
    }

    const closeModalWindow = document.querySelector("div.modal__close");
    closeModalWindow.addEventListener("click", hideContactWindow);


    //закрытие модального окна при елике на подложке
    modalWindow.addEventListener('click', hideContactWindowBackClick);

    //закрытие модального окга при нажатии клавиши Escape
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" ) {
            hideContactWindow();
        }
    });

    //пролистал страницу до конца появляется модальное окно

    function afterScrollShowModalWindow () {
        //прокрутка страницы + размер окна клиента >= длина прокрутки
        if (window.pageYOffset + document.documentElement.clientHeight >= document.body.scrollHeight) {
            // alert("dasfa");
            // console.log(document.body.scrollHeight);
            showContactWindow();
            window.removeEventListener('scroll', afterScrollShowModalWindow);
        }
        
    }

    window.addEventListener('scroll', afterScrollShowModalWindow);
    // в обработчике события
    // {once: true});




    //через 30 секунд всплывает модальное окно
    //const modalIntervalId = setTimeout(showContactWindow, 5000);
});
