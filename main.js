"use strict";

let profiles = document.querySelectorAll(".pic-wrapper");
//the info window:
let info = document.getElementById("info");
//info windows arrow-pointer:
let pointer = document.getElementById("pointer");

// Those are the h3 and p-Elements within the info window:
let jobtitle = document.querySelector("#info-con h3");
let skill_1 = document.querySelector("#info-con p:nth-child(2)");
let skill_2 = document.querySelector("#info-con p:nth-child(3)");
let skill_3 = document.querySelector("#info-con p:nth-child(4)");

//the attributes of the employees that are beeing used to render the info texts:
let susan = {
    jobtitle: "Frontend - Developer",
    skill1: "JavaScript",
    skill2: "Angular",
    skill3: "React",
}

let jaden = {
    jobtitle: "Backend - Developer",
    skill1: "JavaScript",
    skill2: "Python",
    skill3: "Node.js",
}

//everyprofile gets an enter-, move- and leave-event:
profiles.forEach(pro => {

    pro.addEventListener("mouseenter", e => {
        info.style.opacity = "1";
        //resets potential previous classes:
        pointer.classList.remove("left");
        pointer.classList.remove("right");
        
        //if the info window would create an overflow, it gets rendered left of the mouse:
        e.clientX + 100 + info.clientWidth > innerWidth ?
        pointer.classList.add("right") : pointer.classList.add("left");

        //depending on what profile you hover, show its particular attributes of the employee:
        e.target.classList.contains("susan") ? set_info(susan) : set_info(jaden);
    });

    //makes sure the info window follows the mouse while moving:
    pro.addEventListener("mousemove", e => {
        info.style.top = `${(e.clientY - (info.clientHeight / 2))}px`;

        pointer.classList.contains("left") ?
        info.style.left = `${e.clientX + 50}px` :
        info.style.left = `${e.clientX - (info.clientWidth + 50)}px`;
    });

    //makes the info window invisible when mouse is leaving:
    pro.addEventListener("mouseleave", () => {
        info.style.opacity = "0";
    });
});

//sets the info windows attrivutes to certain values:
function set_info(obj) {
    jobtitle.innerText = obj.jobtitle;
    skill_1.innerText = obj.skill1;
    skill_2.innerText = obj.skill2;
    skill_3.innerText = obj.skill3;
}