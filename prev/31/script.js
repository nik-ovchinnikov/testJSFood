const btn = document.querySelector('button');
const rtrn = document.getElementById('return');
const body =document.querySelector('body');

// btn.onclick = function () {
//     alert("sdfasdf");
// }
let toggle;



btn.addEventListener('click', (e) => {
    
    //e.target.remove();
});

// rtrn.addEventListener('click', (e) => {
//     rtrn.insertAdjacentHTML("afterend", `<button id="btn" onclick="alert('Click')">Нажми меня</button>`);
// });


//=============================================================
let i = 0;
const deleteElement = (e) => {
    i++;
    console.log(e.target);
    if (i == 1) {btn.removeEventListener('mouseenter', changeColor);}
};

const changeColor = (event) => {
    console.log(event.target);

    if (toggle) {
        event.target.style.backgroundColor = "red";
        toggle = false;
    } else {
        event.target.style.backgroundColor = "blue";
        toggle = true;  
    }
}

btn.addEventListener('click', deleteElement);
btn.addEventListener('mouseenter', changeColor);

//========================отмена поведения браузера ================
const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target);
});

//================Навес на несколько кнопок =========
const btns = document.querySelectorAll('button');

btns.forEach(btn => {
    btn.addEventListener('mouseenter', changeColor, {once: true});
});