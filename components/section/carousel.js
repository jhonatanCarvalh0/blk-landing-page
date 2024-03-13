import imagesURL from "../../service/imageService.js";


export function carousel(category = 'obrasResidenciais'){
    return `
<h1 style="background-color: #f1f5f9; color: #0f172a">[[INICIO]]Teste de carrosel de imagens para aplicar a filtros</h1>
<div id="custom-controls-gallery" class="relative w-full grid gap-4 px-6" data-carousel="slide">
    ${generateCarouselWrapper(category)}
    ${generateSliderIndicators(category)}
</div>
<h1 style="background-color: #f1f5f9; color: #0f172a">[[FIM]]Teste de carrosel de imagens para aplicar a filtros</h1>

    `
}

function generateCarouselItem(srcURL){
    return ` <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src=${srcURL} class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
        </div>`
}
function generateCarouselWrapper(category) {
    if(category !== 'all'){
        let carouselImageItensHTML = ``;
        const imageCategoryURLArray = imagesURL[category]

        for (const imageCategoryURL in imageCategoryURLArray) {
            if(Object.hasOwnProperty.call(imageCategoryURLArray, imageCategoryURL)){
                const imageURL = imageCategoryURLArray[imageCategoryURL] // return a URL:string
                carouselImageItensHTML += generateCarouselItem(imageURL)
            }
        }

        return  `<div class="relative h-56 overflow-hidden rounded-lg md:h-96">${carouselImageItensHTML}</div>`
    }
}

function generateIndicators(categoryArray){
    let indicatorsImageList = ``
    let sliderId = 0

    const urlArray = categoryArray
    for (const url in urlArray){
        if (Object.hasOwnProperty.call(urlArray, url)){
            const indicatorImageURL = urlArray[url]
            indicatorsImageList += `
            <div class="indicator-wrapper max-h-45 overflow-hidden rounded-lg" style="max-width: 100px; max-height: 45px">
                <img 
                src=${indicatorImageURL} 
                class="rounded-lg" 
                style="height: 45px"
                data-carousel-slide-to="${sliderId}" 
                alt="Slide ${sliderId+1} Indicator">
            </div>`
            sliderId++
        }
    }
    return `${indicatorsImageList}`
}

function generateSliderIndicators(category){
    const categoryArray = imagesURL[category]
    const gridSize = Object.keys(categoryArray).length
    return `
         <!--  Slider indicators -->
    <div class="grid grid-cols-${gridSize} gap-4">
        ${generateIndicators(categoryArray)} 
    </div>
    
    `
}