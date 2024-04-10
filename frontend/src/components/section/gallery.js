//src: https://flowbite.com/docs/components/gallery/

import {sectionViewSeparator} from "../sectionViewSeparator.js";
import {galleryMasonry} from "../gallery/galleryMasonry.js";
import {
    galleryCarousel2,
    showSlides,
    startAutoSlide,
    addGalleryEventListeners
} from "../gallery/galleryCarousel2.js";


export function gallery(showSectionSeparator) {
  return `
    
    ${sectionViewSeparator("section4", showSectionSeparator)}
    <section id="gallery">
        ${tag_filters()}
        <div id="galleryPhotos">
            
        </div>
    </section>
`;
}

function tag_filters(){
  return `
    <div class="flex items-center justify-center dark:bg-zinc-950 flex-wrap" id="filterButtons">
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

export function galleryEventListener(id='galleryPhotos'){
    const gallerySection = document.getElementById(id)
    gallerySection.innerHTML = galleryMasonry();

    const selectAllButtons = document.querySelectorAll("button")


    selectAllButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;
            gallerySection.innerHTML = '';
            if (category !== 'all') {
                console.log('do something if category !== [all]')
                gallerySection.innerHTML = galleryCarousel2(category)
                showSlides(1);
                addGalleryEventListeners();
            }else{
                console.log('do something if category == [all]')
                gallerySection.innerHTML = galleryMasonry();
            }
        });
    });

}


