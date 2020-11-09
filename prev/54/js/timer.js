'use strict';

window.addEventListener('DOMContentLoaded', () => {


    //const timerBlock = document.getElementsByClassName("timer");
    const dayBlock = document.getElementById("days");
    const hourBlock = document.getElementById("hours");
    const minBlock = document.getElementById("minutes");
    const secBlock = document.getElementById("seconds");
    //console.log(dayBlock);


    function getTimeForTimer() {

        //console.log(timerBlock);
        const now = new Date();
        const actionDate = new Date("2020-09-20");
        const differ = (actionDate - now);
        let timerArr = [];

        //console.log(differ);
        let days = Math.trunc(differ / ( 1000 * 24 * 60 * 60));
        let daysRes = differ % ( 1000 * 24 * 60 * 60);
        timerArr.push(days);

        let hours = Math.trunc(daysRes / ( 1000 * 60 * 60));
        let hoursRes =daysRes % ( 1000 * 60 * 60);
        timerArr.push(hours);

        let minutes = Math.trunc(hoursRes / ( 1000 * 60));
        let minRes = hoursRes % ( 1000 * 60);
        timerArr.push(minutes);

        let seconds = Math.trunc(minRes / 1000);
        timerArr.push(seconds);
        
        return timerArr;
        //console.log(timerArr);
    }    


    let id = setTimeout(function setTimeForAction (timeArr) {
        
        let resArr = getTimeForTimer();
        dayBlock.textContent = resArr[0];
        hourBlock.textContent = resArr[1];
        minBlock.textContent = resArr[2];
        secBlock.textContent = resArr[3];

       
        id = setTimeout(setTimeForAction, 1000);
    });

    

    

});