// src: https://flowbite.com/blocks/marketing/content/
// src2: https://flowbite.com/blocks/marketing/team/
import {sectionViewSeparator} from "../sectionViewSeparator.js";

export function sectionTailwind2(showSectionSeparator) {
  return `
    ${sectionViewSeparator('section2', showSectionSeparator)}
    ${sobreNos()}
    ${nossaEquipe()}

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

function nossaEquipe(){
  return`
    <section class="bg-white dark:bg-zinc-950">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Nossa Equipe Técnica</h2>
              <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Engneharia Civil, Arquitetura e Urbanismo, Engenharia Elétrica</p>
          </div> 
          <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                ${teamMember('', 'Emerson Thiago Ferreira da Silva', ['Engenheiro Civil', 'Gestor', 'CREA: 14903D/RO'])}
                ${teamMember('', 'Gustavo Portugal Ventura', ['Engenheiro Civil', 'Sócio Gestor', 'CREA: 18568D/RO'])}
                ${teamMember('', 'Paloma Nascimento', ['Arquiteta e Urbanista', 'BIM Manager', 'CAU: A279906-5'])}
                ${teamMember('', 'Ronaldo Luã Gabriel de Souza Pena', ['Engenheiro Eletricista', 'CREA: 17238D/RO'])}
          </div>  
      </div>
    </section>
  `
}

function teamMember(urlFotoMembro = '', nomeMembro = 'nome_membro', memberInfo = ['cargo & infos'], socialMedia = ['https://facebook.com/@BLKEngenhariapvh', 'https://x.com', 'https://instagram.com/blk_engenharia', '#inicio']){
  if (!urlFotoMembro){
    urlFotoMembro = 'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352156-stock-illustration-default-placeholder-profile-icon.jpg'
  }

  const info = [...memberInfo]
  let html = ''
  for (let i = 0; i < info.length; i++) {
    html += `<p>${info[i]}</p>`
  }

  return `
    <div class="text-center text-gray-500 dark:text-gray-400">
                  <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="${urlFotoMembro}" alt="Bonnie Avatar">
                  <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">${nomeMembro}</a>
                  </h3>
                  ${html}
                  <ul class="flex justify-center mt-4 space-x-4">
                      <li>
                          <!--facebook-->
                          <a href=${socialMedia[0]} target="_blank" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="royalblue" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"></path> 
                              </svg>
                          </a>
                      </li>
                      <li>
                          <!--Twitter x-->
                          <a href=${socialMedia[1]} target="_blank" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                              <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="w-6 h-6" viewBox="0 0 16 16">
                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path>
                              </svg>
                        </a>
                      </li>
                      <li>
                          <!--instagram-->
                          <a href=${socialMedia[2]} target="_blank" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ea4c89" class="w-6 h-6" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"></path>
                              </svg>
                           </a>
                      </li>
                      <li>
                          <!--web-->
                          <a href=${socialMedia[3]} target="_blank" class="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white">
                              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                          </a> 
                      </li> 
                  </ul>
              </div>
  
  `
}