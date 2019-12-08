const nav = document.querySelector('.navigation');
const navLogo = document.querySelector('.navigation__logo-img');
const burgerNavLogo = document.querySelector('.burger-menu__logo-img');

const mainLink = document.querySelector('.mainlink');
const aboutPdrLink = document.querySelector('.aboutpdrlink')
const aboutLink = document.querySelector('.aboutlink');
const worksLink = document.querySelector('.workslink');
const offerLink = document.querySelector('.offerlink');
const collaborationLink = document.querySelector('.collaborationlink');

const burgerMainLink = document.querySelector('.burger-menu__mainlink');
const burgerAboutPdrLink = document.querySelector('.burger-menu__aboutpdrlink');
const burgerAboutLink = document.querySelector('.burger-menu__aboutlink');
const burgerWorksLink = document.querySelector('.burger-menu__workslink');
const burgerOfferLink = document.querySelector('.burger-menu__offerlink');
const burgerCollaborationLink = document.querySelector('.burger-menu__collaborationlink');

const headerSection = document.querySelector('.header');
const aboutPdrSection = document.querySelector('.aboutpdr');
const aboutMeSection = document.querySelector('.about-me');
const ourWorksSection = document.querySelector('.our-works');
const offerSection = document.querySelector('.offer');
const collaborationSection = document.querySelector('.collaboration');
const navLogoHeight = navLogo.offsetHeight * 0.6;

const scrollToHandler = (element) => {
  const navHeight = nav.classList.contains('navigation--active') ? 0 : nav.offsetHeight;
  const navBarHeight = window.innerWidth <= 1100 ? burgerNavLogo.offsetHeight : navLogoHeight
  const height = element.offsetTop - navHeight + element.offsetHeight - navBarHeight;
  const obj = {
    top: height,
    left: 0,
    behavior: 'smooth'
  }

  window.scrollTo(obj);
};

const bookmarksOnLoadingHandler = () => {
  const url = window.location.href;
  const bookmark = url.split('/#')[1]

  if (!bookmark) {
    return;
  }

  switch (bookmark) {
    case 'aboutpdr':
      scrollToHandler(headerSection);
      break;
    case 'offer':
      scrollToHandler(aboutPdrSection);
      break;
    case 'works':
      scrollToHandler(offerSection);
      break;
    case 'about':
      scrollToHandler(ourWorksSection);
      break;
    case 'collaboration':
      scrollToHandler(aboutMeSection);
      break;
  }
};

const onScrollNavMenu = () => {

  const aboutPdrStart = Math.floor(headerSection.offsetTop + headerSection.offsetHeight - navLogoHeight);
  const aboutPdrEnd = aboutPdrStart + aboutPdrSection.offsetHeight;

  const offerStart = aboutPdrEnd;
  const offerEnd = offerStart + offerSection.offsetHeight;

  const worksStart = offerEnd;
  const worksEnd = worksStart + ourWorksSection.offsetHeight;

  const aboutStart = worksEnd;
  const aboutEnd = aboutStart + aboutMeSection.offsetHeight;

  const collaborationStart = aboutEnd;
  const collaborationEnd = collaborationStart + collaborationSection.offsetHeight;

  mainLink.classList.remove('navigation__link--hover');
  aboutPdrLink.classList.remove('navigation__link--hover');
  offerLink.classList.remove('navigation__link--hover');
  worksLink.classList.remove('navigation__link--hover');
  aboutLink.classList.remove('navigation__link--hover');
  collaborationLink.classList.remove('navigation__link--hover');

  if (window.pageYOffset >= aboutPdrStart && window.pageYOffset < aboutPdrEnd) {
    aboutPdrLink.classList.add('navigation__link--hover');
  } else if (window.pageYOffset >= offerStart && window.pageYOffset < offerEnd) {
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

aboutPdrLink.addEventListener('click', () => scrollToHandler(headerSection));
offerLink.addEventListener('click', () => scrollToHandler(aboutPdrSection));
worksLink.addEventListener('click', () => scrollToHandler(offerSection));
aboutLink.addEventListener('click', () => scrollToHandler(ourWorksSection));
collaborationLink.addEventListener('click', () => scrollToHandler(aboutMeSection));
mainLink.addEventListener('click', () => window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
}));

burgerAboutPdrLink.addEventListener('click', () => scrollToHandler(headerSection));
burgerOfferLink.addEventListener('click', () => scrollToHandler(aboutPdrSection));
burgerWorksLink.addEventListener('click', () => scrollToHandler(offerSection));
burgerAboutLink.addEventListener('click', () => scrollToHandler(ourWorksSection));
burgerCollaborationLink.addEventListener('click', () => scrollToHandler(aboutMeSection));
burgerMainLink.addEventListener('click', () => window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
}));

window.addEventListener("load", bookmarksOnLoadingHandler);
