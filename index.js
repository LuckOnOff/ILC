'use strict';
const phoneBlock = document.querySelector('.header-right-sec-phone-block');
const phoneIcon = document.querySelector('.header-right-sec-phone');
const phoneNumber = document.querySelector('.header-right-sec-phone-hidden');
const menuBlock = document.querySelector('.header-right-sec-menu-block');
const menuIcon = document.querySelector('.header-right-sec-menu');
const menuNav = document.querySelector('.header-menu-nav');
const buttonExit = document.querySelector('.header-menu-nav-exit');
const adsWindow = document.querySelector('.ads-window');
const adsExit = document.querySelector('.ads-window-box-exit');
const logInForms = document.querySelector('.logIn-window');
const logInButton = document.querySelector('.logIn-window-forms-button');
const emailCheck = document.querySelector('.logIn-window-forms-email');
const passwordCheck = document.querySelector('.logIn-window-forms-password');

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

function openAds() {
    adsWindow.classList.add('ads-window-active')
}
setTimeout(openAds, 5000);

function hiddenAds() {
    adsWindow.classList.remove('ads-window-active')
}
adsExit.addEventListener('click', hiddenAds);

function openLogIn(event) {
    if(!event.target.closest('.logIn-window')) {
        logInForms.classList.remove('logIn-window-active')
    }
    if(event.target.closest('.logIn-button')) {
        logInForms.classList.add('logIn-window-active')
    }
}
document.addEventListener('click', openLogIn);

function emailValid() {
    if(emailCheck.validity.typeMismatch) {
        emailCheck.setCustomValidity('В вашей электронной почте есть ошибка, перепроверьте введенные вами данные')
    }else {
        emailCheck.setCustomValidity("");
      }
}
emailCheck.addEventListener("input", emailValid);

function passwordValid() {
    if(passwordCheck.validity.tooShort) {
        passwordCheck.setCustomValidity(`Ваш пароль слишком короткий ${passwordCheck.minLength} знаков, вы ввели ${passwordCheck.value.length}.`)
    }else {
        passwordCheck.setCustomValidity("");
      }
}
passwordCheck.addEventListener("input", passwordValid);