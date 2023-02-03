const category = (title, img, url) => {
    return `<div class="block-item">
                <a class="block-item-link" href="${url}">
                    <p class="block-item-title">${title}</p>
                    <div class="block-item-img">
                        <img src="${img}" alt="">
                    </div>
                </a>
            </div>`
}

export default category