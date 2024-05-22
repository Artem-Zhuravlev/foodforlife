import Swiper from 'swiper'
import { Navigation, Autoplay } from 'swiper/modules'

const swiper = new Swiper('.volunteers-slider', {
  modules: [Navigation, Autoplay],
  slidesPerView: 3,
  spaceBetween: 15,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  autoplay: true
})
