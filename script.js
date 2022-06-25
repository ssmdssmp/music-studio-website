"use strict"



let line =document.querySelector(".line");

window.onscroll = () =>{
    let pos = window.scrollY - 800;
    line.style.right =`${pos}px`
};

let slider = document.querySelector('.slider'),
    activeSlide = document.querySelector('#active'),
    rightSlide = document.querySelector('#right'),
    leftSlide = document.querySelector('#left'),
    slides = [leftSlide,activeSlide,rightSlide],
    next = document.querySelector('.slider-next'),
    prev  =document.querySelector('.slider-prev');

for(let i = 0; i<3; i++){
    slides[i].style.backgroundImage = `url('assets/s${i+1}.png')`;
};











next.addEventListener('click', ()=>{
   let rightSlide = document.querySelector('#right');
   let leftSlide = document.querySelector('#left');
   let activeSlide = document.querySelector('#active');
        rightSlide.animate([{right:'25%',height:'68%',width:'50%'}],{duration:500,});
        activeSlide.animate([{right:'80%', height:'50%',width:'30%'}],{duration:500,});//,fill: 'forwards'
        leftSlide.animate([{left:'-50%'}],{duration:500,});
        
    setTimeout(() => {
        rightSlide.setAttribute('id', 'active');
        activeSlide.setAttribute('id','left');
        leftSlide.setAttribute('id','right');
        // rightSlide.setAttribute('id','active');
        // leftSlide.remove();
        // slider.append(leftSlide);
        // rightSlide.style.backgroundImage = leftSlide.style.backgroundImage;
        // // leftSlide.setAttribute('id','right');
        // activeSlide.setAttribute('id','left');
     
    },499);
    setTimeout(() => {
        // leftSlide.style.left ='60%';
        // leftSlide.style.right ='-10%';
        leftSlide.remove();
        
        slider.append(leftSlide);
    }, 500);
console.log(rightSlide);
    });
prev.addEventListener('click', () =>{
    let rightSlide = document.querySelector('#right');
    let leftSlide = document.querySelector('#left');
    let activeSlide = document.querySelector('#active');
         rightSlide.animate([{right:'-50%'}],{duration:500,});
         activeSlide.animate([{right:'-10%', height:'50%',width:'30%'}],{duration:500,});//,fill: 'forwards'
         leftSlide.animate([{left:'25%',height:'68%',width:'50%'}],{duration:500,});
         
     setTimeout(() => {
         rightSlide.setAttribute('id', 'left');
         activeSlide.setAttribute('id','right');
         leftSlide.setAttribute('id','active');
         // rightSlide.setAttribute('id','active');
         // leftSlide.remove();
         // slider.append(leftSlide);
         // rightSlide.style.backgroundImage = leftSlide.style.backgroundImage;
         // // leftSlide.setAttribute('id','right');
         // activeSlide.setAttribute('id','left');
      
     },499);
     setTimeout(() => {
         // leftSlide.style.left ='60%';
         // leftSlide.style.right ='-10%';
         leftSlide.remove();
         
         slider.append(leftSlide);
     }, 500);
 console.log(rightSlide);
});












let dotDesk = document.querySelectorAll('.equip-dot-desk'),
    dot = document.querySelectorAll('.equip-dot'),
    equipSection = document.querySelector('.equip');

// dot.addEventListener('mouseenter',() =>{
// dotDesk.style.transition ='1s all';
// dotDesk.style.opacity = '100%';
// });
// dot.addEventListener('mouseout',() =>{
// dotDesk.style.opacity = '0%';
// });
let dotAdam =     document.getElementById('adam'),
    dotDeskAdam = dotAdam.firstChild.nextSibling.nextSibling.nextSibling,
    dotApolo =document.getElementById('apolo'),
    dotDeskApolo = dotApolo.firstChild.nextSibling.nextSibling.nextSibling,
    dotMic = document.getElementById('mic'),
    dotDeskMic =dotMic.firstChild.nextSibling.nextSibling.nextSibling,
    dotZhivchik = document.getElementById('zhivchik'),
    dotDeskZhivchik = dotZhivchik.firstChild.nextSibling.nextSibling.nextSibling;
    var deskArr = [dotDeskAdam, dotDeskApolo, dotDeskMic, dotDeskZhivchik];
function showDesk(desk){
desk.style.display = 'flex';
desk.style.opacity = '100%';
}
    dotAdam.addEventListener('click',() => {
        showDesk(dotDeskAdam);
    });
    dotApolo.addEventListener('click',() =>{
        showDesk(dotDeskApolo);
    });
    dotMic.addEventListener('click',() =>{
        showDesk(dotDeskMic);
    });
    dotZhivchik.addEventListener('click',() => {
        showDesk(dotDeskZhivchik);
    });
equipSection.addEventListener('click',(e) =>{
let target = e.target;
if (target != dotAdam && target != dotApolo && target != dotMic && target != dotZhivchik && target != ADadam && target != ADapolo && target !=ADmic && target !=ADzhivchik){
    deskArr.forEach(item =>{
        item.style.display = 'none';
        item.style.opacity = '0%';
    });
}
});
// let i = 8;
// let animDot = document.querySelector('.animated-dot');
// animDot.style.transition ='1s all';
// function animatedDot(){
//     if(i<32 && i>=8){
//        let expand = setInterval(() =>{
//             i++;
//             animDot.style.width =`${i}px`;
//             animDot.style.height =`${i}px`;
//         },100);
//     }
//     if (i>31 && i>8){
//         clearInterval(expand);
//         let small = setInterval(()=>{
//             i--;
//             animDot.style.width = `${i}px`;
//             animDot.style.height = `${i}px`;
//         });
//     }
//     console.log(i);
// };
// setInterval(()=>{
//     animatedDot();
// },100);
let animDots = document.querySelectorAll('.animated-dot');
animDots.forEach(item =>{
    item.animate([
        {transform: 'scale(1.5)'},
        {transform:'scale(3.5)'},
        {transform: 'scale(1.5)'}
    ],{duration:3000,iterations: Infinity});

});
// let ADmic = document.querySelector('')
let ADmic = document.querySelector('#mic').childNodes[1],
    ADapolo = document.querySelector('#apolo').childNodes[1],
    ADzhivchik =document.querySelector('#zhivchik').childNodes[1],
    ADadam =document.querySelector('#adam').childNodes[1];
ADmic.addEventListener('click',()=>{
showDesk(dotDeskMic);
console.log('wtfwtf');
});