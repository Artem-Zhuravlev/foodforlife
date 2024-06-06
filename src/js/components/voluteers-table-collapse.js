;(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const tableItems = document.querySelectorAll('.volunteers-table tr')
    const btn = document.querySelector('.volunteers-table__btn')

    if (!tableItems.length || !btn) return

    tableItems.forEach((item, index) => {
      if (index >= 5) {
        item.style.display = 'none'
      }
    })

    btn.addEventListener('click', (e) => {
      tableItems.forEach((item) => {
        item.removeAttribute('style')
      })

      e.target.style.display = 'none'
    })
  })
})()
