const btns = document.querySelectorAll("button");

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));

// console.log(btns[1].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));

// console.log(btns[0].classList.toggle('blue')); //удаляет если есть класс, добавляет если нет класса

// if(btns[0].classList.contains('red')) {
//     console.log('red id existing');
// }


btns[1].classList.add('red');
btns[0].addEventListener('click', () => {
    btns[1].classList.toggle('red');
});

const wrapper = document.querySelector('.btn-block');

//==================ДИЛИГИРОВАНИЕ===============
wrapper.addEventListener('click', (event) => {
    //console.dir(event.target);
    if(event.target && event.target.tagName == 'BUTTON'){
        console.log("Hello");
    }
    //matches!!!!
    if(event.target && event.target.matches('button.yellow') ){
        console.log("Hello!!!");
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

