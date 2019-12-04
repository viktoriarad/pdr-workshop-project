const nav = document.querySelector('.navigation');
const navLogo = document.querySelector('.navigation__logo-img');
const burgerNavLogo = document.querySelector('.burger-menu__logo-img');

const mainLink = document.querySelector('.mainlink');
const aboutLink = document.querySelector('.aboutlink');
const worksLink = document.querySelector('.workslink');
const offerLink = document.querySelector('.offerlink');
const collaborationLink = document.querySelector('.collaborationlink');

const burgerMainLink = document.querySelector('.burger-menu__mainlink');
const burgerAboutLink = document.querySelector('.burger-menu__aboutlink');
const burgerWorksLink = document.querySelector('.burger-menu__workslink');
const burgerOfferLink = document.querySelector('.burger-menu__offerlink');
const burgerCollaborationLink = document.querySelector('.burger-menu__collaborationlink');

const headerSection = document.querySelector('.header');
const aboutMeSection = document.querySelector('.about-me');
const ourWorksSection = document.querySelector('.our-works');
const offerSection = document.querySelector('.offer');
const collaborationSection = document.querySelector('.collaboration');
const navLogoHeight = navLogo.offsetHeight * 0.6;

const scrollToHandler = (element) => {
  const navBarHeight = window.innerWidth <= 1024 ? burgerNavLogo.offsetHeight : navLogoHeight
  const height = element.offsetTop + element.offsetHeight - navBarHeight;
  const obj = {
    top: height,
    left: 0,
    behavior: 'smooth'
  }

  window.scrollTo(obj);
};

const onScrollNavMenu = () => {

  const offerStart = headerSection.offsetTop + headerSection.offsetHeight - navLogoHeight;
  const offerEnd = offerStart + offerSection.offsetHeight;

  const worksStart = offerEnd;
  const worksEnd = worksStart + ourWorksSection.offsetHeight;

  const aboutStart = worksEnd;
  const aboutEnd = aboutStart + aboutMeSection.offsetHeight;

  const collaborationStart = aboutEnd;
  const collaborationEnd = collaborationStart + collaborationSection.offsetHeight;

  mainLink.classList.remove('navigation__link--hover');
  offerLink.classList.remove('navigation__link--hover');
  worksLink.classList.remove('navigation__link--hover');
  aboutLink.classList.remove('navigation__link--hover');
  collaborationLink.classList.remove('navigation__link--hover');

  if (window.pageYOffset >= offerStart && window.pageYOffset < offerEnd) {
    offerLink.classList.add('navigation__link--hover');
  } else if (window.pageYOffset >= worksStart && window.pageYOffset < worksEnd) {
    worksLink.classList.add('navigation__link--hover');
  } else if (window.pageYOffset >= aboutStart && window.pageYOffset < aboutEnd) {
    aboutLink.classList.add('navigation__link--hover');
  } else if (window.pageYOffset >= collaborationStart && window.pageYOffset < collaborationEnd) {
    collaborationLink.classList.add('navigation__link--hover');
  } else {
    mainLink.classList.add('navigation__link--hover');
  }

};

document.addEventListener('scroll', function () {

  if (window.pageYOffset > 0) {
    nav.classList.add('navigation--active');
    navLogo.classList.add('navigation__logo-img--active');
  } else {
    nav.classList.remove('navigation--active');
    navLogo.classList.remove('navigation__logo-img--active');
  }

  onScrollNavMenu();

});

offerLink.addEventListener('click', () => scrollToHandler(headerSection));
worksLink.addEventListener('click', () => scrollToHandler(offerSection));
aboutLink.addEventListener('click', () => scrollToHandler(ourWorksSection));
collaborationLink.addEventListener('click', () => scrollToHandler(aboutMeSection));
mainLink.addEventListener('click', () => window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
}));

burgerOfferLink.addEventListener('click', () => scrollToHandler(headerSection));
burgerWorksLink.addEventListener('click', () => scrollToHandler(offerSection));
burgerAboutLink.addEventListener('click', () => scrollToHandler(ourWorksSection));
burgerCollaborationLink.addEventListener('click', () => scrollToHandler(aboutMeSection));
burgerMainLink.addEventListener('click', () => window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
}));
