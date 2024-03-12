//src: https://flowbite.com/docs/components/gallery/

import {sectionViewSeparator} from "../sectionViewSeparator.js";


export function gallery(showSectionSeparator) {
  return `
 ${sectionViewSeparator("section4", showSectionSeparator)}
    
${tag_filters()}
<section id="gallery" class="grid grid-cols-2 px-6 md:grid-cols-4 gap-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 h-full dark:bg-zinc-950 dark:text-white"">
    <div class="grid gap-4">
        ${image_add('https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg')}
        ${image_add('https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg')}
        ${image_add('https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg')}
    </div>
    <div class="grid gap-4">
        ${image_add('https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg')}
        ${image_add('https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg')}
        ${image_add('https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg')}
    </div>
    <div class="grid gap-4">
        ${image_add('https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg')}
        ${image_add('https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg')}
        ${image_add('https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg')}
    </div>
    <div class="grid gap-4">
        ${image_add('https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg')}
        ${image_add('https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg')}
        ${image_add('https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg')}
    </div>
</section>


`;
}

function tag_filters(){
  return `
    <div class="flex items-center justify-center py-4 md:py-8 dark:bg-zinc-950 flex-wrap">
      <button type="button" class="text-zinc-950 border border-white hover:border-zinc-200 dark:border-zinc-950 dark:bg-zinc-800 dark:hover:border-zinc-700 bg-white focus:ring-4 focus:outline-none focus:ring-zinc-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-zinc-800">
      Todas as categorias</button>
      <button type="button" class="text-zinc-950 border border-white hover:border-zinc-200 dark:border-zinc-950 dark:bg-zinc-800 dark:hover:border-zinc-700 bg-white focus:ring-4 focus:outline-none focus:ring-zinc-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-zinc-800">
      Obras residenciais</button>
      <button type="button" class="text-zinc-950 border border-white hover:border-zinc-200 dark:border-zinc-950 dark:bg-zinc-800 dark:hover:border-zinc-700 bg-white focus:ring-4 focus:outline-none focus:ring-zinc-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-zinc-800">
      Reformas residenciais</button>
      <button type="button" class="text-zinc-950 border border-white hover:border-zinc-200 dark:border-zinc-950 dark:bg-zinc-800 dark:hover:border-zinc-700 bg-white focus:ring-4 focus:outline-none focus:ring-zinc-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-zinc-800">
      Reformas Comerciais</button>
    
    </div>
  `
}

function image_add(srcURL){
    return `
        <div>
            <img class="h-auto max-w-full rounded-lg" src=${srcURL} alt="">
            <img src="../../img/portifolio-blk/imagensSelecionadas/obrasResidenciais/" alt="">
        </div>
    `
}
const obrasResidenciaisFolder = '../../img/portifolio-blk/imagensSelecionadas/obrasResidenciais/'
const reformasResidenciaisFolder = '../../img/portifolio-blk/imagensSelecionadas/reformasResidenciais/'
const reformasComerciaisFolder = '../../img/portifolio-blk/imagensSelecionadas/reformasComerciais/'
const imagesURL = {
    obrasResidenciais : {
        img1: `${obrasResidenciaisFolder}ecovile-19-20-casa.jpg`,
        img2: `${obrasResidenciaisFolder}ecovile-19-20-externa.jpg`,
        img3: `${obrasResidenciaisFolder}ecovile-19-20-interna.jpg`,
        img4: `${obrasResidenciaisFolder}ecovile-19-20-interna-2.jpg`,
        img5: `${obrasResidenciaisFolder}ecovile-08-11-casa.jpg`,
        img6: `${obrasResidenciaisFolder}ecovile-08-11-interno-1.jpg`,
        img7: `${obrasResidenciaisFolder}ecovile-08-11-interno-2.jpg`,
        img8: `${obrasResidenciaisFolder}ecovile-08-11-interno-3.jpg`,
    },
    reformasComerciais: {
        deleiteInterno: `${reformasComerciaisFolder}deleite-interno.jpg`,
        deleiteExtenro: `${reformasComerciaisFolder}deleite-externo.jpg`,
        piticasInterno: `${reformasComerciaisFolder}piticas-interno.jpg`,
        piticasExterno: `${reformasComerciaisFolder}piticas-externo.jpg`,
    },
    reformasResidenciais: {
        img1: `${reformasResidenciaisFolder}green-ville-casa-A-1.jpg`,
        img2: `${reformasResidenciaisFolder}green-ville-casa-A-2.jpg`,
        img3: `${reformasResidenciaisFolder}green-ville-casa-A-3.jpg`,
        img4: `${reformasResidenciaisFolder}green-ville-casa-B-frente.jpg`,
        img5: `${reformasResidenciaisFolder}green-ville-casa-B-1.jpg`,
        img6: `${reformasResidenciaisFolder}green-ville-casa-B-2.jpg`,
        img7: `${reformasResidenciaisFolder}green-ville-casa-B-3.jpg`,
        img8: `${reformasResidenciaisFolder}rio-madeira-24-1.jpg`,
        img9: `${reformasResidenciaisFolder}rio-madeira-24-2.jpg`,
        img10: `${reformasResidenciaisFolder}rio-madeira-24-3.jpg`,
        img11: `${reformasResidenciaisFolder}rio-madeira-casa-60-1.jpg`,
        img12: `${reformasResidenciaisFolder}rio-madeira-casa-60-2.jpg`,
        img13: `${reformasResidenciaisFolder}rio-madeira-casa-60-3.jpg`,
        img14: `${reformasResidenciaisFolder}rio-madeira-casa-60-4.jpg`,
    }
       
        
}