'use strict';
const phoneBlock = document.querySelector('.header-right-sec-phone-block');
const phoneIcon = document.querySelector('.header-right-sec-phone');
const phoneNumber = document.querySelector('.header-right-sec-phone-hidden');

function activePhone() {
    phoneBlock.classList.toggle('header-right-sec-phone-block-active');
    phoneBlock.classList.toggle('header-right-sec-phone-block');
    phoneIcon.classList.toggle('header-right-sec-phone-active');
    phoneIcon.classList.toggle('header-right-sec-phone');
    phoneNumber.classList.toggle('header-right-sec-phone-hidden-active');
}

phoneBlock.addEventListener('click', activePhone);