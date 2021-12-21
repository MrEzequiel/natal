export default function initConfig() {
  const sections = [
    document.querySelector('#home'),
    document.querySelector('#about-us'),
    document.querySelector('#portfolio'),
    document.querySelector('#testimony'),
    document.querySelector('#faq'),
    document.querySelector('.footer')
  ]

  const cards = [
    document.querySelector('#testimony .card:nth-child(1)'),
    document.querySelector('#testimony .card:nth-child(2)'),
    document.querySelector('#testimony .card:nth-child(3)')
  ]

  const children = [
    document.querySelector('#home .home__presentation'),
    document.querySelector('#home .home__image'),
    document.querySelector('.footer__company'),
    document.querySelector('.footer__contact'),
    document.querySelector('.footer__informations')
  ]

  const options = {
    delay: 100,
    duration: 550,
    distance: '100px',
    easing: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
    opacity: 0,
    origin: 'left',
    reset: true
  }

  ScrollReveal().reveal(sections, options)

  cards.forEach((item, index) => {
    ScrollReveal().reveal(item, {
      ...options,
      duration: 600 * (index + 1),
      origin: 'top'
    })
  })

  children.forEach((item, index) => {
    ScrollReveal().reveal(item, {
      ...options,
      distance: '200px',
      duration: 800 * (index + 1),
      origin: 'top'
    })
  })
}
