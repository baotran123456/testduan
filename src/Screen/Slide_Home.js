import React, { useEffect } from "react";
import '../css/testHome.css'

import movies from "../item/ItemNavi"



const $ = (selector) => {
    return document.querySelector(selector);
};
const isSliderItem = (obj) => {
    var _a;
    return ((_a = obj) === null || _a === void 0 ? void 0 : _a.constructor) === SliderItem;
};
const isArrayOfSliderItems = (obj) => {
    return Array.isArray(obj) && obj.every(isSliderItem);
};
class SliderItem extends HTMLLIElement {
    constructor() {
        super();
        this.position = Number(this.getAttribute('idx'));
        this.movie = {
            title: this.getAttribute('title'),
            image: this.getAttribute('image'),
            synopsis: this.getAttribute('synopsis'),
        };
        this.className = 'slider__item';
    }
    connectedCallback() {
        this.appendImage();
        this.setStyles();
    }
    appendImage() {
        const img = Object.assign(document.createElement('img'), {
            src: this.movie.image,
        });
        this.appendChild(img);
    }
    // prettier-ignore
    setStyles() {
        this.style.transform = `translateX(${this.position === 0 ? 35 : 35 + 15 * this.position}rem)`;
        this.style.display = this.position === movies.length - 0 ? 'none' : 'initial';
        if (this.position === 0) {
            this.classList.add('active');
            renderMovieDetails(this.movie);
        }
        if (this.position !== 0 && this.classList.contains('active')) {
            this.classList.remove('active');
        }
    }
    setNextPosition() {
        this.position = (this.position + movies.length - 1) % movies.length;
    }
    rotatePosition() {
        this.setNextPosition();
        this.setStyles();
    }
}
const renderMovieDetails = (movie) => {

    $('.text').innerHTML = `
        <div class="text__inner">
            <div class="text__group">
                <h3 class="text__title">${movie.title}</h3>
                
                <p class="text__synopsis">${movie.synopsis}</p>
            </div>
        </div>
    `;
};
class SliderList extends HTMLUListElement {
    constructor() {
        super();
        this.innerHTML = movies.map(this.liHTML).join('');
    }
    liHTML(m, idx) {
        return `<li 
                    is="slider-item" 
                    image="${m.image}" 
                    title="${m.title}" 
                    synopsis="${m.synopsis}" 
                    idx="${idx}">
                </li>
            `;
    }
}
const components = [
    {
        tagName: 'slider-list',
        component: SliderList,
        extends: { extends: 'ul' },
    },
    {
        tagName: 'slider-item',
        component: SliderItem,
        extends: { extends: 'li' },
    },
];
components.forEach((c) => {
    window.customElements.define(c.tagName, c.component, c.extends);
});



function SliderHome() {
    useEffect(() => {

        $('.btn').addEventListener('click', () => {
            const items = Array.from(document.querySelectorAll('.slider__item'));
            if (isArrayOfSliderItems(items)) {
                items.forEach((itemt) => itemt.rotatePosition());
            }
        });
    })


    return (
        <div className="app__inner">
            <div className="slider">
                <ul is="slider-list" className="slider__list"></ul>
            </div>
            <div className="btn">
                &#8594;
            </div>
            <div className="text"></div>
        </div>
    )
}

export default SliderHome;