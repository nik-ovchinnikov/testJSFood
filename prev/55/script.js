// 'use strict';

// console.log("Запрос данных...");

// const req = new Promise(function(resolve, reject){

//     setTimeout(() => {

//         console.log('Подготовка данных...');
//         const product = {
//             name: 'TV',
//             parse: 2000
//         };

//         resolve(product);
//     }, 4000);
// });

// req.then((product) => {
//     return new Promise(function(resolve, reject){
//         console.log("Hello!!! Данные получены");
//         setTimeout(() => {
//             product.status = 'original';
//             console.log(product);
//             // resolve(product);
//             reject();
//         }, 2000);
//    });
// }).then((product) =>{
//     console.log("Всё работает нормально!!!");
//     product.daysLeft = 12;
//     console.log(product);
//     return product;
// }).then((data) => {
//     data.modify = true;
//     console.log(data);
// }).catch(() => {
//    console.error('Произошла ошибка!!!');
// }).finally(() => {
    
//    console.error('Finally!!!');
// });


const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

test(1000).then(() => console.log("1000 ms")); 
test(2000).then(() => console.log("2000 ms")); 

//Ждёт пока выполянятся все промисы из массива
Promise.all([test(1000), test(2000)]).then(() => {
    console.log("Все промиссы из массива выполнены");
});
//ждёт выполнения первого промиса и запускает тело функции
Promise.race([test(1000), test(2000)]).then(() => {
    console.log("Один промисс из массива выполнен");
});
