'use strict';

class Slider {
    constructor (sliderCards) {
        this.sliderCards = sliderCards;
        this.direction = -1;
        this.slidesDataArr = [];
        this.sliderWindowWidth = 560;
        this.slidesNum = sliderCards.length;
        this.shift = this.sliderWindowWidth / (this.sliderWindowWidth * this.slidesNum) * 100 + '%';
    }

    init() {
        const leftBtnEl = document.querySelector('.testimonials-arrow-left-container');
        const rightBtnEl = document.querySelector('.testimonials-arrow-right-container');
        let slideLine = document.querySelector('.testimonials__slide-line');
        let slideItem = document.querySelector('.testimonials__slider-item');
        
        for (let i = 1; i < this.slidesNum; i++) {
            let slide = document.createElement('div');

            slide.classList.add('testimonials__slider-item');
            slide.innerHTML = `<div class="testimonials__slide-text-container">
            <div class="testimonials__quote-elem-container">
            <span class="testimonials__quote-element">"</span>
            </div>
            <div class="testimonials__slide-text-wrapper">
            <div>
            <p class="testimonials__slide-text"></p>
            </div>
            <div class="testimonials__slide-author-info">
            <p class="testimonials__author"></p>
            <p class="testimonials__author-occupation"></p>
            </div>
            </div>
            </div>
            <div class="testimonials__slide-photo-container">
            <img class="testimonials__slide-user-photo" src="#" alt="man photo" />
            </div>`;

            slideLine.appendChild(slide);
        }

        let slideItemArr = slideLine.querySelectorAll('.testimonials__slider-item');

        this.slidesDataArr = sliderCards.concat();
        leftBtnEl.addEventListener('click', this.left.bind(this), false);
        rightBtnEl.addEventListener('click', this.right.bind(this), false);
        slideLine.addEventListener('transitionend', this.slideTransfer.bind(this), false);

        for (let i = 0; i < this.slidesDataArr.length; i++) {
            let text = slideItemArr[i].querySelector('.testimonials__slide-text');
            let author = slideItemArr[i].querySelector('.testimonials__author');
            let authorOccupation = slideItemArr[i].querySelector('.testimonials__author-occupation');
            let img = slideItemArr[i].querySelector('.testimonials__slide-user-photo');

            text.textContent = this.slidesDataArr[i].slideText;
            author.textContent = this.slidesDataArr[i].author;
            authorOccupation.textContent = this.slidesDataArr[i].authorOccupation;
            img.src = this.slidesDataArr[i].authorPhoto;
        }

        this.infinite();
    }

    slideTransfer() {
        let slideLine = document.querySelector('.testimonials__slide-line');

        if (this.direction === -1) {

            slideLine.appendChild(slideLine.firstElementChild);
        } else if (this.direction === 1) {

            slideLine.prepend(slideLine.lastElementChild);
        }

        slideLine.style.transition = 'none';
        slideLine.style.transform = 'translate(0)';
        setTimeout(function() {
            slideLine.style.transition = 'all 0.5s';
        });
    }

    infinite() {
        const leftArrowEl = document.querySelector('.testimonials-arrow-left-container');
        const righttArrowEl = document.querySelector('.testimonials-arrow-right-container');
        const sliderWindowEl = document.querySelector('.testimonials__slider-window');
        let self = this;
        let intervalID = (setInterval(function() {
            self.right();
        }, 5000));

        leftArrowEl.addEventListener('mouseleave', function(event) {
            intervalID = (setInterval(function() {
                self.right();
            }, 5000));
        });

        leftArrowEl.addEventListener('mouseenter', function(event) {
            clearInterval(intervalID);
        });

        righttArrowEl.addEventListener('mouseleave', function(event) {
            intervalID = (setInterval(function() {
                self.right();
            }, 5000));
        });

        righttArrowEl.addEventListener('mouseenter', function(event) {
            clearInterval(intervalID);
        });

        sliderWindowEl.addEventListener('mouseleave', function(event) {
            intervalID = (setInterval(function() {
                self.right();
            }, 5000));
        });

        sliderWindowEl.addEventListener('mouseenter', function(event) {
            clearInterval(intervalID);
        });
    }

    left() {
        let slideLine = document.querySelector('.testimonials__slide-line');
        let slideWindow = document.querySelector('.testimonials__slider-window');

        if (this.direction === -1) {

            slideLine.appendChild(slideLine.firstElementChild); 
            this.direction = 1;
        }

        this.direction = 1;
        slideWindow.style.justifyContent = 'flex-end';
        slideLine.style.transform = `translate(${this.shift})`;  
    }

    right() {
        let slideLine = document.querySelector('.testimonials__slide-line');
        let slideWindow = document.querySelector('.testimonials__slider-window');

        if (this.direction === 1) {

            slideLine.prepend(slideLine.lastElementChild);
            this.direction = -1;
        }

        this.direction = -1;
        slideWindow.style.justifyContent = 'flex-start';
        slideLine.style.transform = `translate(-${this.shift})`;  
    }
}

let slider = new Slider(sliderCards);

window.onload = function() {
    slider.init();
};
