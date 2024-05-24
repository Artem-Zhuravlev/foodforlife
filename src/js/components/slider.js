import Swiper from 'swiper'
import { Navigation, Autoplay } from 'swiper/modules'

const settings = {
  modules: [Navigation, Autoplay],
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 15
    }
  },
  autoplay: true
}

function volunteersSlider() {
  if (!document.querySelector('.volunteers-slider')) return

  return new Swiper('.volunteers-slider', settings)
}

function documentsSlider() {
  if (!document.querySelector('.documents-slider')) return

  return new Swiper('.documents-slider', { ...settings, autoplay: false })
}

volunteersSlider()
documentsSlider()
