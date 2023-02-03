const info = (mapUrl, ex) => {
    return `<div class="slid">
                <div class="arrows__next arrows" index="1" id="arrow">
                    <svg index="1" id="arrow" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" class="bi bi-caret-right"
                        viewBox="0 0 16 16">
                        <path
                            index="1" id="arrow" d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                    </svg>
                </div>
                <div class="arrows__back arrows" index="-1" id="arrow">
                    <svg index="-1" id="arrow" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" class="bi bi-caret-left"
                        viewBox="0 0 16 16">
                        <path
                            index="-1" id="arrow" d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
                    </svg>
                </div>
                <div class="slider" style="right: 0; width: 000%">
                    
                </div>
                <div class="point__slide">
                    <div class="point__slide__border"></div>
                </div>
            </div>
            <div class="audio">
                <div class="audio-inner">
                    <audio controls class="audio-item" src="">
                    </audio>
                    ${ex ? `<button class="exredirect" data-href="${ex}">Задания</button>` : ''}
                    
                </div>
            </div>
            <div class="exersice"></div>
            <div class="content-info">
                <div class="content-inner">
                    <h1 class="content-title"></h1>
                    <p class="content-text">
                        
                    </p>
                </div>
            </div>
            ${mapUrl ? `
                <div class="map">
                    <h1>Карта</h1>
                    <iframe src="${mapUrl}"></iframe>
                </div>
            ` : ''}
            `
}

export default info