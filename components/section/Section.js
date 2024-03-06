const sectionsHTML = {
    inicio: `
       <div class="bg-opacity">
        <section id="inicio">

            <div>
              <h1>
                BLK <br> ENGENHARIA
              </h1>
              <p class="paragrafo">
                [Texto de impacto]
              </p>
              <a class="botao" href="https://wa.me/0000000000000" target="_blank"
                >Saiba Mais</a
              >
              <a class="botao-transparente" href="#aboutUs"
                >Portifólio</a
              >
            </div>
            <img class="absolute" src="../../img/shape.svg" alt="" />
                
        </section></div>
`,
    aboutUs: `<section id="aboutUs">
        <div>
          <h2>Quem somos?</h2>
          <p class="paragrafo">
            [Texto ótimo sobre a BLK engenharia]
          </p>
          <p class="paragrafo">
            [Pode ter uma lista aqui se for de interesse do cliente]
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1663096695324-b7f53cf4f754?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width="480"
          height="480"
          loading="lazy"
        />
      </section>`,
    cards: `
        <h2>Serviços</h2>
        <section id="cards">
            <div class="card">
            <div class="card-content">
            <img src="https://cdn-icons-png.freepik.com/512/891/891448.png" alt="">
                <span>CONTRUÇÃO</span>
                <button>Resume</button>
            </div>
            </div>
            <div class="card">
            <div class="card-content">
            <img src="https://cdn-icons-png.freepik.com/512/891/891448.png" alt="card">
                <span>REFORMA</span>
                <button>Resume</button>
            </div>
            </div>
            <div class="card">
            <div class="card-content">
            <img src="https://cdn-icons-png.freepik.com/512/891/891448.png" alt="card">
                <span>PLANEJAMENTO</span>
                <button>Resume</button>
            </div>
            </div>
      </section>`,
    ourJob: `<section id="ourJob">
        <img
          src="../../img/faq-img.svg"
          alt=""
          width="540"
          height="540"
          loading="lazy"
        />
        <div>
          <h2>Ficou alguma dúvida?</h2>

          <div class="duvida">
            <h3>Quais serviços são oferecidos pela clínica da PetLife</h3>
            <img src="../../img/arrow-down.svg" alt="" />
            <p class="paragrafo">
              A clínica da PetLife oferece uma ampla gama de serviços, incluindo
              consultas de rotina, vacinação, cirurgias, tratamento de doenças,
              cuidados odontológicos, atendimento de emergência 24 horas,
              programas de prevenção de pulgas, carrapatos e vermes, entre
              outros. Nosso objetivo é fornecer cuidados abrangentes e
              personalizados para garantir a saúde e o bem-estar do seu pet.
            </p>
          </div>

          <div class="duvida">
            <h3>Quais espécies de animais a clínica veterinária atende?</h3>
            <img src="../../img/arrow-down.svg" alt="" />
            <p class="paragrafo">
              A clínica veterinária da PetLife atende animais de estimação de
              todas as espécies, incluindo cães, gatos, pássaros, roedores e
              répteis. Nossos profissionais possuem conhecimento e experiência
              para cuidar de diferentes tipos de animais, oferecendo um
              atendimento especializado e dedicado a cada um deles.
            </p>
          </div>

          <div class="duvida">
            <h3>A clínica da PetLife possui serviços de emergência</h3>
            <img src="../../img/arrow-down.svg" alt="" />
            <p class="paragrafo">
              Sim, a clínica veterinária da PetLife oferece serviços de
              emergência 24 horas. Se o seu animal de estimação precisar de
              atendimento veterinário imediato fora do horário de expediente,
              nossa equipe está pronta para ajudar, fornecendo cuidados urgentes
              e tratamento adequado para garantir o bem-estar do seu pet.
            </p>
          </div>

          <div class="duvida">
            <h3>A clínica oferece serviços de banho e tosa?</h3>
            <img src="../../img/arrow-down.svg" alt="" />
            <p class="paragrafo">
              Sim, a clínica veterinária da PetLife oferece serviços
              profissionais de banho e tosa. Nossa equipe de profissionais
              experientes garante que seu pet receba cuidados adequados, usando
              produtos de alta qualidade e técnicas seguras. O banho e tosa
              ajudam a manter a higiene, a saúde de pele e pelagem do seu pet,
              além de proporcionar uma experiência relaxante e agradável para
              eles.
            </p>
          </div>
        </div>
      </section>`,
}


function sectionSelector(sectionName){
    return sectionsHTML[sectionName] || 'WIP'
}
export  function Section(section_id){
    return sectionSelector(section_id)
}
