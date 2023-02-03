const modalBg = document.querySelector('.modal-bg'),
      modalImg = document.querySelector('.modal-img'),
      modalImgId = document.querySelector('#modal-img')

let imgObject

function openImg(img) {
    const imgPath = img.getAttribute('src')
    imgObject = img

    modalBg.style.cssText = `display: block;`
    modalImg.style.cssText = `top: 30px;`
    modalImgId.setAttribute('src', imgPath)
}

function closeImg() {
    modalBg.style.cssText = `display: none;`
    modalImg.style.cssText = `top: -100%;`
    modalImgId.setAttribute('src', '')
}

document.addEventListener('click', event => {
    const emptySpace = event.composedPath().includes(modalImg)
    const emptySpaceImg = event.composedPath().includes(imgObject)

    if (!emptySpace && !emptySpaceImg) closeImg()
})