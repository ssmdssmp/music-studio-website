"use strict"

let line =document.querySelector(".line");

window.onscroll = () =>{
    let pos = window.scrollY - 800;
    line.style.right =`${pos}px`
}
