const burgerMenuBtn = document.querySelector('.hamburger');
const burgerMenuList = document.querySelector('.burger-menu__list ');

const burgerMenuHandler = () => {
  burgerMenuBtn.classList.toggle('is-active');
  burgerMenuList.classList.toggle('burger-menu__list--active');
}

burgerMenuBtn.addEventListener('click', burgerMenuHandler)

for (let i = 0; i < burgerMenuList.children.length; i++) {
  burgerMenuList.children[i].children[0].addEventListener('click', burgerMenuHandler);
}
