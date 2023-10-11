let tela = document.getElementById("tela");

let cfg = tela.getContext("2d");



let Circle = {
    x : 250,
    y : 250,
    raio : 100,
    inicio : 0,
    fim : 0,
    antiHor : true,
}
    

function drawCircle (C){

    cfg.beginPath()
    cfg.rect(0,0, 500,500)
    cfg.fillStyle = "beige"
    cfg.fill()





    cfg.beginPath();
    cfg.strokeStyle = "red";
    cfg.fillStyle = "blue";

    cfg.arc( C.x, C.y, C.raio, C.inicio, C.fim, C.antiHor);

    cfg.fill()
    cfg.stroke();
}

setInterval (function(){

    if(Circle.fim < 2 * Math.PI){
        Circle.fim += 0.3
        Circle.x += 5
    }

    drawCircle(Circle)


},50)




