import {sectionTailwind1} from "./components/section/section-tailwind1.js";
import {sectionTailwind3} from "./components/section/section-tailwind3.js";
import {sectionTailwind2} from "./components/section/section-tailwind2.js";
import {sectionTailwind4} from "./components/section/section-tailwind4.js";
import {footerTailwind1} from "./components/footer/footer-tailwind1.js";
import {navbarTailwind1} from "./components/navbar/navbar-tailwind1.js";
import {sectionTailwind5} from "./components/section/section-tailwind5.js";

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML += navbarTailwind1()  // navbar
    document.body.innerHTML += sectionTailwind1() // hero page
    document.body.innerHTML += sectionTailwind2() // about us
    document.body.innerHTML += sectionTailwind3() // services
    document.body.innerHTML += sectionTailwind4()// gallery
    document.body.innerHTML += sectionTailwind5()// contact
    document.body.innerHTML += footerTailwind1() // footer
})