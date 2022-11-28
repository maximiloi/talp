// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

document.addEventListener('click', function (e) {
  const targetItem = e.target;

  if (targetItem.closest('[data-ripple]')) {
    // Создание span элемента
    const button = targetItem.closest('[data-ripple]');
    const ripple = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${e.pageX - (button.getBoundingClientRect().left + scrollX) - radius}px`;
    ripple.style.top = `${e.pageY - (button.getBoundingClientRect().top + scrollY) - radius}px`;
    ripple.classList.add('button__ripple');

    //  Работа анимации один раз или постоянно
    button.dataset.ripple === 'once' && button.querySelector('.button__ripple') ? button.querySelector('.button__ripple').remove() : null;

    // Добавление span элемента на страницу
    button.appendChild(ripple);

    // Удаление span елемента
    const getAnimationDuration = () => {
      const animDuration = window.getComputedStyle(ripple).animationDuration;

      return animDuration.includes('ms') ? animDuration.replace('ms', '') : animDuration.replace('s', '') * 1000;
    };

    const timeOut = getAnimationDuration(ripple);

    setTimeout(() => {
      ripple ? ripple.remove() : null;
    }, timeOut);
  }

  if (targetItem.closest('.select__head')) {
    if (targetItem.classList.contains('open')) {
      targetItem.classList.remove('open');
      targetItem.parentNode.previousElementSibling.classList.remove('open');
      targetItem.nextElementSibling.style.display = 'none';
    } else {
      // document.querySelector('.search-tour__title').classList.remove('open');
      targetItem.classList.add('open');
      targetItem.parentNode.previousElementSibling.classList.add('open');
      targetItem.nextElementSibling.style.display = 'block';
    }
  }

  if (targetItem.closest('.select__item')) {
    targetItem.parentElement.previousElementSibling.classList.remove('open');
    targetItem.parentNode.parentNode.previousElementSibling.classList.remove('open');
    targetItem.parentElement.previousElementSibling.innerText = targetItem.innerText;
    targetItem.parentElement.style.display = 'none';
  }
});

// document.querySelector('.select').addEventListener('click', function () {
//   if (document.querySelector(this).classList.contains('open')) {
//     document.querySelector(this).classList.remove('open');
//     document.querySelector(this).nextElementSibling.fadeOut();
//   } else {
//     document.querySelector('.select__head').classList.remove('open');
//     document.querySelector('.select__list').fadeOut();
//     document.querySelector(this).classList.add('open');
//     document.querySelector(this).nextElementSibling.fadeIn();
//   }
// });

// document.querySelector('.select').addEventListener('click', '.select__item', function () {
//   document.querySelector('.select__head').classList.remove('open');
//   document.querySelector(this).parent().fadeOut();
//   document.querySelector(this).parent().previousElementSibling.text(document.querySelector(this).text());
//   document.querySelector(this).parent().previousElementSibling.previousElementSibling.val(document.querySelector(this).text());
// });

// document.querySelector(document).click(function (e) {
//   if (!document.querySelector(e.target).closest('.select').length) {
//     document.querySelector('.select__head').classList.remove('open');
//     document.querySelector('.select__list').fadeOut();
//   }
// });

// https://only-to-top.ru/blog/coding/2018-11-17-stilizaciya-select.html
