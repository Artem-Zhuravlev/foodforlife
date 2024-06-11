document.addEventListener('DOMContentLoaded', function () {
  const copyButtons = document.querySelectorAll('.requisites-list__copy')

  copyButtons.forEach((button) => {
    button.addEventListener('click', function () {
      copyButtons.forEach((btn) => {
        const copyIcon = btn.querySelector('.copy-icon')
        if (btn.contains(btn.querySelector('.copied-icon'))) {
          btn.removeChild(btn.querySelector('.copied-icon'))
        }
        copyIcon.style.display = 'inline'
      })

      const codeElement = this.previousElementSibling
      const textToCopy = codeElement.innerText

      const tempTextarea = document.createElement('textarea')
      tempTextarea.value = textToCopy
      document.body.appendChild(tempTextarea)
      tempTextarea.select()
      tempTextarea.setSelectionRange(0, 99999)

      try {
        document.execCommand('copy')
        const copyIcon = this.querySelector('.copy-icon')
        copyIcon.style.display = 'none'

        const copiedIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        copiedIcon.setAttribute('class', 'copied-icon')
        copiedIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
        copiedIcon.setAttribute('viewBox', '0 0 448 512')
        copiedIcon.setAttribute('width', '20')
        copiedIcon.setAttribute('height', '20')
        copiedIcon.innerHTML =
          '<path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"/>'
        this.appendChild(copiedIcon)

        setTimeout(() => {
          copiedIcon.remove()
          copyIcon.style.display = 'inline'
        }, 2000)
      } catch (err) {
        console.error('Произошла ошибка при копировании текста', err)
      }

      document.body.removeChild(tempTextarea)
    })
  })
})
