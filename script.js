// Using arrow functions

var currentSlide = 0;

const slides = document.querySelectorAll(".slide");


const init = (n) =>{
    slides.forEach((slide) =>{
        slide.style.display="none"
    })
    slides[n].style.display ="grid";
    
}

document.addEventListener("DOMContentLoaded", init(currentSlide))


// adding the next and prev buttons


const next = ()=>{
    currentSlide >= slides.length - 1 ? currentSlide = 0: currentSlide++
    init(currentSlide)
}

const prev =() => {
    currentSlide <= 0 ? currentSlide = slides.length- 1 :currentSlide--
    init(currentSlide)
}

document.querySelector(".next").addEventListener('click', next);
document.querySelector(".prev").addEventListener('click', prev)

setInterval(() =>{
    next()
}, 5000)



// Working On the navbar

const closeMenu = document.querySelector(".menu-close");
const openMenu = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");
const menuItem =document.querySelectorAll(".nav-item");
const slideContainer = document.querySelector(".slide-container");

// Write a function to toggle menu open or close

openMenu.addEventListener('click',  function(event) {
    menu.style.visibility="visible";
    closeMenu.style.display="block";
    slideContainer.style.top="5em";
    console.log("menu open")
});

closeMenu.addEventListener('click', function(event){
    menu.style.visibility="hidden";
    closeMenu.style.display="none";
    slideContainer.style.top="0";
    console.log("menu close")
})

//manipulate the position of the arrow buttons
