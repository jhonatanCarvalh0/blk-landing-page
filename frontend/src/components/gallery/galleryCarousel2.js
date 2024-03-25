import imagesURL from "../../service/imageService.js";

export function galleryCarousel2(category = 'obrasResidenciais'){
    console.log('inside galleryCarousel2')
    return `
    <div class="container">
        <!-- Slide de imagens com botões de navegação e texto descritivo -->
        <div id="allSlides">
            ${generateImageContent(category)}
        </div>
        <!-- Botões de navegação anterior/próximo -->
        <div class="galleryNavButtons">
            <a id="previous-button" class="previous">❮</a>
            <a id="next-button" class="next">❯</a>
        </div>
    
        <!-- Contêiner para texto da imagem -->
        <div class="caption-container">
            <p id="caption"></p>
        </div>
    
        <!-- Miniaturas das imagens -->
        <div id="row" class="row">
            ${generateRowImageIndicators(category)}
        </div>
    </div>
    `
}

let slideIndex = 1;
let slides = document.getElementsByClassName("mySlides");
let second = 1000
let timer;

export function addGalleryEventListeners() {
    const previousButton = document.getElementById("previous-button");
    const nextButton = document.getElementById("next-button");

    previousButton.addEventListener("click", () => { plusSlides(-1); });
    nextButton.addEventListener("click", () => { plusSlides(1); });

    let thumbnails = document.querySelectorAll(".cursor");
    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener("click", function() {
            let slideNumber = this.getAttribute("data-slide-number");
            console.log("Thumbnail clicked. Slide number: ", slideNumber); // add this
            currentSlide(parseInt(slideNumber)); // ensure slide number is a number
        });
    });
}
function currentSlide(n) {
    clearTimeout(timer);
    showSlides(slideIndex = n);
    startAutoSlide();
}

function generateImageContent(category){
    let htmlContent = ``;
    let images = Object.values(imagesURL[category])
    let qtd = images.length; // obtem a quantidade de imagens

    for (let i = 0; i < qtd; i++) {
        let imageUrl = images[i]; // obtém a URL da imagem
        htmlContent +=`
                <div class="mySlides">
                    <div class="numbertext">${i+1} / ${qtd}</div>
                    <img src="${imageUrl}" style="width:100%" alt="">
                </div>
            `
    }
    return htmlContent

}

function  generateRowImageIndicators(category){
    let htmlRowContent = ``;
    let images = Object.values(imagesURL[category])
    let qtd = images.length; // obtem a quantidade de imagens

    for (let i = 0; i < qtd; i++) {
        let imageUrl = images[i];
        htmlRowContent +=`
        <div class="column">
            <img 
            class="demo cursor" 
            src="${imageUrl}" 
            style="width:100%" 
            data-slide-number="${i+1}"
            id="thumbnail-${i+1}"
            alt="The Woods ${i+1}">
        </div>
        `
    }

    return htmlRowContent

}

export function plusSlides(n=0) {
    clearTimeout(timer);
    showSlides(slideIndex += n);
    startAutoSlide();
}

export function showSlides(n) {
    // Função para apresentar os slides
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt; // Exibe o texto alternativo da imagem ativa como legenda
}

export function startAutoSlide() {
    timer = setTimeout(function() {
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        } // Retorna ao início se passar da última imagem
        showSlides(slideIndex);
        plusSlides();
        startAutoSlide();
    }, 3 * second);
}


