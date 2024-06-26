import { disableScroll } from '../functions/disable-scroll.js'
import { enableScroll } from '../functions/enable-scroll.js'
;(function () {
  const burger = document.querySelector('[data-burger]')
  const menu = document.querySelector('[data-menu]')
  const menuItems = document.querySelectorAll('[data-menu-item]')

  burger.addEventListener('click', (e) => {
    burger.classList.toggle('header__burger--active')
    menu.classList.toggle('header__controls--active')

    if (menu.classList.contains('header__controls--active')) {
      burger.setAttribute('aria-expanded', 'true')
      burger.setAttribute('aria-label', 'Close menu')
      disableScroll()
    } else {
      burger.setAttribute('aria-expanded', 'false')
      burger.setAttribute('aria-label', 'Open menu')
      enableScroll()
    }
  })

  menuItems.forEach((el) => {
    el.addEventListener('click', () => {
      closeMenu()
    })
  })

  const closeMenu = () => {
    burger.setAttribute('aria-expanded', 'false')
    burger.setAttribute('aria-label', 'Open menu')
    burger.classList.remove('header__burger--active')
    menu.classList.remove('header__controls--active')
    overlay.classList.remove('overlay--active')
    enableScroll()
  }
})()
