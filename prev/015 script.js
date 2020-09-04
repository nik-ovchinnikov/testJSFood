/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


// for (let i = 0; i < numberOfFilms; i ++) {
//     let filmName = prompt('Один из последних просмотренных фильмов?');
//     if (filmName.length < 5 || filmName.length > 50){
//         i--;
//         alert("Неверный формат ввода. Введите заново. Длина не более 50 символов. Строка не должна быть пустой");
//         continue;
//     }
//     let filmRate = +prompt('На сколько Вы его оцените?');
//     if (filmRate < 0 || filmRate > 10){
//         i--;
//         alert("Неверный формат ввода. Введите заново. Нужно число от 0 до 10.");
//         continue;
//     }
//     personalMovieDB.movies[filmName] = filmRate;
// }


// let i = 0;
// while (i < numberOfFilms) {
//     let filmName = prompt('Один из последних просмотренных фильмов?');
//     if (filmName.length < 5 || filmName.length > 50){
       
//         alert("Неверный формат ввода. Введите заново. Длина не более 50 символов. Строка не должна быть пустой");
//         continue;
//     }
//     let filmRate = +prompt('На сколько Вы его оцените?');
//     if (filmRate < 0 || filmRate > 10){
       
//         alert("Неверный формат ввода. Введите заново. Нужно число от 0 до 10.");
//         continue;
//     }
//     personalMovieDB.movies[filmName] = filmRate;
//     i++;
// }

let i = 0;
 do {
    let filmName = prompt('Один из последних просмотренных фильмов?');
    if (filmName.length < 5 || filmName.length > 50){
       
        alert("Неверный формат ввода. Введите заново. Длина не более 50 символов. Строка не должна быть пустой");
        continue;
    }
    let filmRate = +prompt('На сколько Вы его оцените?');
    if (filmRate < 0 || filmRate > 10){
       
        alert("Неверный формат ввода. Введите заново. Нужно число от 0 до 10.");
        continue;
    }
    personalMovieDB.movies[filmName] = filmRate;
    i++;
} while (i < numberOfFilms);

if(personalMovieDB.count < 10){
    alert("Просмотрено довольно мало фильмов.");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы - классический зритель.");
} else if (personalMovieDB.count >= 30){
    alert("Вы - киноман.");
} else {
    alert("Произошла ошибка!");
}

console.log(personalMovieDB);

// Код возьмите из предыдущего домашнего задания