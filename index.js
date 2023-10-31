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

// Функция для смены режима входа/регистрации
function switchMode() {
    logInBodyForms.style.display = regBodyForms.style.display === 'none' ? 'flex' : 'none';
    logInTitle.classList.toggle('logIn-window-title-login-active');
    regTitle.classList.toggle('logIn-window-title-reg-active');
}

regTitle.addEventListener('click', switchMode);
logInTitle.addEventListener('click', switchMode);

// Функция для очистки всех input'ов
function clearInput() {
    allInput.forEach(input => {
        input.value = '';
    });
}

// Функция для проверки валидности электронной почты
function validateEmail() {
    if (emailCheck.validity.typeMismatch) {
        emailCheck.setCustomValidity('Вашей электронной почте содержит ошибку, пожалуйста, проверьте данные');
    } else {
        emailCheck.setCustomValidity('');
    }
}

emailCheck.addEventListener('input', validateEmail);

// Функция для проверки валидности пароля
function validatePassword() {
    if (passwordCheck.validity.tooShort) {
        passwordCheck.setCustomValidity(`Ваш пароль слишком короткий. Минимум ${passwordCheck.minLength} знаков, вы ввели ${passwordCheck.value.length}.`);
    } else {
        passwordCheck.setCustomValidity('');
    }
}

passwordCheck.addEventListener('input', validatePassword);

// Функция для проверки совпадения паролей
function validatePasswordConfirm() {
    if (regPasswordConfirm.value !== regPassword.value) {
        regPasswordConfirm.setCustomValidity('Пароли не совпадают');
    } else {
        regPasswordConfirm.setCustomValidity('');
    }
}

regPasswordConfirm.addEventListener('input', validatePasswordConfirm);