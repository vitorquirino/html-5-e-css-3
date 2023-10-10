let tela = document.getElementById("tela");

let cfg = tela.getContext("2d");

let x = 250;
let y = 250;
let raio = 100;

let inicio = 0;
let fim = 2 * Math.PI;

cfg.beginPath();
cfg.strokeStyle = "red";
cfg.fillStyle = "blue";

cfg.arc( x, y, raio, inicio, fim);

cfg.fill()
cfg.stroke();
