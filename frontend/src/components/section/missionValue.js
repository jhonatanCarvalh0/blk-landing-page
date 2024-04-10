//src: https://flowbite.com/blocks/marketing/hero/
import { sectionViewSeparator } from "../sectionViewSeparator.js";

const iconsSvg = {
  Default:
    '<svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-zinc-800" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_1383_124889)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M23.7069 0.292893C24.0974 0.683417 24.0974 1.31658 23.7069 1.70711L18.9888 6.4252C18.9803 6.43399 18.9717 6.4426 18.9629 6.45102L6.42828 18.9857C6.41981 18.9945 6.41121 19.0031 6.40249 19.0115L1.70686 23.7071C1.31634 24.0976 0.683173 24.0976 0.292649 23.7071C-0.0978752 23.3166 -0.0978752 22.6834 0.292649 22.2929L4.2341 18.3514C2.91616 17.1406 1.94152 15.7855 1.27296 14.6799C0.867402 14.0092 0.568856 13.421 0.370367 12.9971C0.27101 12.785 0.196402 12.6133 0.145717 12.4922C0.120366 12.4317 0.100973 12.3838 0.0874364 12.3497L0.0715024 12.3091L0.0667999 12.2969L0.0652601 12.2928L0.0646926 12.2913C0.0646926 12.2913 0.0642597 12.2902 0.99984 11.9371L0.0739539 11.5593L0.0743572 11.5583L0.0754044 11.5557L0.0784618 11.5483L0.0884377 11.5245C0.0968071 11.5046 0.108623 11.4769 0.123909 11.4419C0.154474 11.372 0.198955 11.2727 0.257542 11.1484C0.374643 10.8998 0.548544 10.55 0.780854 10.1325C1.24425 9.29981 1.94654 8.18638 2.90279 7.0685C4.80627 4.84327 7.80917 2.5 11.9998 2.5C14.4524 2.5 16.5051 3.30553 18.1647 4.42081L22.2926 0.292893C22.6832 -0.0976311 23.3163 -0.0976311 23.7069 0.292893ZM9.67175 12.9138L12.9135 9.67199C12.6306 9.56087 12.3225 9.5 11.9998 9.5C10.619 9.5 9.49976 10.6193 9.49976 12C9.49976 12.3227 9.56062 12.6308 9.67175 12.9138ZM14.3954 8.19018C13.7018 7.75332 12.8799 7.5 11.9998 7.5C9.51447 7.5 7.49976 9.51472 7.49976 12C7.49976 12.8801 7.75308 13.702 8.18993 14.3956L5.64978 16.9358C4.48361 15.8793 3.60149 14.6655 2.98438 13.645C2.62121 13.0444 2.35534 12.5199 2.1816 12.1489C2.14775 12.0766 2.11745 12.0103 2.09065 11.9504C2.19078 11.7404 2.33642 11.4501 2.52847 11.105C2.94543 10.3558 3.57456 9.35995 4.4226 8.36856C6.12769 6.37527 8.62479 4.5 11.9998 4.5C13.8293 4.5 15.3947 5.04849 16.7183 5.8672L14.3954 8.19018Z" fill="#000000"></path> <path d="M0.0739539 11.5593L-0.0742188 11.9233L0.0642597 12.2902L0.99984 11.9371C0.0736306 11.5601 0.0739539 11.5593 0.0739539 11.5593Z" fill="#000000"></path> <path d="M20.6068 7.99677C21.0545 7.6733 21.6796 7.77395 22.0031 8.22159C22.6473 9.11312 23.1236 9.93792 23.44 10.542C23.5985 10.8445 23.7175 11.0931 23.7981 11.2688C23.8384 11.3567 23.8692 11.4264 23.8905 11.4757C23.9011 11.5004 23.9094 11.5199 23.9153 11.5341L23.9224 11.5512L23.9247 11.5567L23.9255 11.5586L23.9259 11.5598L22.9998 11.9371L23.9351 12.291L23.9347 12.292L23.9337 12.2947L23.9308 12.3023L23.9213 12.3266C23.9134 12.3469 23.9022 12.3751 23.8877 12.4107C23.8586 12.482 23.8163 12.583 23.7604 12.7095C23.6486 12.9623 23.4819 13.318 23.2576 13.7424C22.8101 14.5889 22.1266 15.7209 21.182 16.8577C19.2983 19.1243 16.2929 21.5 11.9998 21.5C11.1271 21.5 10.3029 21.4013 9.52735 21.2228C8.98913 21.099 8.65319 20.5623 8.77702 20.0241C8.90084 19.4859 9.43754 19.1499 9.97576 19.2737C10.6055 19.4186 11.2793 19.5 11.9998 19.5C15.4749 19.5 17.9694 17.5942 19.6438 15.5794C20.4781 14.5754 21.0881 13.5667 21.4894 12.8077C21.6745 12.4576 21.8138 12.1632 21.909 11.9504C21.8466 11.8195 21.7665 11.6573 21.6683 11.4699C21.3863 10.9316 20.959 10.1915 20.382 9.393C20.0585 8.94536 20.1592 8.32025 20.6068 7.99677Z" fill="#000000"></path> <path d="M23.9351 12.291C23.9351 12.291 23.9354 12.2902 22.9998 11.9371C23.926 11.5601 23.9259 11.5598 23.9259 11.5598L24.0739 11.9233L23.9351 12.291Z" fill="#000000"></path> </g> <defs> <clipPath id="clip0_1383_124889"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>',
  obras: `<svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-zinc-800"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 17.25L15.75 17.25L15.75 15L19.5 15L19.5 17.25ZM19.5 13.5L19.5 9.75L15.75 9.75L15.75 6L10.5 6L9 6L4.5 6L4.5 9.75L3 9.75L3 15L4.5 15L4.5 18.75L9 18.75L10.5 18.75L14.25 18.75L15.75 18.75L21 18.75L21 13.5L19.5 13.5ZM18 13.5L18 11.25L15.75 11.25L14.25 11.25L14.25 13.5L15.75 13.5L18 13.5ZM14.25 15L12.75 15L10.5 15L10.5 17.25L14.25 17.25L14.25 15ZM12.75 11.25L12.75 13.5L9 13.5L9 11.25L10.5 11.25L12.75 11.25ZM9 15L9 17.25L6 17.25L6 15L9 15ZM14.25 7.5L10.5 7.5L10.5 9.75L14.25 9.75L14.25 7.5ZM4.5 11.25L4.5 13.5L7.5 13.5L7.5 11.25L4.5 11.25ZM6 9.75L9 9.75L9 7.5L6 7.5L6 9.75Z" fill="#383838"></path> </g></svg>`,
  reformas: `<svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-zinc-800"  viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>.cls-1{fill:none;stroke:#000000;stroke-miterlimit:10;stroke-width:2px;}</style></defs><line class="cls-1" x1="4" y1="15.5" x2="4" y2="8.5"></line><line class="cls-1" x1="20" y1="8.5" x2="20" y2="15.5"></line><polyline class="cls-1" points="23 10.5 12 1.5 1 10.5"></polyline><line class="cls-1" x1="7" y1="14.5" x2="9" y2="14.5"></line><line class="cls-1" x1="11" y1="14.5" x2="13" y2="14.5"></line><line class="cls-1" x1="15" y1="14.5" x2="17" y2="14.5"></line><line class="cls-1" x1="7" y1="22.5" x2="9" y2="22.5"></line><line class="cls-1" x1="3" y1="22.5" x2="5" y2="22.5"></line><line class="cls-1" x1="11" y1="22.5" x2="13" y2="22.5"></line><line class="cls-1" x1="15" y1="22.5" x2="17" y2="22.5"></line><line class="cls-1" x1="19" y1="22.5" x2="21" y2="22.5"></line><line class="cls-1" x1="3" y1="18.5" x2="5" y2="18.5"></line><line class="cls-1" x1="19" y1="18.5" x2="21" y2="18.5"></line></g></svg>`,
  terraplanagem: `<svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-zinc-800"  version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .linesandangles_een{fill:#000000;} </style> <path class="linesandangles_een" d="M7,25h4v2H5v-6h2V25z M7,7h4V5H5v6h2V7z M21,5v2h4v4h2V5H21z M25,25h-4v2h6v-6h-2V25z M8,8h16 v16H8V8z M10,22h12V10H10V22z"></path> </g></svg>`,
};

