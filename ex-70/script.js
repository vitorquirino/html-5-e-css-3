const songName = document.getElementById('song-name');
const musica = document.getElementById('audio');
const play = document.getElementById('play')

songName.innerText = 'United In Grief'

function playSong(){
    musica.play();
}

play.addEventListener('click',playSong);

