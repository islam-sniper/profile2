let projects = document.querySelector(".p");
let skills = document.querySelector(".s");
let body =document.querySelector("body");
projects.addEventListener("click",()=>{
    document.querySelector("#projects").style.display ="grid"
    document.querySelector("#skills").style.display ="none"
    projects.style.backgroundColor= "var(--txt-white)"
    skills.style.backgroundColor= "var(--txt-light)"
})
skills.addEventListener("click",()=>{
    document.querySelector("#skills").style.display ="grid"
    document.querySelector("#projects").style.display ="none"
    skills.style.backgroundColor= "var(--txt-white)"
    projects.style.backgroundColor= "var(--txt-light)"
})
let sun = document.querySelector(".sun");
let moon = document.querySelector(".moon");
let themeBtn =document.querySelector("#themeBtn");
sun.style.display ="none"
moon.addEventListener("click",()=>{
    body.classList.toggle("theme");
    sun.style.display ="block";
    moon.style.display ="none";
})
sun.addEventListener("click",()=>{
    body.classList.remove("theme");
    sun.style.display ="none";
    moon.style.display ="block";
})