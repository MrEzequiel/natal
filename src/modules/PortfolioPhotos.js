export default function initPortfolioPhotos() {
  const modalContainer = document.querySelector('.modal-overlay')
  const photosContainer = document.querySelector(
    '.modal-photos__photos-container'
  )
  const mainContainer = document.querySelector('.modal-photos__photos')

  const buttonsControl = {
    open: document.querySelector('.see-image__button'),
    close: document.querySelector('.modal-photos__btn-close'),
    next: document.querySelector('.modal-photos__btn-next'),
    prev: document.querySelector('.modal-photos__btn-prev')
  }

  let itemPhotos = null

  const portfolioPhotos = {
    open() {
      modalContainer.classList.add('active')
      buttonsControl.close.addEventListener('click', portfolioPhotos.close)

      portfolioPhotos.startSlide()

      window.addEventListener('resize', portfolioPhotos.createItemPhotos)
    },

    createItemPhotos() {
      let position = 0
      if (itemPhotos) {
        position = portfolioPhotos.getCurrent()
      }

      itemPhotos = [...photosContainer.children].map((img, index) => {
        return {
          el: img,
          position: mainContainer.offsetWidth * index++
        }
      })

      itemPhotos.push(position)

      photosContainer.style.transform = `translate3d(-${itemPhotos[position].position}px, 0, 0)`
    },

    close() {
      modalContainer.classList.remove('active')
      photosContainer.style.transform = `translate3d(0, 0, 0)`

      buttonsControl.close.removeEventListener('click', portfolioPhotos.close)
      buttonsControl.next.removeEventListener('click', portfolioPhotos.next)
      buttonsControl.prev.removeEventListener('click', portfolioPhotos.prev)
      window.removeEventListener('resize', portfolioPhotos.createItemPhotos)
    },

    startSlide() {
      this.createItemPhotos()

      buttonsControl.next.addEventListener('click', portfolioPhotos.next)
      buttonsControl.prev.addEventListener('click', portfolioPhotos.prev)

      portfolioPhotos.verify()
    },

    getCurrent: () => itemPhotos[itemPhotos.length - 1],

    verify() {
      if (itemPhotos[portfolioPhotos.getCurrent() + 1].el) {
        buttonsControl.next.disabled = false
      } else {
        buttonsControl.next.disabled = true
      }

      if (!itemPhotos[portfolioPhotos.getCurrent() - 1]) {
        buttonsControl.prev.disabled = true
      } else {
        buttonsControl.prev.disabled = false
      }
    },

    next() {
      console.log(itemPhotos)

      itemPhotos[itemPhotos.length - 1]++
      photosContainer.style.transform = `translate3d(-${
        itemPhotos[portfolioPhotos.getCurrent()].position
      }px, 0, 0)`

      portfolioPhotos.verify()
    },

    prev() {
      console.log(itemPhotos)
      itemPhotos[itemPhotos.length - 1]--

      photosContainer.style.transform = `translate3d(-${
        itemPhotos[portfolioPhotos.getCurrent()].position
      }px, 0, 0)`

      portfolioPhotos.verify()
    }
  }

  buttonsControl.open.addEventListener('click', portfolioPhotos.open)
}
