"use strict";

window.addEventListener('DOMContentLoaded', () => {
    //console.log("event.target.classList");
    function changeStyle (event) {
        //console.log("event.target.classList");
        //console.log(event.target.classList);
        if (!event.target.classList.contains("tabheader__item_active")){
            const tabContainer = document.querySelector('.tabcontainer');

            const classActiveName = tabContainer.querySelectorAll(".tabheader__item_active");
            console.log(classActiveName[0].classList);
            classActiveName[0].classList.remove("tabheader__item_active");
            console.log(classActiveName[0].classList);
            const infoTabClassToRemove = classActiveName[0].classList[1];
            console.log(infoTabClassToRemove);
            let infoTabAcive = document.getElementById(infoTabClassToRemove);

            console.log(infoTabAcive);
            infoTabAcive.style.cssText = "display: none";

            const className = event.target.classList[1];
            const infoTab = document.getElementById(className);
            event.target.classList.add('tabheader__item_active');
            infoTab.style.cssText = "display: block;";
            
        }
    }


    const tabs = document.querySelectorAll('.tabheader__item'); 
    //console.log(tabs);

    tabs.forEach(tab => {
        tab.addEventListener('click', changeStyle);
    });
});
