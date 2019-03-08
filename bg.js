const body = document.querySelector("body");

const IMG_NUM = 3;

function paintImage(imgNum){
    const image = new Image();
    image.src = `img/${imgNum + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom(){
    const num = Math.floor(Math.random() * IMG_NUM);
    return num;
}

function init(){
    const randomNum = genRandom();
    paintImage(randomNum);
}

init();