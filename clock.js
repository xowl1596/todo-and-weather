const clockContainer = document.querySelector(".clock");
const clockTitle = clockContainer.querySelector("h1");

function fixNum(num){
    return `${num<10 ? `0${num}` : num}`;
}

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${fixNum(hours)}:${fixNum(minutes)}:${fixNum(seconds)}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();