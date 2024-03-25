import imagesURL from "../../service/imageService.js";

export function galleryCarousel(category = "obrasResidenciais") {
  return `
        <div id="gallery-carousel" class="relative w-full grid gap-4 px-16" data-carousel="slide">
            ${generateCarouselWrapper(category)}
            ${generateSliderIndicators(category)}
        </div>
    `;
}

function generateCarouselItem(srcURL) {
  return ` 
        <!-- Item -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src=${srcURL} class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
        </div>`;
}

function generateCarouselWrapper(category) {
  if (category !== "all") {
    let carouselImageItensHTML = ``;
    const imageCategoryURLArray = imagesURL[category];

    for (const imageCategoryURL in imageCategoryURLArray) {
      if (Object.hasOwnProperty.call(imageCategoryURLArray, imageCategoryURL)) {
        const imageURL = imageCategoryURLArray[imageCategoryURL]; // return a URL:string
        carouselImageItensHTML += generateCarouselItem(imageURL);
      }
    }

    return `<!--  Slider wrapper --><div class="relative h-56 overflow-hidden rounded-lg md:h-96">${carouselImageItensHTML}</div>`;
  }
}

function generateIndicators(categoryArray) {
  let indicatorsImageList = ``;
  let sliderId = 0;

  const urlArray = categoryArray;
  for (const url in urlArray) {
    if (Object.hasOwnProperty.call(urlArray, url)) {
      const indicatorImageURL = urlArray[url];
      indicatorsImageList += `
            <div class="indicator-wrapper max-h-45 overflow-hidden rounded-lg" style="max-width: 100px; max-height: 45px">
                <img 
                src=${indicatorImageURL} 
                class="rounded-lg" 
                style="height: 45px; width: -webkit-fill-available;"
                data-carousel-slide-to="${sliderId}" 
                alt="Slide ${sliderId + 1} Indicator">
            </div>`;
      sliderId++;
    }
  }
  return `${indicatorsImageList}`;
}

function generateSliderIndicators(category) {
  const categoryArray = imagesURL[category];
  const gridSize = Object.keys(categoryArray).length;
  return `
         <!--  Slider indicators -->
    <div class="grid grid-cols-${gridSize} gap-4 justify-self-center" style="max-width: 80%">
        ${generateIndicators(categoryArray)} 
    </div>
    
    `;
}
