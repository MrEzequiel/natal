export default function initPortfolioPhotos() {
  const seeImageContainer = document.querySelector('.portfolio__see-images')
  const mainImage = document.querySelector('.portfolio__see-images__main-image')
  const imageControl = document.querySelectorAll(
    '.portfolio__see-images__images-control > img'
  )

  const buttonControlImage = document.querySelector('.see-image__button')
  const initialTextButton = buttonControlImage.innerHTML

  const portfolioImage = {
    verify() {
      seeImageContainer.classList.contains('active')
        ? portfolioImage.close()
        : portfolioImage.start()
    },

    changeMainImage({ target }) {
      if (target.classList.contains('active')) return null

      imageControl.forEach(image => {
        image.classList.remove('active')
      })

      target.classList.add('active')

      mainImage.style.backgroundImage = `url(${target.src})`
    },

    start() {
      seeImageContainer.classList.add('active')
      buttonControlImage.classList.add('close')

      buttonControlImage.innerHTML = `<img src="../assets/icons/close.svg" />`

      imageControl.forEach(image => {
        image.addEventListener('click', portfolioImage.changeMainImage)
      })
    },

    close() {
      seeImageContainer.classList.remove('active')
      buttonControlImage.innerHTML = initialTextButton
      buttonControlImage.classList.remove('close')

      imageControl.forEach(image => {
        image.removeEventListener('click', portfolioImage.changeMainImage)
      })
    }
  }

  buttonControlImage.addEventListener('click', portfolioImage.verify)
}
