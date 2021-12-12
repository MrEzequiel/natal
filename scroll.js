const header = document.querySelector('.header')

const verifyScroll = () => {
  if (window.pageYOffset > 0) {
    header.classList.add('header--scroll')
  } else {
    header.classList.remove('header--scroll')
    window.scroll(0, 0)
  }
}

window.addEventListener('scroll', verifyScroll)

verifyScroll()