function generateServiceDiv(service, description, iconName) {
  if (!iconsSvg[iconName]) {
    iconName = "Default";
  }
  return `<div>
                    <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-stone-200">
                        ${iconsSvg[iconName]}
                    </div>
                    <h3 class="mb-2 text-xl font-bold dark:text-white">${service}</h3>
                    <p class="text-gray-500 dark:text-gray-400">${description}</p>
                </div>`;
}

export function missionValue(showSectionSeparator) {
  return `
  ${sectionViewSeparator("section21", showSectionSeparator)}
   <section id="missionVisionValues" class="bg-white dark:bg-zinc-950">
  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          ${generateServiceDiv(
            "MISSÃO",
            "Edificar os projetos de nossos clientes, fornecendo soluções mais completas e inteligentes através dos serviços de engenharia, reduzindo impactos ambientais, transformando a obra em construções sustentáveis",
            "obras"
          )}
          ${generateServiceDiv(
            "VISÃO",
            "Ser a empresa referencia em execuções de obras sustentáveis na industria da construção civil nacional, executando obras em todo o Brasil.",
            "reformas"
          )}
          ${generateServiceDiv(
            "VALORES",
            "Compromisso e comprometimento com o meio ambiente, com a ética profissional e com os nossos clientes e colaboradores. Aplicar as inovações sempre respeitando a sustentabilidade.",
            "terraplanagem"
          )}
          
      </div>
  </div>
</section>
`;
}

