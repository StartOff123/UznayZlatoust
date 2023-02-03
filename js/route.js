// Импорты компонентов для динамической подргузки
import develop from '../components/develop.js'
import info from '../components/info.js'
import category from '../components/caterory.js'
import imagesSlider from '../components/imageSlider.js'
import err404 from '../components/404.js'
import loading from '../components/loading.js'
import exersice from '../components/exersice.js'

// Постоянные переменные для функций
let slidesLenght,
    slaid = 0

document.querySelector('.main-inner').innerHTML = loading()

// Call back-и 

// Call back при клике на ссылку в навигации
document.addEventListener("click", e => {
    const { target } = e
    if (!target.matches('a')) return
    document.querySelector('.main-inner').innerHTML = loading()
    e.preventDefault()
    let path = target.href
    window.history.pushState({}, "", path)
    handleLocation(target.getAttribute('data-href'))
})

// Call back при клике кнопок "вперед" и "назад" на слайдере
document.addEventListener('click', event => {
    const { target } = event
    if (!target.matches('#arrow')) return
    clickArrow(Number(target.getAttribute('index')))
})

// Редирект на страницу с заданиями
document.addEventListener('click', event => {
    const { target } = event
    if (!target.matches('.exredirect')) return
    const href = target.getAttribute('data-href')
    if (href == 'exersice') {
        if (document.querySelector('.exBlock')) {
            document.querySelector('.exBlock').remove()
            document.querySelector('.exredirect').innerHTML = 'Задания'
            return
        }

        document.querySelector('.exredirect').innerHTML = 'Скрыть'
        fetch('../JSONData/exersice.json').then(res => res.json()).then(data => {
            const exArray = data.ex.map((item, index) => `${index + 1}. ${item}`)
            const exString = exArray.join(" <br> ")
            document.querySelector('.exersice').innerHTML = exersice(exString)
        })
        return
    }
    window.location.href = href
})

// Call back при загрузки странницы для обновления контента в зависимости от текущего URL 
window.addEventListener('load', () => {
    document.querySelector('.main-inner').innerHTML = loading()
    positionFooter()
    const location = window.location.hash.split('?')
    if (!window.location.hash == '') handleLocation(location[0])
    else handleLocation('/')
})

// Call back при возврате на предидущую страницу для подргузки данных.
window.addEventListener('popstate', () => {
    document.querySelector('.main-inner').innerHTML = loading()
    positionFooter()
    const location = window.location.hash.split('?')
    if (!window.location.hash == '') handleLocation(location[0])
    else handleLocation('/')
})

// Call back при динамическом изминении размеров экрана
window.addEventListener('resize', () => positionFooter() )

// Объект маршрутов в зависимости от URL 
const routes = {
    404: err404,
    "/": info,
    "#/pages": info,
    "#/develop": develop,
    "#/categories": category,
}

