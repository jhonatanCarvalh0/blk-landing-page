//src: https://flowbite.com/docs/components/gallery/

import {sectionViewSeparator} from "../sectionViewSeparator.js";
import imagesURL from "../../service/imageService.js";


export function gallery(showSectionSeparator) {
  return `
 ${sectionViewSeparator("section4", showSectionSeparator)}
    
${tag_filters()}
<div>
    <section id="gallery" class="grid grid-cols-2 px-6 md:grid-cols-3 gap-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 h-full dark:bg-zinc-950 dark:text-white"">
        
    </section>
</div>

`;
}

function tag_filters(){
  return `
    <div class="flex items-center justify-center py-4 md:py-8 dark:bg-zinc-950 flex-wrap" id="filterButtons">
      <button 
      type="button" 
      data-category="all" 
      class="text-zinc-950 border border-white hover:border-zinc-200 dark:border-zinc-950 dark:bg-zinc-800 dark:hover:border-zinc-700 bg-white focus:ring-4 focus:outline-none focus:ring-zinc-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-zinc-800">
      Todas as categorias
      </button>
      <button 
      type="button" 
      data-category="obrasResidenciais" 
      class="text-zinc-950 border border-white hover:border-zinc-200 dark:border-zinc-950 dark:bg-zinc-800 dark:hover:border-zinc-700 bg-white focus:ring-4 focus:outline-none focus:ring-zinc-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-zinc-800">
      Obras residenciais
      </button>
      <button 
      type="button" 
      data-category="reformasResidenciais" 
      class="text-zinc-950 border border-white hover:border-zinc-200 dark:border-zinc-950 dark:bg-zinc-800 dark:hover:border-zinc-700 bg-white focus:ring-4 focus:outline-none focus:ring-zinc-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-zinc-800">
      Reformas residenciais
      </button>
      <button 
      type="button" 
      data-category="reformasComerciais"
      class="text-zinc-950 border border-white hover:border-zinc-200 dark:border-zinc-950 dark:bg-zinc-800 dark:hover:border-zinc-700 bg-white focus:ring-4 focus:outline-none focus:ring-zinc-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-zinc-800">
      Reformas Comerciais
      </button>
    </div>
  `
}

function image_add(srcURL){
    return `
        <div class="inline-block image-container">
            <img class="h-auto max-w-full rounded-lg object-cover object-center" src=${srcURL} alt="">
<!--            <img src="../../img/portifolio-blk/imagensSelecionadas/obrasResidenciais/" alt="">-->
        </div>
    `
}

function generateImageElements(imageType, imageQtd) {
    let imagesHTML = '';
    const imageTypeArray = imagesURL[imageType]

    let count = 0

    for (const key in imageTypeArray) {
        if (count < imageQtd && Object.hasOwnProperty.call(imageTypeArray, key)) {
            const imageURL = imageTypeArray[key];
            imagesHTML += image_add(imageURL)
            count += 1
        }
    }

    return `<div class="grid gap-4">${imagesHTML}</div>`;
}

export function galleryEventListener(id){
    const gallerySection = document.getElementById(id);
    gallerySection.innerHTML = `
    ${generateImageElements('obrasResidenciais', 3)}
    ${generateImageElements('reformasComerciais', 3)}
    ${generateImageElements('reformasResidenciais', 3)}
    `
        const selectAllButtons = document.querySelectorAll("button")
        selectAllButtons.forEach(button => {
            button.addEventListener('click', function() {
                const category = this.dataset.category;
                gallerySection.innerHTML = '';
                if (category !== 'all') {
                    gallerySection.innerHTML = generateImageElements(category, 4);
                }else{
                    gallerySection.innerHTML = `
                    ${generateImageElements('obrasResidenciais', 3)}
                    ${generateImageElements('reformasComerciais', 3)}
                    ${generateImageElements('reformasResidenciais', 3)}
                    `
                }

                console.log('Novas imagens geradas.'); // Log para verificar a geração das novas imagens
            });
        });

}


