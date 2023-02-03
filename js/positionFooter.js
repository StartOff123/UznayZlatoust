const positionFooter = () => {
    let windowHeight = window.innerHeight,
        rootHeight = document.querySelector('.root').clientHeight,
        footerHeight = document.querySelector('footer').clientHeight,
        headerHeight = document.querySelector('header').clientHeight

    if (rootHeight + footerHeight + headerHeight + 60 > windowHeight) document.querySelector('footer').style.position = 'relative'
    else document.querySelector('footer').style.position = 'absolute'
}

positionFooter()
window.addEventListener('resize', () => positionFooter() )
window.addEventListener('load', () => positionFooter() )