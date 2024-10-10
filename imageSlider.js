const slides= document.querySelectorAll(".slider")
var counter=0 ;
slides.forEach((slide,index)=>{
   slide.style.left=`${index * 100}%`
})
const slideImage =()=>{
  slides.forEach(
    (slide)=>{
      slide.style.transform=`translateX(-${counter*100}%)`
    }
  )
}
function autoSlide() {
  slideCounter++;
  currentIndex = (currentIndex + 1) % slideCount;

  if (slideCounter >= maxSlidesBeforeReset) {
      currentIndex = 0; // Reset to the initial slide
      slideCounter = 0; // Reset the slide counter
  }

  moveToSlide(currentIndex);
}

// Auto-Slide every 3 seconds
setInterval(autoSlide, 3000);

const goPrev=(()=>{
  counter--;
  slideImage()
})
const goNext=(()=>{
  counter++;
  slideImage()
})