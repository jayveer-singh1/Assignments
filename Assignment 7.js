// Start Box Hide and Show

let button = document.querySelector('#btn')
let div1 = document.querySelector('#hands')
button.addEventListener('click', function () {
    div1.classList.toggle('hide')
})

// End Button Hide and Show


// Start Slider Code 

const slides = document.querySelectorAll(".slide")
counter = 0;
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
})

const goPrev = () => {
    counter--;
    slideImage()
}

const goNext = () => {
    counter++;
    slideImage()
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}
// End Slider Code 
