let docHeight = document.body.offsetHeight,
    headerHeight = document.querySelector('header').offsetHeight,
    mainHeight = document.querySelector('main').offsetHeight,
    footerHeight = document.querySelector('footer').offsetHeight

orientationMobile()

window.addEventListener('orientationchange', () => orientationMobile())

function orientationMobile() {
    window.outerHeight < docHeight ? document.querySelector('footer').style.marginTop = '40px' : 
    document.querySelector('footer').style.marginTop = `${docHeight - headerHeight - mainHeight - footerHeight - 60}px`

    docHeight = document.body.offsetHeight
    headerHeight = document.querySelector('header').offsetHeight
    mainHeight = document.querySelector('main').offsetHeight
    footerHeight = document.querySelector('footer').offsetHeight
}