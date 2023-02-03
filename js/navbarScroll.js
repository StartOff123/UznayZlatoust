const navBarHeight = document.querySelector('header').scrollHeight,
      menu = document.querySelector('.menu')

let navButton,
    burgerMenu
    
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop
    scrollTop >= navBarHeight * 2 ? menu.style.cssText = `top: 0%;` : menu.style.cssText = `top: -100%;`

    if (navButton === undefined) return
    if (navButton.classList.contains('opened') === true) {
        navButton.classList.remove('opened')
        burgerMenu.style.cssText = `top: -600%;`
    }
})

function openMenu(btn, menu) {
    if (btn.classList.contains('opened') === true) {
        btn.classList.remove('opened')
        menu.style.cssText = `top: -600%;`
    } else {
        btn.classList.add('opened')
        menu.style.cssText = `top: 100%;`
    }
    navButton = btn
    burgerMenu = menu
}

document.addEventListener('click', event => {
    const {target} = event
    const menu = event.composedPath().includes(burgerMenu)
    const btn = event.composedPath().includes(navButton)

    if (!menu && !btn) {
        if (navButton == undefined) return
        navButton.classList.remove('opened')
        burgerMenu.style.cssText = `top: -600%;`
    }

    if (target.matches('a')) {
        if (navButton == undefined) return
        navButton.classList.remove('opened')
        burgerMenu.style.cssText = `top: -600%;`
    }
})