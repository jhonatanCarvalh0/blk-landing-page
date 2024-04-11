//src: https://flowbite.com/docs/components/gallery/

import { sectionViewSeparator } from "../sectionViewSeparator.js";
import jpgImagesURL from "../../service/imageServiceJpg.js";
import webpImagesURL from "../../service/imageServiceWebp.js";

export function galleryMasonry(showSectionSeparator) {
  return `
 ${sectionViewSeparator("section4", showSectionSeparator)}    
    <div class="grid grid-cols-2 px-6 md:grid-cols-3 gap-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 h-full dark:bg-zinc-950 dark:text-white"">
        ${generateImageElements("obrasResidenciais", 3)}
        ${generateImageElements("reformasComerciais", 3)}
        ${generateImageElements("reformasResidenciais", 3)}
    </div>
`;
}

function generatePictureElement(srcURL_jpeg, srcURL_webp) {
  return `
        <div class="inline-block image-container">
                <picture>
                <source class="h-auto max-w-full rounded-lg object-cover object-center" srcset="${srcURL_webp}" type="image/webp">
                <img class="h-auto max-w-full rounded-lg object-cover object-center" src="${srcURL_jpeg}" alt="">
            </picture>
        </div>
    `;
}

function generateImageElements(imageType, imageQtd) {
    let imagesHTML = "";
    const imageTypeArrayJpeg = jpgImagesURL[imageType];
    const imageTypeArrayWebp = webpImagesURL[imageType];

    let count = 0;

    for (const key in imageTypeArrayJpeg) {
        if (count < imageQtd && Object.hasOwnProperty.call(imageTypeArrayJpeg, key)) {
            const imageWebpURL = imageTypeArrayWebp[key];
            const imageJpegURL = imageTypeArrayJpeg[key];
            imagesHTML += generatePictureElement(imageJpegURL, imageWebpURL);
            count += 1;
        }
    }

    return `<div class="grid gap-4">${imagesHTML}</div>`;
}
