import {sectionTailwind1} from "./components/section/section-tailwind1.js";
import {sectionTailwind2} from "./components/section/section-tailwind2.js";
import {sectionTailwind3} from "./components/section/section-tailwind3.js";
import {sectionTailwind4} from "./components/section/section-tailwind4.js";
import {sectionTailwind5} from "./components/section/section-tailwind5.js";
import {footerTailwind1} from "./components/footer/footer-tailwind1.js";
import {navbarTailwind1} from "./components/navbar/navbar-tailwind1.js";
import {sectionViewSeparator} from "./components/sectionViewSeparator.js";

const showSectionSeparator = false;
document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML += navbarTailwind1(showSectionSeparator)  // navbar
    document.body.innerHTML += sectionTailwind1(showSectionSeparator) // hero page
    document.body.innerHTML += sectionTailwind2(showSectionSeparator) // about us
    document.body.innerHTML += sectionTailwind3(showSectionSeparator) // services
    document.body.innerHTML += sectionTailwind4(showSectionSeparator) // gallery
    document.body.innerHTML += sectionTailwind5(showSectionSeparator) // contact
    document.body.innerHTML += footerTailwind1(showSectionSeparator)  // footer
})