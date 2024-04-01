console.log("welcome")
//imgindex
let imgindex=0;
//songindex
let songIndex = 0;
//Audio
let audioElement = new Audio('song/1.mp3');
//main player
let mainBtn = document.getElementById('mainBtn');
//progressbar
let progressbar = document.getElementById('progressbar');
//song name
let masterSongName = document.getElementById('masterSongName');
//img
let imgg = document.getElementById('imgg');
//connect to html class's playlist songs
let songItems = Array.from(document.getElementsByClassName('sonng'));

let songs = [
    {songName: "Gulabi sadi", filePath: "song/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Yeh Jawani Teri",filePath: "song/2.mp3", coverPath: "cover/2.jpg"},
    {songName: "Dremum Wakepum",filePath: "song/3.mp3", coverPath: "cover/3.jpg"},
    {songName: "Dhoom Taana",filePath: "song/4.mp3", coverPath: "cover/4.jpg"},
    {songName: "Ek Do Teen", filePath: "song/5.mp3", coverPath: "cover/5.jpg"},
    {songName: "Saat Samundar Paar", filePath: "song/6.mp3", coverPath: "cover/6.jpg"},
    {songName: "Balam pichkari",filePath: "song/7.mp3", coverPath: "cover/7.jpg"},
    {songName: "Desi Girl", filePath: "song/8.mp3", coverPath: "cover/8.jpg"},
    {songName: "Billo Rani",filePath: "song/9.mp3", coverPath: "cover/9.jpg"},
    {songName: "Hawa Hawai 2.0",filePath: "song/10.mp3", coverPath: "cover/10.jpg"},
    {songName: "London Thumakda", filePath: "song/11.mp3", coverPath: "cover/11.jpg"},
    {songName: "Kabhi Kabhi Aditi ", filePath: "song/12.mp3", coverPath: "cover/12.jpg"},
    {songName: "Lover", filePath: "song/13.mp3", coverPath: "cover/13.jpg"},
    {songName: "Harleys in Hawaii", filePath: "song/14.mp3", coverPath: "cover/14.jpg"},
    {songName: "Perfect", filePath: "song/15.mp3", coverPath: "cover/15.jpg"},
    {songName: "Shameless", filePath: "song/16.mp3", coverPath: "cover/16.jpg"},
    {songName: "Untill i found you", filePath: "song/17.mp3", coverPath: "cover/17.jpg"},
    {songName: "Go Down Deh", filePath: "song/18.mp3", coverPath: "cover/18.jpg"},
]

// Handle play/pause click
// Handle play/pause click
mainBtn.addEventListener('click', ()=>{
    
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        mainBtn.classList.remove('fa-play-circle');
        mainBtn.classList.add('fa-pause-circle');
     
    }
    else{
        audioElement.pause();
        mainBtn.classList.remove('fa-pause-circle');
         mainBtn.classList.add('fa-play-circle');
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    progressbar.value = progress;
})

progressbar.addEventListener('change', ()=>{
    audioElement.currentTime = progressbar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('playsong')).forEach((element)=>{
        
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('playsong')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `song/${songIndex + 1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            imgg.src = `cover/${songIndex + 1}.jpg`;
            audioElement.currentTime = 0;
            audioElement.play();

            mainBtn.classList.remove('fa-play-circle');
            mainBtn.classList.add('fa-pause-circle');
        } else {
            audioElement.pause();
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
        }
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=18){
        songIndex = 0;
        imgindex=0;
    }
    else{
        songIndex += 1;
        imgindex+=1;
    }
    imgg.src= `cover/${songIndex+1}.jpg`;
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    mainBtn.classList.remove('fa-play-circle');
    mainBtn.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
        imgindex-=1;
    }
    imgg.src= `cover/${songIndex+1}.jpg`;
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    mainBtn.classList.remove('fa-play-circle');
    mainBtn.classList.add('fa-pause-circle');
})
document.getElementById('vol').addEventListener('click', ()=>{
    
    if (ismuted === true) {
        audioElement.muted = false;
        ismuted = false;
        m.innerText="mute";
        vol.classList.remove('fa-volume-mute');
        vol.classList.add('fa-volume-up');
    
    } else {
        audioElement.muted = true;
        ismuted = true;
        m.innerText="unmute";
    
        vol.classList.remove('fa-volume-up');
        vol.classList.add('fa-volume-mute');
    
    
    }})

    
    volumeBar.addEventListener('input', function(){ 
        let volu= this.value;
        audioElement.volume=volu/100;
        console.log('Volume adjusted to:',volu);
    });