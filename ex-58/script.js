let jogador = document.getElementById("jogador");

let xInicial = 0;
let yInicial = 0;


function moverjogadorpara(x,y) {

    let posX = x + "px";
    let posY = y + "px";


    jogador.style.top = posX;
    jogador.style.left = posY;

}

setInterval(function(){

    moverjogadorpara(xInicial++, yInicial++)

}, 24)