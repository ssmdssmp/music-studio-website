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
slidesField.style.width = 100 * slides.length + '%';
// slidesWrapper.style.overflow ='hidden';
// slidesField.style.marginLeft = '2700px';
slidesField.style.display = 'flex';
slidesField.style.transition = '0.5s all';
// slides.forEach(slide =>{
//     slide.style.width = width;
// });
function activeSlide(){
    slides.forEach(item => {
        item.style.opacity = 0.3;
    });
    images.forEach(item => {
        item.style.height = '300px';
    })
}
next.addEventListener('click', () => {
    console.log(slidesField.style.width);
    if (offset === +width.slice(0,width.length-2) * (slides.length -1)){
        offset = 0;
        slideIndex = 1;
        activeSlide();
        slides[slideIndex-1].style.opacity = 1;
        images[slideIndex-1].style.height = '600px';
        
      
    } else{
        offset += +width.slice(0,width.length-2) * (slides.length -3);
        slideIndex = slideIndex +1;
         activeSlide();
        slides[slideIndex-1].style.opacity = 1;
        images[slideIndex-1].style.height = '600px';
       
        
    }
    slidesField.style.transform = `translateX(-${offset}px)`;
    console.log(slideIndex);
});
prev.addEventListener('click', () => {

    if(offset == 0) {
        (offset = +width.slice(0,width.length-2) * (slides.length-1));
        slideIndex = slides.length;
        activeSlide();
        slides[slideIndex-1].style.opacity = 1;
        images[slideIndex-1].style.height = '600px';
    } else{
        offset -= +width.slice(0,width.length-2) * (slides.length -3);
        slideIndex = slideIndex -1;
        activeSlide();
        slides[slideIndex-1].style.opacity = 1;
        images[slideIndex-1].style.height = '600px';
    }
    slidesField.style.transform = `translateX(-${offset}px)`;
    console.log(slideIndex);
});
console.log(images);