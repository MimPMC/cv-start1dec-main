window.addEventListener('DOMContentLoaded',addEventListeners)

function addEventListeners() {
    const playPaintingsSlideShowButton = document.querySelector('.websites-slideshow')

    playPaintingsSlideShowButton.addEventListener('click', playPaintingsSlideShow())
    
}

function playPaintingsSlideShow() {
  setInterval(changeImage, 2000);
}

function changeImage() {
  console.log("hello")
    const images = document.querySelectorAll('.slideshow img');
    for (let i = 0; i < images.length; i++) {
      const currentImage = images[i];
      
      let nextIndex;
      if (i === images.length - 1) {
        nextIndex = 0;
      } else {
        nextIndex = i + 1;
      }
  
      const nextImage = images[nextIndex];
  
      if (currentImage.classList.contains("visible")) {
        currentImage.classList.remove("visible");
        nextImage.classList.add('visible');
        console.log("visible")
        break;
      }
    }
  }