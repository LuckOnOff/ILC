'use strict';
const phoneBlock = document.querySelector('.header-right-sec-phone-block');
const phoneIcon = document.querySelector('.header-right-sec-phone');
const phoneNumber = document.querySelector('.header-right-sec-phone-hidden');
const menuBlock = document.querySelector('.header-right-sec-menu-block');
const menuIcon = document.querySelector('.header-right-sec-menu');
const menuNav = document.querySelector('.header-menu-nav');
const buttonExit = document.querySelector('.header-menu-nav-exit');
const logInWindow = document.querySelector('.logIn-window');
const logInExit = document.querySelector('.logIn-window-box-exit');

function activePhone() {
    phoneBlock.classList.toggle('header-right-sec-phone-block-active');
    phoneBlock.classList.toggle('header-right-sec-phone-block');
    phoneIcon.classList.toggle('header-right-sec-phone-active');
    phoneIcon.classList.toggle('header-right-sec-phone');
    phoneNumber.classList.toggle('header-right-sec-phone-hidden-active');
}
phoneBlock.addEventListener('click', activePhone);

function activeMenu() {
    menuBlock.classList.toggle('header-right-sec-menu-block-active');
    menuBlock.classList.toggle('header-right-sec-menu-block');
    menuIcon.classList.toggle('header-right-sec-menu-active');
    menuIcon.classList.toggle('header-right-sec-menu');
    menuNav.classList.toggle('header-menu-nav-active');
}
menuBlock.addEventListener('click', activeMenu);

function hiddenMenu() {
    menuBlock.classList.remove('header-right-sec-menu-block-active');
    menuBlock.classList.add('header-right-sec-menu-block');
    menuIcon.classList.remove('header-right-sec-menu-active');
    menuIcon.classList.add('header-right-sec-menu');
    menuNav.classList.remove('header-menu-nav-active');
}
buttonExit.addEventListener('click', hiddenMenu);

function openAdv() {
    logInWindow.classList.add('logIn-window-active')
}
setTimeout(openAdv, 5000);

function hiddenAdv() {
    logInWindow.classList.remove('logIn-window-active')
}
logInExit.addEventListener('click', hiddenAdv);