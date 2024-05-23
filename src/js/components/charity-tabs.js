document.addEventListener('DOMContentLoaded', () => {
  const btns = document.querySelectorAll('.charity-controls__btn')
  const tabs = document.querySelectorAll('.charity-wrapper__tab')
  let currentIndex = 0

  const updateTabsAndButtons = (index) => {
    btns.forEach((btn, idx) => {
      btn.classList.toggle('charity-controls__btn--active', idx === index)
    })

    tabs.forEach((tab, idx) => {
      tab.style.display = idx === index ? '' : 'none'
    })
  }

  const handleButtonClick = (index) => {
    currentIndex = index
    updateTabsAndButtons(currentIndex)
  }

  btns.forEach((btn, index) => {
    btn.addEventListener('click', () => handleButtonClick(index))
  })

  updateTabsAndButtons(currentIndex)
})
