console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('song2/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let song2 = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "song2/1.mp3", coverPath: "cover1/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "song2/2.mp3", coverPath: "cover1/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "song2/3.mp3", coverPath: "cover1/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "song2/4.mp3", coverPath: "cover1/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "song2/5.mp3", coverPath: "cover1/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "song2/2.mp3", coverPath: "cover1/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "song2/2.mp3", coverPath: "cover1/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "song2/2.mp3", coverPath: "cover1/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "song2/2.mp3", coverPath: "cover1/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "song2/4.mp3", coverPath: "cover1/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = song2[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = song2[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `song2/${songIndex+1}.mp3`;
        masterSongName.innerText = song2[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `song2/${songIndex+1}.mp3`;
    masterSongName.innerText = song2[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `song2/${songIndex+1}.mp3`;
    masterSongName.innerText = song2[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
