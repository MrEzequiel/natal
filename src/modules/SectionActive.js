export default function initSectionActive(itens) {
  const itensElements = document.querySelectorAll(itens)

  const sections = [...itensElements].map(el => {
    const linkSrc = el.querySelector('a').href.split('#')[1]

    return document.querySelector(`#${linkSrc}`)
  })

  function checkWhichSession() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    sections.forEach(section => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute('id')

      const checkpointStart = checkpoint >= sectionTop
      const checkpointEnd = checkpoint <= sectionTop + sectionHeight

      if (checkpointStart && checkpointEnd) {
        document
          .querySelector('nav ul li a[href*=' + sectionId + ']')
          .classList.add('active')
      } else {
        document
          .querySelector('nav ul li a[href*=' + sectionId + ']')
          .classList.remove('active')
      }
    })
  }

  window.addEventListener('scroll', checkWhichSession)
  checkWhichSession()
}
