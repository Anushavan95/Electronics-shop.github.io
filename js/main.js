
const mainToggle = document.querySelector('.main-nav__toggle').addEventListener("click", hamburgerChange);;
const catNav = document.querySelector('.cat-nav');
const toggleHamb = document.querySelector('.main-nav__toggle-hamburger');
const toggleCross = document.querySelector('.main-nav__toggle-cross');
const subscribeBtn = document.querySelector('.b-subscribe__btn').addEventListener('click', subPop)
const subPopForm =document.querySelector('#fancyPop');
const subPopFormClose = document.querySelector('#popformclose').addEventListener('click', subPopClose);
const fBlockBtn = document.querySelector('.f-block__btn').addEventListener('click', function () {
    window.open('mailto:narek.alexanyan.96@gmail.com')
});
const hRegionPopClose = document.querySelector('.region__close-btn').addEventListener('click', function() {
    hRegionPopBlock.classList.remove('block')
})
const hRegionPopBlock = document.querySelector('.region__popup');
const hRegionPop = document.querySelector('#h-region__link-pop').addEventListener('click', function() {
    hRegionPopBlock.classList.add('block')
});





function subPop () {
    subPopForm.classList.toggle("block")
    
}

function subPopClose () {
    subPopForm.classList.remove("block")
}

 function menuToggle() {
    catNav.classList.toggle("block")
}

function hamburgerChange() {
    toggleHamb.classList.toggle("none")
    toggleCross.classList.toggle("block")
}

$(document).ready(function() {
    $('.tns-outer__slider').slick({
        dots: true,
        autoplay: true,
    });
    $('.tns-outer').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: true,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    })
});
