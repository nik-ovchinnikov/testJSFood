/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// let numberOfFilms;
// numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', 0);
// console.log(numberOfFilms);

// let personalMovieDB = {
//      coount: numberOfFilms,
//      movies: {},
//      actors: {},
//      genres: [],
//      privat: false
// };

// console.log(personalMovieDB);

// let filmName = prompt('Один из последних просмотренных фильмов?');
// let filmRate =  prompt('На сколько оцените его?');

// let movies = {
//     [filmName]: filmRate
// };
// console.log(movies);

const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");







