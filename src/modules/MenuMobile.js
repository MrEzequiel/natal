export default function MenuMobile(button, menu, classActive = 'active') {
  const buttonMobile = document.querySelector(button)
  const menuMobile = document.querySelector(menu)

  const Modal = {
    getLinks() {
      const links = menuMobile.querySelectorAll('a')
      return Array.from(links)
    },

    close() {
      menuMobile.classList.remove(classActive)

      Modal.getLinks().forEach(link =>
        link.removeEventListener('click', Modal.close)
      )
    },

    open() {
      menuMobile.classList.add(classActive)

      Modal.getLinks().forEach(link =>
        link.addEventListener('click', Modal.close)
      )
    },

    verify() {
      menuMobile.classList.contains(classActive) ? Modal.close() : Modal.open()
    }
  }

  buttonMobile.addEventListener('click', Modal.verify)
}
