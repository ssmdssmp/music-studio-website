"use strict"

let line =document.querySelector(".line");

window.onscroll = () =>{
    let pos = window.scrollY - 800;
    line.style.right =`${pos}px`
}

const   slides = document.querySelectorAll('.slider-item'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current'),
        prev = document.querySelector('.slider-prev'),
        next = document.querySelector('.slider-next'),
        slidesWrapper = document.querySelector('.slider'),
        slidesField = document.querySelector('.slider-inner'),
        images = document.querySelectorAll('.slider-item img'),
        width = window.getComputedStyle(slidesWrapper).width,
        active = false;
let     slideIndex =  1;
let     offset = 0;
let     newSlide = document.createElement('div');
newSlide.classList.add('slider-item');
let slidesArray = ['assets/s1.png','assets/s2.png','assets/s3.png','assets/s4.png'];
slidesArray.forEach(item =>{
slidesField.innerHTML += `<div class="slider-item"><img src=${item} alt=""></div>`;
});
slidesField.style.width = 100 * slidesArray.length +5 + '%';
// slidesArray.forEach(slide =>{
//     slide.style.width = width;
// });
slidesArray.push(`${slidesArray[1]}`);
slidesArray.shift(1);
console.log(slidesArray);
function pushAndAppend (n){
   if(n >= 3){
    slidesArray.push(slidesArray[n-2]);
    slidesArray.slice(2);
    slidesField.append(newSlide);
    newSlide.style.width = '1000px';
    newSlide.style.height = '1000px';
   } else {
       console.log('no');
   }
};
next.addEventListener('click', () =>{
    if (offset === -2640){
        offset = 0;
        slideIndex = 1;
        // activeSlide();
        // slides[slideIndex-1].style.opacity = 1;
        // images[slideIndex-1].style.height = '600px';
        
    } else{
        offset += (+width.slice(0,width.length-2) * (slides.length -1))-80;
        slideIndex++;
       pushAndAppend(slideIndex);
        //  activeSlide();
        // slides[slideIndex-1].style.opacity = 1;
        // images[slideIndex-1].style.height = '600px';
    
    }
    slidesField.style.transform = `translateX(${offset}px)`;
    console.log(slideIndex);
    console.log(slidesArray);
    // console.log(slidesField.style.width);
});
prev.addEventListener('click', () =>{
if(offset === 0){
    offset = -2640;
    slideIndex = 4;
} else{
    offset -= +width.slice(0,width.length-2) * (slides.length -1)-80;
    slideIndex--;
}
slidesField.style.transform = `translateX(${offset}px)`;
console.log(slideIndex);
});
// function activeSlide(){
//     slides.forEach(item => {
//         item.style.opacity = 0.3;
//     });
//     images.forEach(item => {
//         item.style.height = '300px';
//     })
// }
// next.addEventListener('click', () => {
//     console.log(slidesField.style.width);
    
        
      
        
//     }
//     slidesField.style.transform = `translateX(-${offset}px)`;
//     console.log(slideIndex);
// });
// prev.addEventListener('click', () => {

//     if(offset == 0) {
//         (offset = +width.slice(0,width.length-2) * (slides.length-1));
//         slideIndex = slides.length;
//         activeSlide();
//         slides[slideIndex-1].style.opacity = 1;
//         images[slideIndex-1].style.height = '600px';
//     } else{
//         offset -= +width.slice(0,width.length-2) * (slides.length -3);
//         slideIndex = slideIndex -1;
//         activeSlide();
//         slides[slideIndex-1].style.opacity = 1;
//         images[slideIndex-1].style.height = '600px';
//     }
//     slidesField.style.transform = `translateX(-${offset}px)`;
//     console.log(slideIndex);
// });
// console.log(images);