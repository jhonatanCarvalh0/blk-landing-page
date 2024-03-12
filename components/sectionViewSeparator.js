const sectionNames = {
    section1:"SEÇÃO 1 - INICIO⬇️ ",
    section2:"SEÇÃO 2 - SOBRE NÓS⬇️ ",
    section3:"SEÇÃO 4 - SERVIÇOS⬇️ ",
    section21:"SEÇÃO 3 - MISSAO E VALOR⬇️ ",
    section4:"SEÇÃO 5 - GALERIA DE FOTOS⬇️ ",
    section5:"SEÇÃO 6 - Contato⬇️ ",
    section6:"SEÇÃO 7 - Footer⬇️ ",
    navbar:"BARRA DE NAVEGAÇÃO ⬇️",
}

export function sectionViewSeparator(sectionName, validator){
    if (sectionName && validator) {
        return `
           
            <h1>${sectionNames[sectionName]}</h1>   
        `
    } else if (!sectionName && validator) {
        return ` section not found `
    }
        return ``
}