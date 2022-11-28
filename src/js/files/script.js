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
});
