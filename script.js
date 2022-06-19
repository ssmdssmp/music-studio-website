"use strict"

let line =document.querySelector(".line");

window.onscroll = () =>{
    let pos = window.scrollY - 800;
    line.style.right =`${pos}px`
};

let slidesId = 1;

const sliderField = document.querySelector('.slider');
const next = document.querySelector('.slider-next');
const prev = document.querySelector('.slider-prev');
class Slide {
    constructor(img, x, y, width, height){
        this.img = img;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.id = slidesId;
        slidesId++;
    }
paint(){
    var newSlide = document.getElementById(this.id);
    if (newSlide === null){
       newSlide = document.createElement('div');
        sliderField.append(newSlide);
    }
    newSlide.style.position = 'absolute';
    newSlide.style.width = this.width.toString() +'px';
    newSlide.style.height = this.height.toString() +'px';
    newSlide.style.backgroundImage = `url(${this.img})`;
    newSlide.setAttribute('id', this.id);
    newSlide.style.right = this.x.toString() + 'px';
    newSlide.style.y = this.y;
    newSlide.style.transition = '1s all';
   
    

}
changeX(x){
    this.x=x;
}
changeY(y){
    this.y = y;
}
changeWidth(width){
    this.width = width;
}
changeHeight(height){
    this.height=height;
}
changeId(id){
    this.id = id;
}

}

let activeWidth = 800,
    activeHeight = 600,
    sideWidth = 300,
    sideHeigth = 400,
    count = 3; // make array!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
class Slider {
    constructor(){
        let enterScreen = +document.querySelector('.slider').getBoundingClientRect().width / 2;
        this.slides = [new Slide('assets/s1.png',0-(sideWidth/2),0,sideWidth, sideHeigth), new Slide('assets/s2.png',enterScreen-(activeWidth/2),0,activeWidth, activeHeight), new Slide('assets/s3.png',+document.querySelector('.slider').getBoundingClientRect().width - (sideWidth/2),0,sideWidth, sideHeigth)];
        this.slides.forEach(item =>{
            item.paint();
        });
        this.activeSlide = 1;
        this.leftSlide = 0;
        this.rightSlide =2;
    }
    swipeNext(){
        // this.activeSlide--;
        if(--this.activeSlide < 0){
            this.activeSlide += count;
        }
        // this.leftSlide--;
        if(--this.leftSlide < 0){
            this.leftSlide += count;
        }
        // this.rightSlide--;
        if(--this.rightSlide < 0){
            this.rightSlide += count;
        }
        this.slides[this.activeSlide].changeHeight(activeHeight);
        this.slides[this.activeSlide].changeWidth(activeWidth);
        this.slides[this.activeSlide].changeX((+document.querySelector('.slider').getBoundingClientRect().width /2)-activeWidth/2); 
        this.slides[this.leftSlide].changeHeight(sideHeigth);
        this.slides[this.leftSlide].changeWidth(sideWidth);
        this.slides[this.leftSlide].changeX(0-(sideWidth/2));
        this.slides[this.rightSlide].changeHeight(sideHeigth);
        this.slides[this.rightSlide].changeWidth(sideWidth);
        this.slides[this.rightSlide].changeX(+document.querySelector('.slider').getBoundingClientRect().width - sideWidth/2);
        this.slides.forEach(item =>{
            item.paint();
        });

    };
    swipePrev(){
        this.activeSlide = ++this.activeSlide % count;
        // if(--this.activeSlide < 0){
        //     this.activeSlide += count;
        // }
        // this.leftSlide--;
        this.leftSlide = ++this.leftSlide % count;
        // if(--this.leftSlide < 0){
        //     this.leftSlide += count;
        // }
        // this.rightSlide--;
        this.rightSlide = ++this.rightSlide % count;
        // if(--this.rightSlide < 0){
        //     this.rightSlide += count;
        // }
        this.slides[this.activeSlide].changeHeight(activeHeight);
        this.slides[this.activeSlide].changeWidth(activeWidth);
        this.slides[this.activeSlide].changeX((+document.querySelector('.slider').getBoundingClientRect().width /2)-activeWidth/2); 
        this.slides[this.leftSlide].changeHeight(sideHeigth);
        this.slides[this.leftSlide].changeWidth(sideWidth);
        this.slides[this.leftSlide].changeX(0-(sideWidth/2));
        this.slides[this.rightSlide].changeHeight(sideHeigth);
        this.slides[this.rightSlide].changeWidth(sideWidth);
        this.slides[this.rightSlide].changeX(+document.querySelector('.slider').getBoundingClientRect().width - sideWidth/2);
        this.slides.forEach(item =>{
            item.paint();
        });
    };
}
let p = new Slider;


next.addEventListener('click', () =>{
    p.swipeNext();
});

prev.addEventListener('click', () =>{
p.swipePrev();
});
console.log(document.querySelector('.slider').getBoundingClientRect().height);
console.log(document.querySelector('.slider').getBoundingClientRect().width);