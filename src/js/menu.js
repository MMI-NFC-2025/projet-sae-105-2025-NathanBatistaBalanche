document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  const openButton = document.querySelector('.header__menu-button');
  const closeButton = document.querySelector('.menu__close-button');
  const body = document.body;

  if (!menu || !openButton || !closeButton) return;

  // Menu fermé au chargement
  menu.setAttribute('aria-hidden', 'true');
  openButton.setAttribute('aria-expanded', 'false');

  // Ouvrir le menu
  openButton.addEventListener('click', () => {
    menu.setAttribute('aria-hidden', 'false');
    openButton.setAttribute('aria-expanded', 'true');
    body.classList.add('noscroll');
  });

  // Fermer le menu
  closeButton.addEventListener('click', () => {
    menu.setAttribute('aria-hidden', 'true');
    openButton.setAttribute('aria-expanded', 'false');
    body.classList.remove('noscroll');
  });
});
