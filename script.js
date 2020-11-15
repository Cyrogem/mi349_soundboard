
var b1 = document.getElementById("button1");
var b2 = document.getElementById("button2");
var b3 = document.getElementById("button3");
var b4 = document.getElementById("button4");
var hoverAudio = new Audio("blip.wav");

b1.addEventListener('mouseenter',() => {
    hoverAudio.pause();
    hoverAudio.currentTime = 0;
    hoverAudio.play();
})
b2.addEventListener('mouseenter',() => {
    hoverAudio.pause();
    hoverAudio.currentTime = 0;
    hoverAudio.play();
})
b3.addEventListener('mouseenter',() => {
    hoverAudio.pause();
    hoverAudio.currentTime = 0;
    hoverAudio.play();
})
b4.addEventListener('mouseenter',() => {
    hoverAudio.pause();
    hoverAudio.currentTime = 0;
    hoverAudio.play();
})

b1.addEventListener('click',() => {
    hoverAudio.pause();
    Audio("cheering.wav").play();
})
b2.addEventListener('click',() => {
    hoverAudio.pause();
    Audio("boo.wav").play();
})
b3.addEventListener('click',() => {
    hoverAudio.pause();
    Audio("gong.wav").play();
})
b4.addEventListener('click',() => {
    hoverAudio.pause();
    Audio("boing_x.wav").play();
})



/*
function round(num, places){
    return Math.round(num * Math.pow(10,places))/Math.pow(10,places);
}

function Update(){
    time += msFrequency;
    if(time % 1 == 0) {
        buttonElement.textContent = time.toString();
        buttonSecret.disabled = false;
        var think = time / 1000;
        var actual = Math.round(performance.now()) / 1000
        buttonSecret.textContent = 
            "I think it's been " + think + "s\nBut it's actually been "
             + actual + "s\nI am " + round((actual - think),2) + "s behind reality";

    }
    console.log(Math.round(performance.now()) + " " + time / 1000);
}

var buttonElement = document.getElementById('my-first-button');
var buttonSecret = document.getElementById('secret-button');
var time = 0;
var msFrequency = 100;

buttonElement.addEventListener('click',function (){
    console.log("The button was pressed!");
})
buttonSecret.disabled = true;

setInterval(Update, msFrequency);
*/
