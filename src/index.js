import AccordionFAQ from './modules/AccordionFAQ.js'
import HeaderFixed from './modules/Header.js'
import MenuMobile from './modules/MenuMobile.js'

HeaderFixed()

AccordionFAQ('#faq .question', 'question--active')

MenuMobile('.header__nav__menu', '.header__nav > ul')
