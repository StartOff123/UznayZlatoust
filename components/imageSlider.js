const imagesSlider = (key, directoire, index) => {
    if (key == 'zlatoust') {
        return `<div class="inner__slider">
                    <img src="img/${key}/${key} (${index}).jpg" onclick="openImg(this)" alt="" />
                </div>`
    } 
    return `<div class="inner__slider">
                <img src="img/${directoire}/${key}/${key} (${index}).jpg" onclick="openImg(this)" alt="" />
            </div>`
    
}

export default imagesSlider