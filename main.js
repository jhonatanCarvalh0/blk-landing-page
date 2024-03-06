import {Header} from './components/header/Header.js'
import {Section} from "./components/section/Section.js";
import {Footer} from "./components/footer/Footer.js";
import {Navbar} from "./components/navbar/navbar.js";

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML += Navbar()
    document.body.innerHTML += Header()
    document.body.innerHTML += Section('inicio')
    document.body.innerHTML += Section('aboutUs')
    document.body.innerHTML += Section('cards')
    document.body.innerHTML += Section('ourJob')
    document.body.innerHTML += Footer()
})