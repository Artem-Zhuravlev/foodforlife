document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector("a[href='#pll_switcher']")
  if (!btn) return

  function next(el, selector) {
    const nextEl = el.nextElementSibling
    if (!selector || (nextEl && nextEl.matches(selector))) {
      return nextEl
    }
    return null
  }

  const menu = next(btn)

  btn.addEventListener('click', (e) => {
    e.preventDefault()
    menu.classList.toggle('active')
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      menu.classList.remove('active')
    }
  })
})
