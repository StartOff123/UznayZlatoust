const linkCss = document.querySelector('#theme-link'),
      btn = document.querySelector('.visually-impaired-button'),
      btn2 = document.querySelector('.visually-menu')

function visuallyImpaired() {
    let theme
    if (linkCss.getAttribute('href') == 'css/style.css') {
        linkCss.href = 'css/visually_impaired.css'
        btn.textContent = 'Обычня версия'
        btn2.textContent = 'Обычня версия'
        theme = 'visually_impaired'
    } else {
        linkCss.href = 'css/style.css'
        btn.innerHTML = `Версия для <br> слабовидящих`
        btn2.innerHTML = `Версия для <br> слабовидящих`
        theme = 'style'
    }
    save(theme)
}

function save(theme) {
    var Request = new XMLHttpRequest()
    Request.open('GET', `../settings/visually_impaired.php?theme=${theme}`, true)
    Request.send()
}