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

  if (!targetItem.closest('.select__item') && document.querySelector('.search-tour__title.open') && document.querySelector('.select__head.open')) {
    document.querySelector('.select__head.open').nextElementSibling.style.display = 'none';
    document.querySelector('.select__head.open').classList.remove('open');
  }

  if (targetItem.closest('.select__head')) {
    if (targetItem.classList.contains('open')) {
      targetItem.classList.remove('open');
      targetItem.parentNode.previousElementSibling.classList.remove('open');
      targetItem.nextElementSibling.style.display = 'none';
    } else {
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
