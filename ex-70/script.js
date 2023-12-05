const songName = document.getElementById('song-name');
const bandName = document.getElementById('band-name')
const musica = document.getElementById('audio');
const cover = document.getElementById('cover');
const play = document.getElementById('play')

const UnitedInGrief ={
    songName : 'United-In-Grief',
    artist : 'kendrick-Lamar',
    file : 'capa-in-grief.jpg'
};

const wannabesedated ={
    songName : 'wanna-be-sedated',
    artist : 'ramones',
    file : 'capa-wanna-be-sedated.jpg'
};

const Mockingbird ={
    songName : 'Mockingbird',
    artist : 'eminem',
    file : 'capa-Mockingbird.jpg'
};

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

