const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const transparentBtn1 = document.querySelector('.btn-con1');
const transparentBtn2 = document.querySelector('.btn-con2');

// log to check if its right
//console.log(track);
//console.log(slides);

//saving the button as a variable
const nextButton =  document.querySelector('.carousel--right');
const prevButton =   document.querySelector('.carousel--left');

const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);
// console.log(dots);
const slideWidth = slides[0].getBoundingClientRect().width;
// what is getBoundingClientRect is?
 //const slideWidth = slideSize.width
//console.log(slideSize);
//console.log(slideWidth);


//do this
const setSlidePosition = (slides, index) => {
    slides.style.left = slideWidth * index + "px";
};
//console.log(slides);
//or this
// slides.forEach((slides, index) =>{
//     slides.style.left = slideWidth * index + "px";
// });

//or this using both method
slides.forEach(setSlidePosition);



 

const moveToSlide = (track, currentSlide, targetSlide) => {
  
     track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    
       let current = currentSlide.classList.remove('current-slide');
         let target = targetSlide.classList.add('current-slide');
 for( track = 0; track < current;){
    track++
 }
 current++
        
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const continueSlide = () => {
    //     let currentSlide;
    //   currentSlide.classList.remove('current-slide');
    //     for( currentSlide = 0; currentSlide < slides; currentSlide++){
    //         slides.style.display = 'none' 
    //     }
    //     targetIndex++
    
    //     if(targetIndex > slides.length){
    //         targetIndex = 6;
    //     }
    //     slides[targetIndex -1].style.display = 'block'
     const  currentSlide = track.querySelector('.current-slide');
        //move to the next slide
        const prevSlide = currentSlide.previousElementSibling;
        const currentDot = dotsNav.querySelector('.current-slide');
        const  prevDot = currentDot.nextElementSibling; 

        
    
    }

const hideShowArrow = (slides, prevButton, nextButton, targetIndex) =>{
        if(targetIndex === 0){
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');

    }else if(targetIndex === slides.lenght - 1){
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else{
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}


//when i click right move slide to the right
 nextButton.addEventListener('click', e => {
    const  currentSlide = track.querySelector('.current-slide');
    
    //move to the next slide
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot =dotsNav.querySelector('.current-slide');
    const  nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);



    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrow(slides, prevButton, nextButton, targetIndex);

   
})
// creat an infinte loop or statement
   
//when i click left move slide to the left
  
prevButton.addEventListener('click', e => {
    const  currentSlide = track.querySelector('.current-slide');
    //move to the next slide
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const  prevDot = currentDot.nextElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot)
    hideShowArrow(slides, prevButton, nextButton, prevIndex);
   
});


//when i click the indicator move slide to the slide 

dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

   if(!targetDot) return;

    const currentSlide  = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    // console.log(targetIndex);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrow(slides, prevButton, nextButton, targetIndex);
    
});


function showSlides(){
   if(continueSlide){
    const  currentSlide = track.querySelector('.current-slide');
    
    //move to the next slide
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot =dotsNav.querySelector('.current-slide');
    const  nextDot = currentDot.nextElementSibling;
    
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
   
    continueSlide(slides, currentSlide)
  
   }
    setTimeout(showSlides, 4000);
}

showSlides();

// const hoverEffect = () =>{

// }

transparentBtn1.addEventListener('mouseover', function() {
    // console.log(e);
    
    prevButton.style.display = 'block';
    // nextButton.style.display = 'block';
})

 transparentBtn1.addEventListener('mouseleave', function() {
     prevButton.style.display = 'none';
    //  nextButton.style.display = 'none';
 });



transparentBtn2.addEventListener('mouseover', function() {
     nextButton.style.display = 'block';
})

 transparentBtn2.addEventListener('mouseleave', function() {
    nextButton.style.display = 'none';
 })
// to work on visibility when mouse is over on or around it
//extra container is empty-con to help it mouseover

















