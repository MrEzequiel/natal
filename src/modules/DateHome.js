export default function initDateHome() {
  const title = document.querySelector('.presentation__title')
  const span = title.querySelector('span')

  const dateUser = new Date()

  let nextChristmasDate

  if (dateUser.getDate() > 25 && dateUser.getMonth() + 1 === 12) {
    nextChristmasDate = new Date(`12/25/${dateUser.getFullYear() + 1}`)
  } else {
    nextChristmasDate = new Date(`12/25/${dateUser.getFullYear()}`)
  }

  if (
    dateUser.getDate() === nextChristmasDate.getDate() &&
    nextChristmasDate.getFullYear() === dateUser.getFullYear()
  ) {
    title.innerText = 'Feliz Natal! Aproveite'
  } else {
    const diff = Math.abs(nextChristmasDate.getTime() - dateUser.getTime())
    const daysDiff = Math.ceil(diff / (1000 * 60 * 60 * 24))

    if (daysDiff >= 100) {
      span.classList.add('small')
    }

    span.innerText = daysDiff < 10 ? '0' + daysDiff : daysDiff
  }
}
