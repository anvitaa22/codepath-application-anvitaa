// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var pattern = [2, 5, 4, 3, 2, 1, 5, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var mistakes = 0;
var seconds = 15;

function genPattern(){
  for (let i=0; i<8; i++){
    let randInt = Math.floor(Math.random() * Math.floor(5)) + 1;
    pattern[i] = randInt;
  }
}

function startGame(){
    mistakes = 0;
    clueHoldTime = 1000;
    //initialize game variables
    genPattern();
    progress = 0;
    gamePlaying = true;
  
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
    timeLimit();
}

function stopGame(){
    //initialize game variable
    gamePlaying = true;
  
    // swap the Start and Stop buttons
    document.getElementById("stopBtn").classList.add("hidden");
    document.getElementById("startBtn").classList.remove("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 300,
  3: 340,
  4: 469,
  5: 220
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  clueHoldTime = clueHoldTime - 100;
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}
var secondsInterval;

function timeLimit(){
  seconds = 15;
  secondsInterval = setInterval(startTimer, 1000);
  function startTimer(){
    seconds = seconds - 1;
    if(seconds == 0){
      clearInterval(secondsInterval);
      loseGame();
    }
    if(seconds < 10){
      document.getElementById("timer").innerHTML = "Time Left: 00:0"+seconds
    }
    else{
      document.getElementById("timer").innerHTML = "Time Left: 00:"+seconds
    }
  }

}



function guess(btn){
  document.getElementById("timer").innerHTML = "Time Left: 00:15";
  clearInterval(secondsInterval);
  console.log("user guessed: " + btn);
  timeLimit();
  if(!gamePlaying){
    return;
  }

  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        winGame();
        clearInterval(secondsInterval);
      }else{
        progress++;
        playClueSequence();
      }
    }else{
      guessCounter++;
    }
  }
  else{
    mistakes++;
    if(mistakes == 3){
      loseGame();
      clearInterval(secondsInterval);
    }
    else{
      playClueSequence();
    }
  }
}
