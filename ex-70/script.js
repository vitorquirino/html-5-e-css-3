const songName = document.getElementById('song-name');
const musica = document.getElementById('audio');
const play = document.getElementById('play')

songName.innerText = 'United In Grief'

let isPlaying = false;

function playSong(){
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    musica.play();

    isPlaying = true;
}

function pauseSong(){
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    musica.pause();

    isPlaying = false
}

function playPauseDecider(){
    if(isPlaying === true){
        pauseSong();
    }
    else{
        playSong();
    }
}


play.addEventListener('click',playPauseDecider);

