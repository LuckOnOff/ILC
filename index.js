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
const logInTitle = document.querySelector('.logIn-window-title-login');
const logInBodyForms = document.querySelector('.logIn-window-forms');
const regTitle = document.querySelector('.logIn-window-title-reg');
const regBodyForms = document.querySelector('.reg-window-forms');
const emailCheck = document.querySelector('.logIn-window-forms-email');
const passwordCheck = document.querySelector('.logIn-window-forms-password');
const regPassword = document.querySelector('.reg-window-forms-password');
const regPasswordConfirm = document.querySelector('.reg-window-forms-password-confirm');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const allInput = document.querySelectorAll('.logIn-window input');
const arrowUp = document.querySelector('.arrow-up');

const oneTenthMaximumY= Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
) / 10;

document.addEventListener('scroll', () => {
    if(window.scrollY > oneTenthMaximumY) {
        arrowUp.classList.add('active');
    } else {
        arrowUp.classList.remove('active');
    }
});

arrowUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

function logInSwitchReg() {
    logInBodyForms.style.display = 'none';
    regBodyForms.style.display = 'flex';
    logInTitle.classList.add('logIn-window-title-login-active');
    regTitle.classList.add('logIn-window-title-reg-active');
}
regTitle.addEventListener('click', logInSwitchReg);

function regSwitchLogIn() {
    logInBodyForms.style.display = 'flex';
    regBodyForms.style.display = 'none';
    logInTitle.classList.remove('logIn-window-title-login-active');
    regTitle.classList.remove('logIn-window-title-reg-active');
}
logInTitle.addEventListener('click', regSwitchLogIn);

function clearInput() {
    for(let i = 0; i < allInput.length; i++){
        allInput[i].value = '';
    }
}

function activePhone() {
    phoneBlock.classList.toggle('header-right-sec-phone-block-active');
    phoneBlock.classList.toggle('header-right-sec-phone-block');
    phoneIcon.classList.toggle('header-right-sec-phone-active');
    phoneIcon.classList.toggle('header-right-sec-phone');
    phoneNumber.classList.toggle('header-right-sec-phone-hidden-active');
}
phoneBlock.addEventListener('click', activePhone); /* номер телефона через иконку на мобильных версиях */

function activeMenu() {
    menuBlock.classList.toggle('header-right-sec-menu-block-active');
    menuBlock.classList.toggle('header-right-sec-menu-block');
    menuIcon.classList.toggle('header-right-sec-menu-active');
    menuIcon.classList.toggle('header-right-sec-menu');
    menuNav.classList.toggle('header-menu-nav-active');
}
menuBlock.addEventListener('click', activeMenu); /* открытие меню */

function hiddenMenu() {
    menuBlock.classList.remove('header-right-sec-menu-block-active');
    menuBlock.classList.add('header-right-sec-menu-block');
    menuIcon.classList.remove('header-right-sec-menu-active');
    menuIcon.classList.add('header-right-sec-menu');
    menuNav.classList.remove('header-menu-nav-active');
}
buttonExit.addEventListener('click', hiddenMenu); /* скрытие меню */

function openAds() {
    adsWindow.classList.add('ads-window-active')
}
setTimeout(openAds, 8000); /* задержка перед появлением рекламы */

function hiddenAds() {
    adsWindow.classList.remove('ads-window-active')
}
adsExit.addEventListener('click', hiddenAds); /* функция для закрывания рекламы через крестик */

function openLogIn(event) {
    if(!event.target.closest('.logIn-window')) {
        logInForms.classList.remove('logIn-window-active')
        overlay.classList.remove('overlay-active');
        body.classList.remove('body-active');
        regSwitchLogIn()
        clearInput()
    }
    if(event.target.closest('.logIn-button')) {
        logInForms.classList.add('logIn-window-active')
        overlay.classList.add('overlay-active');
        body.classList.add('body-active');
    }
}
document.addEventListener('click', openLogIn); /* функция для открытия и закрытия окна для входа в личный кабинет */

function emailValid() {
    if(emailCheck.validity.typeMismatch) {
        emailCheck.setCustomValidity('В вашей электронной почте есть ошибка, перепроверьте введенные вами данные')
    }else {
        emailCheck.setCustomValidity("");
      }
}
emailCheck.addEventListener("input", emailValid); /* функция для поля с почтой, проверка на валидность */

function passwordValid() {
    if(passwordCheck.validity.tooShort) {
        passwordCheck.setCustomValidity(`Ваш пароль слишком короткий ${passwordCheck.minLength} знаков, вы ввели ${passwordCheck.value.length}.`)
    }else {
        passwordCheck.setCustomValidity("");
      }
}
passwordCheck.addEventListener("input", passwordValid); /* функция для поля с паролем, проверка на валидность */

function passwordConfirm() {
    if(regPasswordConfirm.value !== regPassword.value) {
        regPasswordConfirm.setCustomValidity('Пароли не совпадают');
    }else {
        regPasswordConfirm.setCustomValidity('');
    }
}
regPasswordConfirm.addEventListener("input", passwordConfirm); /* проверка на совпадение пароля и подтвержденного пароля */