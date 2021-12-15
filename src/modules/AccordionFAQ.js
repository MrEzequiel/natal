export default function AccordionFAQ(el, classActive) {
  const accordions = document.querySelectorAll(el)

  const handlerClick = ({ currentTarget }) => {
    currentTarget.classList.toggle(classActive)

    const icon = currentTarget.querySelector('.question__icon')
    if (currentTarget.classList.contains(classActive)) {
      icon.src = './assets/icons/minus.svg'
    } else {
      icon.src = './assets/icons/plus.svg'
    }
  }

  accordions.forEach(accordion =>
    accordion.addEventListener('click', handlerClick)
  )
}
