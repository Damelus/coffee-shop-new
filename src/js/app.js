import * as dFunctions from "./modules/functions.js";

dFunctions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper('.swiper', {
	loop: true,
  slidesPerView: 3,
  speed: 500,
  spaceBetween: 30,
  centeredSlides: true,
	swipe: true,
  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },
	breakpoints: {
		375: {
			slidesPerView: 1,
			loop: false,
			direction: 'vertical',
		}
	}
});

//*---------------------------------------------------------*//
const menu = document.querySelector('.nav-right')
const menuBtn = document.querySelector('.nav__burger-icon')

const body = document.body;

if (menu && menuBtn) {
	menuBtn.addEventListener('click', e => {
		menu.classList.toggle('active')
		menuBtn.classList.toggle('active')
		body.classList.toggle('lock')
	})

	menu.addEventListener('click', e => {
		if (e.target.classList.contains('nav-right')) {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		}
	})

	menu.querySelectorAll('.nav-link').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		})
	})
}


const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', event => {
		event.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
})