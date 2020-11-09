"use strict";

window.addEventListener('DOMContentLoaded', () => {

    const menuArticles = document.querySelectorAll('div.menu__item');
    //console.log(menuArticles);


    //========================Добавление общения с базой на json сервере 59============

    //async ставится перед переменными в блоке ассинхронного кода, await - перед
    // оператором,
    // завершения работы которого мы ждём
    const getResources = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Couldn't fetch ${url}, status: ${res.status}`);
        } 

        return await res.json();
    };

    // getResources('http://localhost:3000/menu')
    //     .then(data => {
    //         data.forEach(({descr, title, img, altimg, price}) => {
    //             new MenuArticle(descr, title, img, altimg, price)
    //                 .drawMenuArticle();
    //         });
    //     });
    //=============================================================================

    //===================библиотека axios===============================
        axios.get('http://localhost:3000/menu')
            .then(data => {
                data.data.forEach(({descr, title, img, altimg, price}) => {
                    new MenuArticle(descr, title, img, altimg, price)
                        .drawMenuArticle();
                });
            });
    //=============================================================================

    

    menuArticles.forEach((el) => {
        el.style.display = 'none';
    });

    class MenuArticle {
        constructor (text, title, image, altTitle, price) {
            this.text = text;
            this.title = title;
            this.image = image;
            this.altTitle = altTitle;
            this.price = price;
        }

        drawMenuArticle () {
            const menuContainer = document.querySelector('div.menu__field > div.container');
            //console.log(menuContainer);
            let divInsert = document.createElement('div');
            divInsert.classList.add('menu__item');
            divInsert.innerHTML = `
                <img src="${this.image}" alt="${this.altTitle}">
                <h3 class="menu__item-subtitle">${this.title}"</h3>
                <div class="menu__item-descr">${this.text}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
            `;
            menuContainer.appendChild(divInsert);

        }
    
      
    }
//Добавляем статьи
    // const text1 = 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!';
    // const menuArt1 = new MenuArticle (
    //     text1, 
    //     'Меню "Фитнес"', 
    //     'img/tabs/vegy.jpg', 
    //     'vegy', 
    //     229
    // );
    // menuArt1.drawMenuArticle();

    // const text2 = 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!';
    // const menuArt2 = new MenuArticle (
    //     text2, 
    //     'Меню “Премиум"', 
    //     'img/tabs/elite.jpg', 
    //     'elite', 
    //     550
    // );
    // menuArt2.drawMenuArticle();

    
    // const text3 = 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков. ';
    // const menuArt3 = new MenuArticle (text3, 
    //     'Меню "Постное"', 
    //     'img/tabs/post.jpg', 
    //     'post', 
    //     430
    // );
    // menuArt3.drawMenuArticle();


    //new MenuArticle().drawMenuArticle();

});