import {header} from "./components/section/header.js";
import {ourServices} from "./components/section/ourServices.js";
import {missionValue} from "./components/section/missionValue.js";
import {aboutUs} from "./components/section/aboutUs.js";
import {gallery, galleryEventListener} from "./components/section/gallery.js";
import {navbar} from "./components/navbar/navbar.js";
import {contact} from "./components/section/contact.js";
import {footer} from "./components/footer/footer.js";
import {ourTeam} from "./components/section/ourTeam.js";
import {carousel} from "./components/section/carousel.js";

const showSectionSeparator = false;
document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML += navbar(showSectionSeparator)  // navbar
    document.body.innerHTML += header(showSectionSeparator) // hero page
    document.body.innerHTML += aboutUs(showSectionSeparator) // about us
    document.body.innerHTML += missionValue(showSectionSeparator) // mission vision and value
    document.body.innerHTML += ourTeam(showSectionSeparator) // our team
    document.body.innerHTML += ourServices(showSectionSeparator) // services
    document.body.innerHTML += carousel()
    document.body.innerHTML += gallery(showSectionSeparator) // gallery
    document.body.innerHTML += contact(showSectionSeparator) // contact
    document.body.innerHTML += footer(showSectionSeparator)  // footer
    galleryEventListener('gallery');
})

