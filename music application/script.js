console.log("welcome to Sotify"); 
//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3'); 
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "songs/Desire-Ap-Dhillon.mp3" , filePath: "songs/1.mp3" , coverPath: "cover1.jpg"},
    {songName: "Kahani suno 2.0" , filePath: "songs/2.mp3" , coverPath: "cover1.jpg"},
    {songName: "Kar Har Maidan Fateh" , filePath: "songs/3.mp3" , coverPath: "cover1.jpg"},
    {songName: "Khabar mere Marne ki Sunte hi..." , filePath: "songs/4.mp3" , coverPath: "cover1.jpg"},
    {songName: "Meri Mehoob Quamat hogi" , filePath: "songs/4.mp3" , coverPath: "cover1.jpg"},
]
songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

// audioElement.play();

// handel play/pause click
masterPlay.addEventListener('click' , ()=>{
   if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play(); 
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1; 
    }
    else{
     audioElement.pause(); 
     masterPlay.classList.remove('fa-circle-pause');
     masterPlay.classList.add('fa-circle-play');
     gif.style.opacity = 0; 
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate' ,()=>{
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
   })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-play-circle');
        audioElement.src = `songs/${songindex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause'); 
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=3){
        songIndex = 0
    }
    else{
    songIndex += 1;
    }
        audioElement.src = `songs/${index}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause'); 
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
    songIndex -= 1;
    }
        audioElement.src = `songs/${songindex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause'); 
})
