/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

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

const adv = document.getElementsByClassName('promo__adv');

console.log(adv);

const arr = ['sdfsd', 'sadfasd', 'sadfew1'];

for (let i = 0; i < adv.length; i++) {
    //console.log(advertise[i]);
    adv[i].remove();
}

//   adv.forEach(item => {
//           console.log(item);
//       }
//   );

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

const filmList = document.getElementsByClassName("promo__interactive-item");



const listLength = filmList.length;
for (let j = 0; j <  listLength; j++) {
    //console.log(filmList[j]);
    filmList[0].remove();
}
const filmsBlock = document.getElementsByClassName("promo__interactive-list");

let filmArr = movieDB.movies;

for (let j = 0; j <  filmArr.length; j++) {
    console.log(filmArr[j]);
    filmsBlock[0].insertAdjacentHTML("afterend", `<li class='promo__interactive-item'> ${filmArr.length - j}. ${filmArr[filmArr.length - 1 - j]}</li><br>`);
    //filmList[0].remove();
}





