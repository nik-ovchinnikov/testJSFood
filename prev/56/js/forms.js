'use strict';

//forms
window.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    

    const message = {
        loading: '/img/form/spinner.svg',
        success: 'Спасибо! Мы с Вами свяжемся',
        failure: 'Что то пошло не так'

    };

    forms.forEach(item => {
        postData(item);
    });


    
    

    function hideContactWindow () {
        const modalWindow = document.querySelector(".modal");
        modalWindow.style.cssText = "display: none;";
        document.body.style.overflow = '';
    }




    function changeModalWindow (text) {
        
        const statusBlock = document.querySelector('div.modal__status');
        statusBlock.innerHTML = `
            <div class="modal" style="display: block">
                <div class="modal__dialog">
                    <div class="modal__content">
                        <form action="#">
                            <div class="modal__close">&times;</div>
                            <div class="modal__title">${text}</div>
                        </form>
                    </div>
                </div>
            </div>
            `;
    }

    function postData (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.innerHTML = `<img src="${message.loading}" class="spinner"></img>`;
            form.append(statusMessage);

            // const request = new XMLHttpRequest();
            // request.open('POST', 'server.php');



            const formData = new FormData(form);

            //!!!! Заголовки не для JSON записывать не надо!!!
            //request.setRequestHeader('Content-type', 'multipart/form-data');
            

            //====================JSON============================
            // request.setRequestHeader('Content-type', 'application/json');

            // const object = {};
            // formData.forEach(function (value, key) {
            //     object[key] = value;
            // });
            // const json = JSON.stringify(object);
            // request.send(json);
             //===================================================
             
            //request.send(formData);

            fetch('server.php', {
                method: "POST",
                body: formData,
                headers: {
                    'Content-type': 'application/json'
                }
            })
                .then(data => {
                    hideContactWindow ();
                    changeModalWindow("Всё загружено!");

                    //событие на закрытие этой статусной панели после отправки данных 
                        const closeStatusWindow = document.querySelector('.modal__status .modal__close');
                        console.log(closeStatusWindow);
                        const statusWindow = document.querySelector('.modal__status .modal');
                        console.log(statusWindow);
                        closeStatusWindow.addEventListener('click', () => {
                            statusWindow.style.cssText = "display: none;";
                        });
                    //===================================================================

                    

                    console.log(data);
                    statusMessage.textContent = message.success;

                    
                })
                .catch(() => {
                    statusMessage.textContent = message.failure;
                })
                .finally(() => {
                    //очистка формы
                    const inputs = form.querySelectorAll("input");
                    inputs.forEach(elem => {
                        elem.value = '';
                    });

                    const interval = setTimeout(() => {
                        statusMessage.textContent = '';  
                    }, 3000);
                });

            // request.addEventListener('load', () => {
            //     //меняем одно модальное окно, на другое


            //     //после зарузки
            //     if (request.status == 200) {
            //         hideContactWindow ();
            //         changeModalWindow("Всё загружено!");

            //         //событие на закрытие этой статусной панели после отправки данных 
            //             const closeStatusWindow = document.querySelector('.modal__status .modal__close');
            //             console.log(closeStatusWindow);
            //             const statusWindow = document.querySelector('.modal__status .modal');
            //             console.log(statusWindow);
            //             closeStatusWindow.addEventListener('click', () => {
            //                 statusWindow.style.cssText = "display: none;";
            //             });
            //         //===================================================================

                    

            //         console.log(request.response);
            //         statusMessage.textContent = message.success;

            //         const inputs = form.querySelectorAll("input");
            //         inputs.forEach(elem => {
            //             elem.value = '';
            //         });

            //         const interval = setTimeout(() => {
            //             statusMessage.textContent = '';  
            //         }, 3000);
            //     } else {
            //         statusMessage.textContent = message.failure;
            //     }
            // });
        });
    }

    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: "POST",
    //     body: JSON.stringify({name: 'Niki'}),
    //     headers: {
    //         'Content-type': 'application/json'
    //     }
    // })
    //     .then(response => response.json())
    //     .then(json => console.log(json));
});