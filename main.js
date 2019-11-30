const leftElemnt = document.querySelector('.leftBenefits');
const centerElemnt = document.querySelector('.centerBenefits');
const rightElemnt = document.querySelector('.rightBenefits');
const benefits = document.querySelector('.benefits');
const headerContact = document.querySelector('.header__contact');
const nav = document.querySelector('.navigation');
const navLogo = document.querySelector('.navigation__logo-img');
const mainLink = document.querySelector('.mainlink');
const aboutLink = document.querySelector('.aboutlink');
const worksLink = document.querySelector('.workslink');
const offerLink = document.querySelector('.offerlink');
const collaborationLink = document.querySelector('.collaborationlink');
const aboutMeSection = document.querySelector('.about-me');
const ourWorksSection = document.querySelector('.our-works');
const offerSection = document.querySelector('.offer');
const collaborationSection = document.querySelector('.collaboration');
const navLogoHeight = navLogo.offsetHeight * 0.6;


const showEl = () => {
  if ((window.outerHeight + window.pageYOffset) >= benefits.offsetHeight + benefits.offsetTop) {
    leftElemnt.classList.add('benefits__container--active');
    centerElemnt.classList.add('benefits__container--active');
    rightElemnt.classList.add('benefits__container--active');
  }
}


const scrollToHandler = (element) => {
  const height = element.offsetTop + element.offsetHeight - navLogoHeight;
  const obj = {
    top: height,
    left: 0,
    behavior: 'smooth'
  }

  window.scrollTo(obj);
};

const onScrollNavMenu = () => {
  const aboutStart = benefits.offsetTop + benefits.offsetHeight - navLogoHeight;
  const aboutEnd = aboutStart + aboutMeSection.offsetHeight;
  const worksStart = aboutEnd;
  const worksEnd = worksStart + ourWorksSection.offsetHeight;
  const offerStart = worksEnd;
  const offerEnd = offerStart + offerSection.offsetHeight;
  const collaborationStart = offerEnd;
  const collaborationEnd = collaborationStart + collaborationSection.offsetHeight;

  mainLink.classList.remove('navigation__link--hover');
  aboutLink.classList.remove('navigation__link--hover');
  worksLink.classList.remove('navigation__link--hover');
  offerLink.classList.remove('navigation__link--hover');
  collaborationLink.classList.remove('navigation__link--hover');

  if (window.pageYOffset >= aboutStart && window.pageYOffset < aboutEnd) {
    aboutLink.classList.add('navigation__link--hover');
  } else if (window.pageYOffset >= worksStart && window.pageYOffset < worksEnd) {
    worksLink.classList.add('navigation__link--hover');
  } else if (window.pageYOffset >= offerStart && window.pageYOffset < offerEnd) {
    offerLink.classList.add('navigation__link--hover');
  } else if (window.pageYOffset >= collaborationStart && window.pageYOffset < collaborationEnd) {
    collaborationLink.classList.add('navigation__link--hover');
  } else {
    mainLink.classList.add('navigation__link--hover');
  }

};

document.addEventListener('scroll', function () {

  if (window.pageYOffset > headerContact.offsetHeight) {
    nav.classList.add('navigation--active');
    navLogo.classList.add('navigation__logo-img--active');
  } else {
    nav.classList.remove('navigation--active');
    navLogo.classList.remove('navigation__logo-img--active');
  }

  showEl();
  onScrollNavMenu();

});

aboutLink.addEventListener('click', () => scrollToHandler(benefits));
worksLink.addEventListener('click', () => scrollToHandler(aboutMeSection));
offerLink.addEventListener('click', () => scrollToHandler(ourWorksSection));
collaborationLink.addEventListener('click', () => scrollToHandler(offerSection));
mainLink.addEventListener('click', () => window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
}));
