const songName = document.getElementById('song-name');
const bandName = document.getElementById('band-name')
const musica = document.getElementById('audio');
const cover = document.getElementById('cover');
const play = document.getElementById('play');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const currentProgress = document.getElementById('current-progress');





const Mockingbird ={
    songName : 'Mockingbird',
    artist : 'eminem',
    file : 'Mockingbird'
};


const UnitedInGrief ={
    songName : 'United-In-Grief',
    artist : 'kendrick-Lamar',
    file : 'United-in-Grief'
};

const wannabesedated ={
    songName : 'wanna-be-sedated',
    artist : 'ramones',
    file : 'wanna-be-sedated'
};





let isPlaying = false;
const playList = [UnitedInGrief, wannabesedated,Mockingbird];
let index = 0;

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

function initializeSong(){
    cover.src = `img/${playList[index].file}.jpg`;
    musica.src = `songs/${playList[index].file}.mp3`;
    songName.innerText = playList[index].songName;
    bandName.innerText = playList[index].artist;
}

function previousSong(){
    if(index === 0){
        index = playList.length - 1
    }
    else{
        index -= 1;
    }
    initializeSong();  
    playSong();
}


function nextSong(){
    if(index === playList.length - 1){
        index = 0;
    }
    else{
        index += 1;
    }
    initializeSong();  
    playSong();
}

function updateProgressBar(){
    const barWidth = (musica.currentTime/musica.duration)*100;
    currentProgress.style.setProperty('--progress', `${barWidth}%`); 
}
updateProgressBar()




initializeSong();




play.addEventListener('click',playPauseDecider);
previous.addEventListener('click',previousSong);
next.addEventListener('click',nextSong);
songName.addEventListener('timeupdate',updateProgressBar)

