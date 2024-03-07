//src: https://flowbite.com/docs/components/gallery/

import {sectionViewSeparator} from "../sectionViewSeparator.js";

export function sectionTailwind4(showSectionSeparator) {
  return `
 ${sectionViewSeparator("section4", showSectionSeparator)}
    
${tag_filters()}
<section id="gallery" class="grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 h-full dark:bg-zinc-950 dark:text-white"">
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="">
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="">
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="">
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="">
        </div>
    </div>
</section>


`;
}

function tag_filters(){
  return `
    <div class="flex items-center justify-center py-4 md:py-8 dark:bg-zinc-950 flex-wrap">
      <button type="button" class="text-zinc-950 border border-white hover:border-zinc-200 dark:border-zinc-950 dark:bg-zinc-800 dark:hover:border-zinc-700 bg-white focus:ring-4 focus:outline-none focus:ring-zinc-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-zinc-800">
      All categories</button>
      <button type="button" class="text-zinc-950 border border-white hover:border-zinc-200 dark:border-zinc-950 dark:bg-zinc-800 dark:hover:border-zinc-700 bg-white focus:ring-4 focus:outline-none focus:ring-zinc-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-zinc-800">
      Shoes</button>
      <button type="button" class="text-zinc-950 border border-white hover:border-zinc-200 dark:border-zinc-950 dark:bg-zinc-800 dark:hover:border-zinc-700 bg-white focus:ring-4 focus:outline-none focus:ring-zinc-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-zinc-800">
      Bags</button>
      <button type="button" class="text-zinc-950 border border-white hover:border-zinc-200 dark:border-zinc-950 dark:bg-zinc-800 dark:hover:border-zinc-700 bg-white focus:ring-4 focus:outline-none focus:ring-zinc-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-zinc-800">
      Electronics</button>
      <button type="button" class="text-zinc-950 border border-white hover:border-zinc-200 dark:border-zinc-950 dark:bg-zinc-800 dark:hover:border-zinc-700 bg-white focus:ring-4 focus:outline-none focus:ring-zinc-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-zinc-800">
      Gaming</button>
    </div>
  `
}

