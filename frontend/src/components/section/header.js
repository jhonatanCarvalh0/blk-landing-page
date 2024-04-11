//src: https://flowbite.com/blocks/marketing/hero/
import { sectionViewSeparator } from "../sectionViewSeparator.js";
import blkLogoBranca from "../../img/logos-blk/logo-blk-branca.svg";

export function header(showSectionSeparator) {
  return `
    ${sectionViewSeparator("section1", showSectionSeparator)}
    <section id="home" class="bg-white dark:bg-zinc-950">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            BLK ENGENHARIA
            </h1>
            <p class="max-w-2xl mb-6 font-light text-zinc-500 lg:mb-8 md:text-lg lg:text-xl dark:text-zinc-400">
            Especialista em execuções
de obras civis
            </p>
            <a href="#contact-us" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-zinc-800 hover:bg-zinc-100 hover:text-zinc-950 focus:ring-4 focus:ring-zinc-300 dark:focus:ring-zinc-900">
                Faça um Agendamento
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd">
            </path></svg>
            </a>
            <a href="#contact-us" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-zinc-950 border border-zinc-300 rounded-lg hover:bg-zinc-100 focus:ring-4 focus:ring-zinc-100 dark:text-white dark:border-zinc-700 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800">
                Contato
            </a> 
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img loading="lazy" width="100%" src="${blkLogoBranca}" alt="logo BLK">
        </div>                
    </div>
</section>

`;
}
