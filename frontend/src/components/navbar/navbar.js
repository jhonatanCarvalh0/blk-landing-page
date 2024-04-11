import { sectionViewSeparator } from "../sectionViewSeparator.js";
import blkLogoBranca from "../../img/logos-blk/logo-blk-branca.svg";

export function navbar(showSectionSeparator) {
  return `
 ${sectionViewSeparator("navbar", showSectionSeparator)}
<nav class="bg-white border-zinc-200 dark:bg-zinc-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
<!--NAVBAR LOGO-->
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="${blkLogoBranca}" class="h-16" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
    </a>
<!--LOW WIDTH MENU BUTTON-->
    <button id="menuButton" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-zinc-800 rounded-lg lg:hidden hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:focus:ring-zinc-600" aria-expanded="false">
      <span class="sr-only">Menu</span>
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
       <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
    </button>
<!--NAVLINKS-->
    <div id="navbar-default" class="hidden lg:flex items-center justify-center md:justify-end w-full lg:w-auto">
        <ul class="font-medium flex flex-row space-x-8 p-4 mt-6 py-2 mt-4 lg:mt-0 lg:dark:bg-transparent rounded-lg bg-zinc-50 dark:bg-zinc-800 gap-3 dark:border-zinc-700">
          <li>
              <a href="#home" class="text-zinc-900 py-2 px-3 rounded hover:bg-zinc-100 md:hover:bg-zinc-700 hover:text-black dark:text-white md:dark:hover:text-zinc-700 dark:hover:bg-zinc-300">
                  Home
              </a>
          </li>
          <li>
              <a href="#about-us" class="text-zinc-900 py-2 px-3 rounded hover:bg-zinc-100 md:hover:bg-zinc-100 dark:text-white md:dark:hover:text-zinc-700 dark:hover:bg-zinc-300">
                  Quem somos
              </a>
          </li>
          <li>
              <a href="#services" class="text-zinc-900 py-2 px-3 rounded hover:bg-zinc-100 md:hover:bg-zinc-100 dark:text-white md:dark:hover:text-zinc-700 dark:hover:bg-zinc-300">
                  Nossos serviços
              </a>
          </li>
          <li>
              <a href="#gallery" class="text-zinc-900 py-2 px-3 rounded hover:bg-zinc-100 md:hover:bg-zinc-100 dark:text-white md:dark:hover:text-zinc-700 dark:hover:bg-zinc-300">
                  Nossos trabalhos
              </a>
          </li>
          <li>
              <a href="#contact-us" class="text-zinc-900 py-2 px-3 rounded hover:bg-zinc-100 md:hover:bg-zinc-100 dark:text-white md:dark:hover:text-zinc-700 dark:hover:bg-zinc-300">
                  Contato
              </a>
          </li>
      </ul>
    </div>
  </div>
</nav>
    `;
}

function setupNavbarToggle() {
  const menuButton = document.getElementById("menuButton");
  const navbar = document.getElementById("navbar-default");
  const navLinks = navbar.querySelector("ul"); // Obtem a <ul> dentro de #navbar-default

  menuButton.addEventListener("click", function () {
    navbar.classList.toggle("hidden");
    // Verifica se o menu está agora visível
    if (!navbar.classList.contains("hidden")) {
      // Aplica classes para exibição vertical e centralizada
      navLinks.classList.add("flex-col", "items-center", "justify-center");
      navLinks.classList.remove("lg:flex-row", "space-x-8");
    } else {
      // Reverte para o layout original quando o menu é escondido
      navLinks.classList.remove("flex-col", "items-center", "justify-center");
      navLinks.classList.add("lg:flex-row", "space-x-8");
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth <= 1050) {
      navbar.classList.add("hidden");
      // Garante que o menu reverta ao estado original em telas menores
      navLinks.classList.remove("flex-col", "items-center", "justify-center");
      navLinks.classList.add("lg:flex-row", "space-x-8");
    } else {
      // Assegura que o layout se mantenha consistente em telas maiores
      navbar.classList.remove("hidden");
      navLinks.classList.remove("flex-col", "items-center", "justify-center");
      navLinks.classList.add("lg:flex-row", "space-x-8");
    }
  });
}

window.addEventListener("DOMContentLoaded", setupNavbarToggle);
