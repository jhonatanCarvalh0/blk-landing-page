// src: https://flowbite.com/blocks/marketing/content/
// src2: https://flowbite.com/blocks/marketing/team/
import {sectionViewSeparator} from "../sectionViewSeparator.js";

export function aboutUs(showSectionSeparator) {
  return `
    ${sectionViewSeparator('section2', showSectionSeparator)}
    ${sobreNos()}
`;
}

function sobreNos(){
  return `<section id="about-us" class="bg-white dark:bg-zinc-950">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <!--TITULO DA SEÇÃO-->
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-zinc-950 dark:text-white">
            QUEM SOMOS
            </h2>
            <p class="mb-4 text-justify">
            A BLK ENGENHARIA é empresa referência em soluções para execução de obras civis de engenharia. Com seu foco calçado na sustentabilidade e inovação, busca sempre suprir a necessidade de seus clientes entregando execuções de obras com alta qualidade, aliado a uma gestão eficiente. 
            </p>
            <p class="mb-4 text-justify">
            Atua em obras civis de diversos seguimentos da construção, prestando serviços tanto para pessoas física quanto para pessoas jurídica. Tem em seu quadro técnico equipe multidisciplinar e especializada de engenheiros civis, elétricos, mecânicos e arquitetos, prontos para oferecer soluções rápidas às demandas de seus clientes.
            </p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1">
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2">
        </div>
    </div>
</section>`
}