// Call back динамичекой подгрузки данных в зависимости от URL
const handleLocation = async path => {
    window.scrollTo(0, 0)

    // Отределение текущего маршрута
    const route = routes[path] || routes[window.location.pathname] || routes[404]

    // Условие подргузки данных от текущего маршрута
    switch (route) {
        case info : {

            // Чтение json-файла и заполенение контентом из этого файла
            await fetch('../JSONdata/info.json').then(response => response.json()).then(json => {
                for (let element of json) {
                    try {
                        if (element.key == 'zlatoust') { 
                            // заполнение контентом уже подргуженного компонента страницы
                            document.querySelector('.main-inner').innerHTML = info()
                            document.querySelector('.path-block-category').classList.remove('active')
                            document.querySelector('.path-block-infopage').classList.remove('active')
                            document.querySelector('.user-path').style.display = 'none'
                            infoConstructor(element.title, element.text, element.audio)
                            sliderConstructor(element.imgCount, 'zlatoust')
                            linkActive()
                        } else {
                            // Опреденеие условия маршрута
                            const hash = window.location.hash.split('?')
                            const params = hash[1].split('=')
                            if (element.key == params[1]) {
                                // заполнение контентом уже подргуженного компонента страницы
                                const path = document.querySelector('.path-block-infopage a')
                                document.querySelector('.main-inner').innerHTML = info(element.mapUrl, element.ex)
                                document.querySelector('.user-path').style.display = 'flex'
                                document.querySelector('.path-block-infopage').classList.add('active')
                                document.querySelector('.path-block-category').classList.add('active')
                                path.textContent = element.title
                                path.setAttribute('href', `#/pages?iteminfo=${element.key}`)
                                fetch('../JSONdata/categories.json').then(response => response.json()).then(json => {
                                    json.forEach(data => {
                                        if (data.key === element.category) {
                                            document.querySelector('.path-block-category a').textContent = data.title
                                            document.querySelector('.path-block-category a').setAttribute('href', `#/categories?key=${data.key}`)
                                        }
                                    })
                                })
                                infoConstructor(element.title, element.text, element.audio)
                                sliderConstructor(element.imgCount, element.key, element.category)
                                // Отпределение активной сслыки для визульного показа на стрнице 
                                const activeLink = document.querySelectorAll(`.nav-link`)
                                activeLink.forEach(link => {
                                    if (link.querySelector('a').getAttribute('href') == `#/categories?key=${element.category}`) link.classList.add('link-active')
                                })
                            }                
                        }
                    } catch { break }
                } 
            })
            break
        }

        case category : {
            // Опреденеие условия маршрута
            const hash = window.location.hash.split('?')
            const params = hash[1].split('key=')

            // Чтение json-файла и заполенение контентом из этого файла
            await fetch('../JSONdata/categories.json').then(response => response.json()).then(json => {
                document.querySelector('.main-inner').innerHTML = ''
                json.forEach(element => {
                    if (element.key == params[1]) {
                        // заполнение контентом уже подргуженного компонента страницы
                        document.querySelector('.user-path').style.display = 'flex'
                        document.querySelector('.path-block-category').classList.add('active')
                        document.querySelector('.path-block-category a').textContent = element.title
                        document.querySelector('.path-block-category a').setAttribute('href', `#/categories?key=${element.key}`)
                        document.querySelector('.path-block-infopage').classList.remove('active')
                        document.querySelector('.main-inner').innerHTML += category(element.category.title, element.category.img, '#/pages?iteminfo=' + element.category.url)
                        document.title = element.title
                        linkActive()
                    }
                })
            })
            break
        }

        case develop : {
            document.querySelector('.main-inner').innerHTML = develop()
            document.title = 'В разработке'
            break
        }
    }
    positionFooter()
}

// Функция выделения активной ссылки
function linkActive() {
    const link = document.querySelectorAll('.nav-link')
    link.forEach(link => {
        if (link.querySelector('a').getAttribute('href') == window.location.hash) link.classList.add('link-active')
        else link.classList.remove('link-active')
    })
}

// Функция для прижатия подвала, если контентная часть меньше высоты экрана
function positionFooter() {
    let windowHeight = window.innerHeight,
        rootHeight = document.querySelector('.root').clientHeight,
        footerHeight = document.querySelector('footer').clientHeight,
        headerHeight = document.querySelector('header').clientHeight

    if (rootHeight + footerHeight + headerHeight + 60 > windowHeight) document.querySelector('footer').style.position = 'relative'
    else document.querySelector('footer').style.position = 'absolute'
}

// Функция законения слайдера картинками
function sliderConstructor(conunt, key, dir) {
    const slider = document.querySelector('.slider')
    document.querySelector(".slider").innerHTML = ''
    for (let i = 1; i <= conunt; i++) {
        slider.innerHTML += imagesSlider(key, dir, i)
    }
    slider.style.cssText = `width: ${conunt}00%; right: 0;`
    setTimeout(() => slider.style.cssText = `width: ${conunt}00%; right: 0; transition: all 1s;`, 100)
    if(document.getElementsByClassName('points')) document.querySelectorAll('points').forEach(el => el.remove())
    slidesLenght = conunt
    points(conunt)
    document.querySelector('.points').classList.add('active')
}

// Функция заполнения контента
function infoConstructor(title, text, audio) {
    document.querySelector('.content-title').innerHTML = title
    document.querySelector('.content-text').innerHTML = text
    document.querySelector('audio').src = `audio/${audio}`
    document.title = title
}

// Функция добавления индикаторов слайдера в зависимости от колличества картинок
function points(count) {
    document.querySelector(".point__slide__border").innerHTML = ''
    let point = document.createElement('span')
    point.className = 'points'
    for (let i = 1; i <= count; i++) document.querySelector('.point__slide__border').appendChild(point.cloneNode(true))
}

// Функция пролистывание слайдера в зависимости от нажатой кнопки("вперед" и "назад")
function clickArrow(index) {
    slaid = slaid + index
    if (slaid > slidesLenght - 1) slaid = 0
    if (slaid < 0) slaid = slidesLenght - 1
    document.querySelector('.slider').style.right = slaid + '00%'
    checkPoint(slaid)
}

// Функция определения активного элемента индикатора в зависимости от текущего слайда
function checkPoint(index) {
    const points = document.querySelectorAll('.points')
    points.forEach(element => {
        if (element.classList.contains('active') === true) element.classList.remove('active')
    })
    points[index].classList.add('active')
}