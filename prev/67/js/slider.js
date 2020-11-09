'use strict';
window.addEventListener('DOMContentLoaded', () => {

    //====================variables==========================
    const picture = document.querySelector("div.offer__slider-wrapper img");
    const amount = document.querySelector("#total");
    const number = document.querySelector("#current");
    let currentIndex = 1;
    const arrowBack = document.querySelector(".offer__slider-prev");
    const arrowForward = document.querySelector(".offer__slider-next");

    //----------navigations----------
    const sliderContainer = document.querySelector(".offer__slider");
    const sliderDots = document.querySelectorAll(".dot");

    

    //====================functions==========================

    //Получаем всё о слайдерах из базы
    function getSliderInfo () {
         return axios.get('http://localhost:3000/sliders')
            .then(data => data.data);      
    }

    //Преобразование чисел в порядковй номер слайдера
    function number2String(number) {
        if(number < 9) {
            return '0' + `${number}`;
        } 
            return `${number}`;
    }

    //Преобразование объекта из базы для загрузки слайдера
    function dataPrepare (data) {
        
    }

    //Количество слайдеров
    function sliderAmountDraw (number) {
        let text = number2String(number);
        amount.textContent = text;
    }

    //Преобразовывает данные с сервера в удобный формат
    function arrayPrepare2Draw (arr) {
        arr.map((item) => {
            item[0] = number2String(+item[0] + 1);
        });

        return arr;
    }

    //Рисует слайдер
    function drawSlider (index, arr) {
        let keyName = number2String(index);
        let resoltato; 
        arr.forEach((elem) => {
            if (elem[0] == keyName){resoltato = elem;}
        });
        number.textContent = resoltato[0];
        picture.src = resoltato[1].img;

        //поиск активной точки в навигаторе и её стираие
        let coloredDot = document.querySelector('.dot__active');
        console.log(coloredDot);
        coloredDot.classList.remove(`dot__active`);
        //поиск нужной точки с нкжным индексом
        let coloredDot2 = document.getElementById(index);
        coloredDot2.classList.add(`dot__active`);

    }

    //----------navigations----------
    function createSliderNavigations (amount) {
        let i = 1;
        let res = `<div class="dot__container">`;

        res += `<div class="dot dot__active" id="1"></div>`;
        for (i = 2; i  <= amount; i++){
            res += `<div class="dot" id="${i}"></div>`;
        } 

        res += "</div>";

        let divInsert = document.createElement('div');
        divInsert.classList.add('slider__navigation');
        divInsert.innerHTML = res;
        sliderContainer.appendChild(divInsert);

    }

    function activeDot () {

    };
    



    //====================scripts==========================
    getSliderInfo()
        .then(data => Object.entries(data))
        .then((data) => {
            
            //общее число картинок
            let sliderTotalAmount = data.length;
            sliderAmountDraw(sliderTotalAmount);

            const resArray = arrayPrepare2Draw(data);

            //обработчик событий на стрелки м змененме индекса
            createEventsForArrows();
                // ------------Создание обработчиков  событий на стрелки
                    function autoIncreaseIndex () {
                        if (currentIndex == sliderTotalAmount) {currentIndex = 1;}
                        else {currentIndex ++;}
                        drawSlider(currentIndex, resArray);
                        return currentIndex;
                    }

                    function increaseIndex () {
                        clearInterval(int1);
                        if (currentIndex == sliderTotalAmount) {currentIndex = 1;}
                        else {currentIndex ++;}
                        drawSlider(currentIndex, resArray);
                        return currentIndex;
                    }

                    function decreaseIndex () {
                        clearInterval(int1);
                        if (currentIndex == 1) {currentIndex = sliderTotalAmount;}
                        else {currentIndex --;}
                        drawSlider(currentIndex, resArray);
                        return currentIndex;
                    }

                    function createEventsForArrows () {
                        arrowForward.addEventListener('click', increaseIndex);
                        arrowBack.addEventListener('click', decreaseIndex);
                    }
                // -------------------------------------------------------
            
            const int1 = setInterval(() => {
                autoIncreaseIndex();
            }, 5000);

            //----------navigations--------------------------------
            createSliderNavigations(sliderTotalAmount);
            createSliderNavEvents();
                //Создание обработчиков  событий на стрелки
                function createSliderNavEvents () {
                    
                    const sliderDots = document.querySelectorAll(".dot");
                    sliderDots.forEach((elem) => {
                        elem.addEventListener('click', dotClick);
                    });
                }

                function dotClick (e) {
                    clearInterval(int1);
                    let currentFromNav = e.target.getAttribute("id");
                    currentIndex = currentFromNav;
                    drawSlider (currentFromNav, resArray);
                }


            // -------------------------------------------------------



       

        });
    //=====================================================
   

    
});