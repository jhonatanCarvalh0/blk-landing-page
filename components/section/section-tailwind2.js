// src: https://flowbite.com/blocks/marketing/content/
import {sectionViewSeparator} from "../sectionViewSeparator.js";

export function sectionTailwind2(showSectionSeparator) {
  return `
${sectionViewSeparator('section2', showSectionSeparator)}
    <section id="about-us" class="bg-white dark:bg-zinc-950">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
<!--TITULO DA SEÇÃO-->
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-zinc-950 dark:text-white">
            Sobre Nós
            </h2>
            <p class="mb-4">[TEXTO DE APRESENTAÇÃO DA EQUIPE]</p>
            <p>[OUTRO TEXTO DE APRESENTAÇÃO DA EQUIPE]</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">


            <div class="max-w-sm rounded overflow-hidden shadow-lg border border-white">
            <img class="w-full" src="https://img.freepik.com/fotos-gratis/homem-construtor-de-tiro-medio-olhando-para-longe_23-2148751955.jpg?t=st=1709761698~exp=1709765298~hmac=25e183c3322772ad09cd7cb7603dc11c5a8f58e3145eca0f3454ea6b3947d22b&w=740" alt="Sunset in the mountains">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-white">The Coldest Sunset</div>
                <p class="text-white text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            </div>

            <div class="max-w-sm rounded overflow-hidden shadow-lg border border-white">
            <img class="w-full" src="https://img.freepik.com/fotos-gratis/imagem-de-homem-bonito-posando-no-estudio_613910-7500.jpg?t=st=1709761726~exp=1709765326~hmac=d97e81af9ca91a85a3c0a94a3b08aacc5fdb04b2534c0dea53069871d76bf4af&w=740" alt="Sunset in the mountains">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-white">The Coldest Sunset</div>
                <p class="text-white text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            </div>
        </div>
    </div>
</section>

`;
}
