
import {sectionViewSeparator} from "../sectionViewSeparator.js";

export function navbarTailwind1(showSectionSeparator){
    return `
 ${sectionViewSeparator('navbar', showSectionSeparator)}
<nav class="bg-white border-zinc-200 dark:bg-zinc-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
<!--NAVBAR LOGO-->
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="../../img/blk-logo-branca.png" class="h-16" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
    </a>
<!--LOW WIDTH MENU BUTTON-->
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-zinc-800 rounded-lg md:hidden hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:focus:ring-zinc-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
<!--NAVLINKS-->
    <div class="hidden w-full md:block w-24 text-center md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-zinc-100 rounded-lg bg-zinc-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-zinc-800 md:dark:bg-zinc-900 dark:border-zinc-700">
        <li>
          <a href="#home" class="block w-24 text-center w-24 text-center py-2 px-3 text-zinc-900 rounded hover:bg-zinc-100 md:hover:bg-zinc-100 md:border-0 md:hover:text-zinc-700 md:p-0 dark:text-white md:dark:hover:text-zinc-800 dark:hover:bg-zinc-100 dark:hover:text-white md:dark:hover:bg-zinc-100">
          Inicio
          </a>
        </li>
        <li>
          <a href="#about-us" class="block w-24 text-center py-2 px-3 text-zinc-900 rounded hover:bg-zinc-100 md:hover:bg-zinc-100 md:border-0 md:hover:text-zinc-700 md:p-0 dark:text-white md:dark:hover:text-zinc-800 dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-zinc-100">
          Sobre
          </a>
        </li>
        <li>
          <a href="#services" class="block w-24 text-center py-2 px-3 text-zinc-900 rounded hover:bg-zinc-100 md:hover:bg-zinc-100 md:border-0 md:hover:text-zinc-700 md:p-0 dark:text-white md:dark:hover:text-zinc-800 dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-zinc-100">
          Serviços
          </a>
        </li>
        <li>
          <a href="#gallery" class="block w-24 text-center py-2 px-3 text-zinc-900 rounded hover:bg-zinc-100 md:hover:bg-zinc-100 md:border-0 md:hover:text-zinc-700 md:p-0 dark:text-white md:dark:hover:text-zinc-800 dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-zinc-100">
          Portifólio
          </a>
        </li>
        <li>
          <a href="#contact-us" class="block w-24 text-center py-2 px-3 text-zinc-900 rounded hover:bg-zinc-100 md:hover:bg-zinc-100 md:border-0 md:hover:text-zinc-700 md:p-0 dark:text-white md:dark:hover:text-zinc-800 dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-zinc-100">
          Contato
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    `
}