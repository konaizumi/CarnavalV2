
var myVideo=document.getElementById("video1"); 
var myAudio=document.getElementById("audio1"); 
var videoContainer=document.getElementById("videoContainer"); 
var audioContainer=document.getElementById("audioContainer"); 
var listV = document.getElementsByClassName('list-video')[0].getElementsByTagName('li');
var listA = document.getElementsByClassName('list-audio')[0].getElementsByTagName('li');

var pathV = 'assets/videos/';
var pathA = 'assets/audios/';

videoContainer.style.display= 'block';

for(var li in listV){
    
  listV[li].onclick = function (e){
    if(!isVideo()){
      videoContainer.style.display= 'block';
      audioContainer.style.display= 'none';
    }
    console.log(e.target.getAttribute('data-src'));
    myVideo.src = pathV + e.target.getAttribute('data-src');
  };
}

for(var lia in listA){
    
  listA[lia].onclick = function (e){
    if(!isAudio()){
      videoContainer.style.display= 'none';
      audioContainer.style.display= 'block';
    }
    console.log(e.target.getAttribute('data-src'));
    myAudio.src = pathA + e.target.getAttribute('data-src');
  };
}

function isVideo(){
  return videoContainer.style.display != 'none';
}

function isAudio(){
  return audioContainer.style.display != 'none';
}

function playPause()
{ 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 