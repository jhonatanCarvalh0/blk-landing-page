import {sectionViewSeparator} from "../sectionViewSeparator.js";

export function ourTeam(showSectionSeparator){
    return `
        ${sectionViewSeparator('section1', showSectionSeparator)}
        ${nossaEquipe()}
    `
}

function nossaEquipe(){
    return`
    <section class="bg-white dark:bg-zinc-950">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Nossa Equipe Técnica</h2>
              <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Engenharia Civil, Arquitetura e Urbanismo, Engenharia Elétrica</p>
          </div> 
          <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                ${teamMember('frontend/src/img/time-blk/emerson.jpg', 'Emerson Thiago Ferreira da Silva', ['Engenheiro Civil', 'Gestor', 'CREA: 14903D/RO'])}
                ${teamMember('', 'Gustavo Portugal Ventura', ['Engenheiro Civil', 'Sócio Gestor', 'CREA: 18568D/RO'])}
                ${teamMember('../../img/time-blk/paloma.webp', 'Paloma Nascimento', ['Arquiteta e Urbanista', 'BIM Manager', 'CAU: A279906-5'])}
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
              <img class="mx-auto mb-4 w-36 h-36 rounded-full object-cover" src=${urlFotoMembro} alt="Bonnie Avatar">
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">${nomeMembro}</a>
              </h3>
              ${html}       
        </div>  
`
}