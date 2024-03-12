import { sectionViewSeparator } from "../sectionViewSeparator.js";

export function navbar(showSectionSeparator) {
  return `
 ${sectionViewSeparator("navbar", showSectionSeparator)}
<nav class="bg-white border-zinc-200 dark:bg-zinc-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
<!--NAVBAR LOGO-->
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="../../img/logos-blk/blk-logo-branca.png" class="h-16" alt="Flowbite Logo" />
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
    <div class="hidden lg:flex items-center justify-center md:justify-end w-full md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-row space-x-8 p-4 md:p-0 mt-4 md:mt-0 rounded-lg bg-zinc-50 md:bg-transparent dark:bg-zinc-800 md:dark:bg-transparent dark:border-zinc-700">
        <li>
            <a href="#home" class="text-zinc-900 py-2 px-3 rounded hover:bg-zinc-100 md:hover:bg-zinc-100 dark:text-white md:dark:hover:text-zinc-800 dark:hover:bg-zinc-100">
                Quem somos
            </a>
        </li>
        <li>
            <a href="#about-us" class="text-zinc-900 py-2 px-3 rounded hover:bg-zinc-100 md:hover:bg-zinc-100 dark:text-white md:dark:hover:text-zinc-800 dark:hover:bg-zinc-100">
                Nossos serviços
            </a>
        </li>
        <li>
            <a href="#services" class="text-zinc-900 py-2 px-3 rounded hover:bg-zinc-100 md:hover:bg-zinc-100 dark:text-white md:dark:hover:text-zinc-800 dark:hover:bg-zinc-100">
                Nossas Obras
            </a>
        </li>
        <li>
            <a href="#gallery" class="text-zinc-900 py-2 px-3 rounded hover:bg-zinc-100 md:hover:bg-zinc-100 dark:text-white md:dark:hover:text-zinc-800 dark:hover:bg-zinc-100">
                Nossas Reformas
            </a>
        </li>
        <li>
            <a href="#contact-us" class="text-zinc-900 py-2 px-3 rounded hover:bg-zinc-100 md:hover:bg-zinc-100 dark:text-white md:dark:hover:text-zinc-800 dark:hover:bg-zinc-100">
                Contatos
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

  menuButton.addEventListener("click", function () {
    navbar.classList.toggle("hidden");
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth <= 1050) {
      navbar.classList.add("hidden");
    } else {
      navbar.classList.remove("hidden");
    }
  });
}

window.addEventListener("DOMContentLoaded", setupNavbarToggle);
