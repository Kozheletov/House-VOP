'use strict';

window.addEventListener('load', () => {

    const burger = document.querySelector('.button-menu');
    const menu = document.querySelector('.nav');
    const burgerTopLine = document.querySelector('.button-menu__long-line-top');
    const burgerMiddleLine = document.querySelector('.button-menu__short-line');
    const burgerBottomLine = document.querySelector('.button-menu__long-line-bottom');

    burger.addEventListener('click', (event) => {
        event.preventDefault();
        menu.classList.toggle('show');

        burger.classList.toggle('button-menu_close');
        burgerTopLine.classList.toggle('button-menu__long-line-top_close');
        burgerMiddleLine.classList.toggle('button-menu__short-line_close');
        burgerBottomLine.classList.toggle('button-menu__long-line-bottom_close');

    })

});