const songName = document.getElementById('song-name');
const bandName = document.getElementById('band-name')
const musica = document.getElementById('audio');
const cover = document.getElementById('cover');
const play = document.getElementById('play');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const CurrentProgress = document.getElementById('current-progress');
const progresscontainer = document.getElementById('progress-container');
const shuffleButton = document.getElementById('shuffle');





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
let isShuffled = false;
const originalplayList = [UnitedInGrief, wannabesedated,Mockingbird];
let sortedplayList = [...originalplayList];
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
    cover.src = `img/${sortedplayList[index].file}.jpg`;
    musica.src = `songs/${sortedplayListplayList[index].file}.mp3`;
    songName.innerText = sortedplayListplayList[index].songName;
    bandName.innerText = sortedplayListplayList[index].artist;
}

function previousSong(){
    if(index === 0){
        index = sortedplayList.length - 1
    }
    else{
        index -= 1;
    }
    initializeSong();  
    playSong();
}


function nextSong(){
    if(index === sortedplayListplayList.length - 1){
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
    CurrentProgress.style.setProperty('--progress',`${barWidth}%`) 
}

function jumpTo(event){
    const width = progresscontainer.clientWidth;
    const clickPosition = event.offsetX;
    const jumpToTime = (clickPosition/width) * musica.duration;
    musica.currentTime = jumpToTime;
}

function shuffleButtonClicked(){
    if(isShuffled === false){
        isShuffled = true;
        shuffleArray();
    }
}


initializeSong();


play.addEventListener('click',playPauseDecider);
previous.addEventListener('click',previousSong);
next.addEventListener('click',nextSong);
musica.addEventListener('timeupdate',updateProgressBar)
progresscontainer.addEventListener('click', jumpTo)
shuffleButton.addEventListener('click',shuffleButtonClicked)
