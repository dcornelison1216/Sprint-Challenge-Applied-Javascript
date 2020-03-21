/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

const carouselMaker = () => {
  // HTML:
  //   <div class="carousel">
  const carousel = document.createElement('div')
  carousel.classList.add('carousel')
  //     <div class="left-button"> < </div>
  const leftButton = document.createElement('div')
  leftButton.classList.add('left-button')
  carousel.appendChild(leftButton)
  //     <img src="./assets/carousel/mountains.jpeg" />
  const mountainsImg = document.createElement('img')
  mountainsImg.src = 'assets/carousel/mountains.jpeg'
  mountainsImg.classList.add('image')
  carousel.appendChild(mountainsImg)
  //     <img src="./assets/carousel/computer.jpeg" />
  const computerImg = document.createElement('img')
  computerImg.src = 'assets/carousel/computer.jpeg'
  computerImg.classList.add('image')
  carousel.appendChild(computerImg)
  //     <img src="./assets/carousel/trees.jpeg" />
  const treesImg = document.createElement('img')
  treesImg.src = 'assets/carousel/trees.jpeg'
  treesImg.classList.add('image')
  carousel.appendChild(treesImg)
  //     <img src="./assets/carousel/turntable.jpeg" />
  const turntableImg = document.createElement('img')
  turntableImg.src = 'assets/carousel/turntable.jpeg'
  turntableImg.classList.add('image')
  carousel.appendChild(turntableImg)
  //     <div class="right-button"> > </div>
  const rightButton = document.createElement('div')
  rightButton.classList.add('right-button')
  carousel.appendChild(rightButton)
  //   </div>

  const carouselContainer = document.querySelector('.carousel-container')
  carouselContainer.appendChild(carousel)
}

carouselMaker()

// create array of carousel images
const images = document.querySelectorAll('img')

// display first image when page is loaded
let imgIndex = 0
images[imgIndex].style.display = 'block'

// add right button functionality
const rightButton = document.querySelector('.right-button')
rightButton.style = 'transition: background-color 0.2s ease'
rightButton.addEventListener('click', () => {
  imgIndex += 1
  let prevImgIndex = (imgIndex - 1) % images.length
  images[prevImgIndex].style.display = 'none'
  let displayIndex = imgIndex % images.length
  images[displayIndex].style.display = 'block'
})


// add left button functionality
const leftButton = document.querySelector('.left-button')
leftButton.style = 'transition: background-color 0.2s ease'
leftButton.addEventListener('click', () => {
  imgIndex += (images.length - 1)
  let prevImgIndex = (imgIndex + 1) % images.length
  images[prevImgIndex].style.display = 'none'
  let displayIndex = imgIndex % images.length
  images[displayIndex].style.display = 'block'
})
