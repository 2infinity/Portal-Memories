//Variables 
const timeStamp = document.getElementById("timeStamp");
const time = document.querySelectorAll(".time");
const gif = document.querySelectorAll('.gif');
const menu = document.querySelectorAll(".menu");
const opt1Menu = document.getElementById("opt1Menu");
const opt2Menu = document.getElementById("opt2Menu");
const opt3Menu = document.getElementById("opt3Menu");
const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const opt3 = document.getElementById("opt3");
const exitBtns = document.querySelectorAll(".exitBtn");
const haley = document.getElementById("haley");


//Time Function
function timeywimey(){
    const now = new Date();
    let hour = now.getHours();
    hour = hour%12;
    hour = hour.toString().padStart(2, "0");
    const mid = hour>=12?"PM":"AM";
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const timeString = `${hour}:${minutes}:${seconds} ${mid}`;
    time.forEach(e=>{
        e.textContent = timeString;
    });
}
setInterval(timeywimey,1000);
// End of Time


// menus hidden.
menu.forEach(e=>{
    e.style.display = "none";
});


//function to play music 
function haleyPlay(){
    if(haley.play()){
        console.log("I can't help falling in love with you. <3");
    }
    else{
        haley.play();
    }
}

//functions to display menu

function display1(){
    if(opt1Menu.style.display == "block"){
        opt1Menu.style.display = "none";
        document.exitFullscreen();
        haley.pause()
        haley.currentTime = 0;
    }
    else{
        opt1Menu.style.display = "block";
        opt1Menu.requestFullscreen();
        haley.currentTime = 0;
        haleyPlay();
        setInterval(haleyPlay, 174000);
    }
}

function display2(){
    if(opt2Menu.style.display == "block"){
        opt2Menu.style.display = "none";
        document.exitFullscreen();
    }
    else{
        opt2Menu.style.display = "block";
        opt2Menu.requestFullscreen();
    }
}

function display3(){
    if(opt3Menu.style.display == "block"){
        opt3Menu.style.display = "none";
        document.exitFullscreen();
    }
    else{
        opt3Menu.style.display = "block";
        opt3Menu.requestFullscreen();
    }
}

//Click events for display

opt1.addEventListener("click", display1);
opt2.addEventListener("click", display2);
opt3.addEventListener("click", display3);

//Exit Buttons to hide display

exitBtns.forEach(e=>{
    e.addEventListener("click", ()=>{
        if(e.id=="exitBtn2"){
            display2();
        }
        else if(e.id=="exitBtn3"){
            display3();
        }
        else if(e.id=="exitBtn1"){
            display1();
        }
    });
});
