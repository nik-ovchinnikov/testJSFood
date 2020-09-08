/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Лига справедливости 2",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// const adv = document.getElementsByClassName('promo__adv');

// console.log(adv);

// const arr = ['sdfsd', 'sadfasd', 'sadfew1'];

// for (let i = 0; i < adv.length; i++) {
//     //console.log(advertise[i]);
//     adv[i].remove();
// }

// //   adv.forEach(item => {
// //           console.log(item);
// //       }
// //   );

//==============================================

const genreDiv = document.getElementsByClassName('promo__genre');
//console.log(genreDiv);

genreDiv[0].innerHTML = 'Драма';
//genreDiv[0].style.backgroundColor = "black";
//genreDiv[0].style.width = "300px";
//genreDiv.textContent("Драма");

//============================================

const content = document.getElementsByClassName('promo__bg');
content[0].style.cssText = "background: url('../img/bg.jpg')";

//=============================================


const filmsBlock = document.getElementsByClassName("promo__interactive-list");

let filmArr = movieDB.movies;


function printFilms(filmArray, printPlace) {
    const filmList = document.getElementsByClassName("promo__interactive-item");
    const listLength = filmList.length;
    for (let j = 0; j <  listLength; j++) {
        //console.log(filmList[j]);
        filmList[0].remove();
    }

    filmArray.sort();
    for (let j = 0; j <  filmArray.length; j++) {
        //console.log(filmArray[j]);
        printPlace.insertAdjacentHTML("afterend", `<li class='promo__interactive-item'> <p class="item_number">${filmArray.length - j}.  </p> <p class="item_name">${filmArray[filmArray.length - 1 - j]}</p><div class="delete"></div></li><br>`);
        //filmList[0].remove();
    }

    let baskets = document.querySelectorAll(".delete");
    baskets.forEach (basket => {
        basket.addEventListener('click', deleteElement);
    });
}

printFilms(filmArr, filmsBlock[0]);

const adv = document.querySelectorAll('.promo__adv');

adv.forEach(item => {
    item.remove();
});


//============================Добавление фильма=====================

const buttonConfirm = document.querySelector("button");
const inputForm = document.getElementsByTagName("input")[1];
const inputFavFilm = document.getElementsByTagName("input")[2];

const inputBlock = document.getElementById("add");
//console.log(inputForm);

function addElement (event) {
    event.preventDefault();
    let filmName = inputForm.value;

    //длина более 21 символа
    if (filmName.length > 21) {
        filmName = filmName.substr(0, 21) + "...";
    }

    console.log(movieDB.movies[0]);
    movieDB.movies.push(filmName);
    
    console.log(movieDB.movies);
    printFilms(filmArr, filmsBlock[0]);

    if(inputFavFilm.checked) {
        console.log("Выводим любимый фильм");
    }
}
buttonConfirm.addEventListener('click', addElement);



//=================== удалить элемент =====================
function deleteElement (event) {
    //console.log(event.target.parentNode);
    //console.log("Deleted soon");
    let filmDelName = event.target.previousElementSibling.textContent;
    //console.log(filmDelName);
    //console.log();
    // movieDB.movies.forEach(elem => {
    //     if (elem == filmDelName){
    //         elem.splice();
    //     }
    // });

    movieDB.movies.splice(movieDB.movies.indexOf(filmDelName), 1);

    let delElement = event.target.parentNode;
    let delBr = delElement.nextElementSibling;
    delElement.remove();
    delBr.remove();
}










