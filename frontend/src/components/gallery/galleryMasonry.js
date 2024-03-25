//src: https://flowbite.com/docs/components/gallery/

import { sectionViewSeparator } from "../sectionViewSeparator.js";
import imagesURL from "../../service/imageService.js";
import imgObraResidenciais from "../../img/portifolio-blk/imagensSelecionadas/obrasResidenciais/index.js";

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

function image_add(srcURL) {
  return `
        <div class="inline-block image-container">
            <img class="h-auto max-w-full rounded-lg object-cover object-center" src=${srcURL} alt="">
<!--            <img src="${imgObraResidenciais}" alt="">-->
        </div>
    `;
}

function generateImageElements(imageType, imageQtd) {
  let imagesHTML = "";
  const imageTypeArray = imagesURL[imageType];

  let count = 0;

  for (const key in imageTypeArray) {
    if (count < imageQtd && Object.hasOwnProperty.call(imageTypeArray, key)) {
      const imageURL = imageTypeArray[key];
      imagesHTML += image_add(imageURL);
      count += 1;
    }
  }

  return `<div class="grid gap-4">${imagesHTML}</div>`;
}
