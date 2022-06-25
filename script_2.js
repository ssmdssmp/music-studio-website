// 'use strict'


// let slidesId = 1;

// const sliderField = document.querySelector('.slider');
// const next = document.querySelector('.slider-next');
// const prev = document.querySelector('.slider-prev');
// class Slide {
//     constructor(img, x, y, width, height){
//         this.img = img;
//         this.x = x;
//         this.y = y;
//         this.width = width;
//         this.height = height;
//         this.id = slidesId + 'th';
//         slidesId++;
//     }
// paint(){
//     var newSlide = document.getElementById(this.id);
//     if (newSlide === null){
//        newSlide = document.createElement('div');
//         sliderField.append(newSlide);
       
//     }
//     newSlide.style.position = 'absolute';
//     newSlide.style.width = this.width.toString() +'px';
//     newSlide.style.height = this.height.toString() +'px';
//     newSlide.style.backgroundImage = `url(${this.img})`;
//     newSlide.setAttribute('id', this.id);
//     newSlide.style.right = this.x.toString() + 'px';
//     newSlide.style.y = this.y;
//     newSlide.style.backgroundRepeat = 'no-repeat';
//     newSlide.style.backgroundPosition = 'center';
//     newSlide.style.transition = '0.5s all';
//    newSlide.style.overflow = 'hidden';
    

// }
// changeX(x){
//     this.x=x;
// }
// changeY(y){
//     this.y = y;
// }
// changeWidth(width){
//     this.width = width;
// }
// changeHeight(height){
//     this.height=height;
// }
// changeId(id){
//     this.id = id;
// }

// }

// let activeWidth = 800,
//     activeHeight = 600,
//     sideWidth = 400,
//     sideHeigth = 500,
//     count = 4, // make array!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     slideIndex = 1;
// class Slider {
//     constructor(){
//         let enterScreen = +document.querySelector('.slider').getBoundingClientRect().width / 2;
//         this.slides = [new Slide('assets/s1.png',0-(sideWidth/2),0,sideWidth, sideHeigth), new Slide('assets/s2.png',enterScreen-(activeWidth/2),0,activeWidth, activeHeight), new Slide('assets/s3.png',+document.querySelector('.slider').getBoundingClientRect().width - (sideWidth/2),0,sideWidth, sideHeigth), new Slide('assets/s4.png',-1000,0,0,0)];
//         this.slides.forEach(item =>{
//             item.paint();
//         });
//         this.activeSlide = 1;
//         this.leftSlide = 0;
//         this.rightSlide =2;
//     }
//     swipeNext(){
//         // this.activeSlide--;
//         if(--this.activeSlide < 0){
//             this.activeSlide += count;
//         }
//         // this.leftSlide--;
//         if(--this.leftSlide < 0){
//             this.leftSlide += count;
//         }
//         // this.rightSlide--;
//         if(--this.rightSlide < 0){
//             this.rightSlide += count;
//         }
//         this.slides[this.activeSlide].changeHeight(activeHeight);
//         this.slides[this.activeSlide].changeWidth(activeWidth);
//         this.slides[this.activeSlide].changeX((+document.querySelector('.slider').getBoundingClientRect().width /2)-activeWidth/2); 
//         this.slides[this.leftSlide].changeHeight(sideHeigth);
//         this.slides[this.leftSlide].changeWidth(sideWidth);
//         this.slides[this.leftSlide].changeX(0-(sideWidth/2));
//         this.slides[this.rightSlide].changeHeight(sideHeigth);
//         this.slides[this.rightSlide].changeWidth(sideWidth);
//         this.slides[this.rightSlide].changeX(+document.querySelector('.slider').getBoundingClientRect().width - sideWidth/2);
//         this.slides.forEach(item =>{
//                 item.paint();
//         });

//     };
//     swipePrev(){
//         this.activeSlide = ++this.activeSlide % count;
//         // if(--this.activeSlide < 0){
//         //     this.activeSlide += count;
//         // }
//         // this.leftSlide--;
//         this.leftSlide = ++this.leftSlide % count;
//         // if(--this.leftSlide < 0){
//         //     this.leftSlide += count;
//         // }
//         // this.rightSlide--;
//         this.rightSlide = ++this.rightSlide % count;
//         // if(--this.rightSlide < 0){
//         //     this.rightSlide += count;
//         // }
//         this.slides[this.activeSlide].changeHeight(activeHeight);
//         this.slides[this.activeSlide].changeWidth(activeWidth);
//         this.slides[this.activeSlide].changeX((+document.querySelector('.slider').getBoundingClientRect().width /2)-activeWidth/2); 
//         this.slides[this.leftSlide].changeHeight(sideHeigth);
//         this.slides[this.leftSlide].changeWidth(sideWidth);
//         this.slides[this.leftSlide].changeX(0-(sideWidth/2));
//         this.slides[this.rightSlide].changeHeight(sideHeigth);
//         this.slides[this.rightSlide].changeWidth(sideWidth);
//         this.slides[this.rightSlide].changeX(+document.querySelector('.slider').getBoundingClientRect().width - sideWidth/2);
//         this.slides.forEach(item =>{
//             item.paint();

//         });
//     };
//     hideSlide(){
//         if (slideIndex === 1){
//             document.getElementById('4th').style.display ='none';
//         } else {
//             document.getElementById('4th').style.display ='block';
//         }
//         if (slideIndex === 2){
//             document.getElementById('3th').style.display ='none';
//         } else {
//             document.getElementById('3th').style.display ='block';
//         }
//         if (slideIndex === 3){
//             document.getElementById('2th').style.display ='none';
//         } else {
//             document.getElementById('2th').style.display ='block';
//         }
//         if (slideIndex === 4){
//             document.getElementById('1th').style.display ='none';
//         } else {
//             document.getElementById('1th').style.display ='block';
//         }
//     }
// }
// let p = new Slider;


// next.addEventListener('click', () =>{
//     p.swipeNext();
//     if (slideIndex < p.slides.length){
//         slideIndex++;
//     } else{
//         slideIndex =1;
//     }
//     p.hideSlide();
//     console.log(slideIndex);
// });

// prev.addEventListener('click', () =>{
// p.swipePrev();

// if (slideIndex < 2){
//    slideIndex = 4;
// } else{
//     slideIndex--;
// }
// p.hideSlide();
// console.log(slideIndex);
// });
// console.log(document.querySelector('.slider').getBoundingClientRect().height);
// console.log(document.querySelector('.slider').getBoundingClientRect().width);

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
const sliderAnimation = new Promise(resolve =>{
    rightSlide.animate([{right:'25%',height:'68%',width:'50%'}],{duration:5000,fill: 'forwards'});
    activeSlide.animate([{right:'80%', height:'50%',width:'30%'}],{duration:5000,fill: 'forwards'});//,fill: 'forwards'
    leftSlide.animate([{left:'-50%'}],{duration:5000,fill: 'forwards'});
    })
.then(()=>{
    rightSlide.setAttribute('id','active');
    leftSlide.remove();
    slider.append(leftSlide);
    leftSlide.setAttribute('id','right');
    leftSlide.style.left ='unset';
    activeSlide.setAttribute('id','left');
 
}).catch(()=>{
    console.log('2');
})
});