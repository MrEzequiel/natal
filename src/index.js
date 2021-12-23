import AccordionFAQ from './modules/AccordionFAQ.js'
import initDateHome from './modules/DateHome.js'
import HeaderFixed from './modules/Header.js'
import MenuMobile from './modules/MenuMobile.js'
import initPortfolioPhotos from './modules/PortfolioPhotos.js'
import initConfig from './modules/ScrollRevealConfig.js'
import initSectionActive from './modules/SectionActive.js'

initConfig()

HeaderFixed()

AccordionFAQ('#faq .question', 'question--active')

MenuMobile('.header__nav__menu', '.header__nav > ul')

initPortfolioPhotos()

initDateHome()

initSectionActive('.header__nav li')
