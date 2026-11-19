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


// gifs and menus hidden.
gif.forEach(e=>{
    e.style.display = "none";
});
menu.forEach(e=>{
    e.style.display = "none";
});

//functions to display menu

function display1(){
    if(opt1Menu.style.display == "block"){
        opt1Menu.style.display = "none";
        gif.forEach(e=>{
            e.style.display = "none";
        });
    }
    else{
        opt1Menu.style.display = "block";
        gif.forEach(e=>{
            e.style.display = "block";
        });
    }
}

function display2(){
    if(opt2Menu.style.display == "block"){
        opt2Menu.style.display = "none";
    }
    else{
        opt2Menu.style.display = "block";
    }
}

function display3(){
    if(opt3Menu.style.display == "block"){
        opt3Menu.style.display = "none";
    }
    else{
        opt3Menu.style.display = "block";
    }
}

//Click events for display

opt1.addEventListener("click", display1);
opt2.addEventListener("click", display2);
opt3.addEventListener("click", display3);