let display = document.getElementById("timer");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");


let myEmoji;
document.getElementById("AddMyEmoji").onclick= ()=>{
    myEmoji = document.getElementById("myEmoji").value;
}

let isrunning = false;
let startTime = 0;
let spentTime = 0;
let timerInterval = null;

startBtn.onclick = function(){
    if(!isrunning){
        startTime = Date.now() - spentTime;
        timerInterval = setInterval(runTimer, 1);
        isrunning = true;
    }
}
stopBtn.onclick = function(){
    if(isrunning){
        clearInterval(timerInterval);
        spentTime = Date.now() - startTime;
        isrunning = false;
    }
}
resetBtn.onclick = function(){
    clearInterval(timerInterval);
    spentTime = 0;
    isrunning = false;
    display.innerText = !myEmoji ? `00💖00💖00💖00` : `00${myEmoji}00${myEmoji}00${myEmoji}00`;
}

function runTimer(){
    let currentTime = Date.now();
    spentTime = currentTime - startTime;
    let hours = Math.trunc(spentTime/(1000*60*60)).toString().padStart(2,'0');
    let minutes = Math.trunc(spentTime/(1000*60)%60).toString().padStart(2,'0');
    let seconds = Math.trunc((spentTime/1000)%60).toString().padStart(2,'0');
    let milliseconds = Math.trunc(spentTime%100).toString().padStart(2,'0');
    display.innerText = !myEmoji ? `${hours}💖${minutes}💖${seconds}💖${milliseconds}`
                                : `${hours}${myEmoji}${minutes}${myEmoji}${seconds}${myEmoji}${milliseconds}`;

}


