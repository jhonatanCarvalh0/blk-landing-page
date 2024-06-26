// src: https://flowbite.com/blocks/marketing/contact/

import {sectionViewSeparator} from "../sectionViewSeparator.js";
window.sendMail = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
    });

    if (response.ok) {
        alert('Email enviado com sucesso!');
    } else {
        alert('Houve um erro ao enviar o email.');
    }
};

export function contact(showSectionSeparator){
    return `
    ${sectionViewSeparator('section5', showSectionSeparator)}
  <section id="contact-us" class="bg-white dark:bg-zinc-950">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-zinc-950 dark:text-white">Entre em contato</h2>
          <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Mande uma mensagem e solicite um agendamento para montarmos um orçamento
          </p>
          <form method="POST" class="space-y-8" onsubmit="window.sendMail(event)" >
            
              <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-zinc-950 dark:text-gray-300">seu email</label>
                  <input 
                  type="email" 
                  name="email"
                  id="email" 
                  class="shadow-sm bg-gray-50 border border-gray-300 text-zinc-950 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                  placeholder="nome@email.com" 
                  required>
              </div>
              <div>
                  <label for="subject" class="block mb-2 text-sm font-medium text-zinc-950 dark:text-gray-300">Assunto</label>
                  <input 
                  type="text" 
                  name="subject"
                  id="subject" 
                  class="block p-3 w-full text-sm text-zinc-950 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                  placeholder="Gostaria de um agendamento" 
                  required>
              </div>
              <div class="sm:col-span-2">
                  <label for="message" class="block mb-2 text-sm font-medium text-zinc-950 dark:text-gray-400">Sua mensagem</label>
                  <textarea 
                  id="message" 
                  name="message"
                  rows="6" 
                  class="block p-2.5 w-full text-sm text-zinc-950 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                  placeholder="Mensagem"></textarea>
              </div>
              <button 
              type="submit" 
              class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-zinc-700 sm:w-fit hover:bg-zinc-100 hover:text-zinc-950 focus:ring-4 focus:outline-none focus:ring-zinc-300 dark:bg-zinc-600 dark:hover:bg-zinc-100  dark:focus:ring-zinc-800"
              >
              Enviar Mensagem
              </button>
          </form>
      </div>
</section>
    `
}
