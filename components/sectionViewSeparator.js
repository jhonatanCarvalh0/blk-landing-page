const sectionNames = {
    section1:"SEÇÃO 1 - INICIO⬇️ ",
    section2:"SEÇÃO 2 - SOBRE NÓS⬇️ ",
    section3:"SEÇÃO 3 - SERVIÇOS⬇️ ",
    section4:"SEÇÃO 4 - GALERIA DE FOTOS⬇️ ",
    section5:"SEÇÃO 5 - Contato⬇️ ",
    section6:"SEÇÃO 6 - Footer⬇️ ",
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