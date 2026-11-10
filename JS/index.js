const cardInicial = document.getElementById('card-inicial');

const LIMITE = 500; 

function verificarScroll() {
    if (window.scrollY >= LIMITE) {
        cardInicial.classList.add('hidden');
    } else {
        cardInicial.classList.remove('hidden');
    }
}

window.addEventListener('scroll', verificarScroll, { passive:true });
verificarScroll();

const menu = document.getElementById('menu');
const nav = document.getElementById('navOpen');
const navbar = document.getElementById('navbar');
const menuSobre = document.getElementById('menu-sobre');

menu.addEventListener('click', () => {
    
    nav.classList.add('active');
    menu.classList.remove('desativo');

    document.getElementById('closenav').addEventListener('click', () => {
        nav.classList.remove('active');
        menu.classList.add('desativo');
    })
})

menuSobre.addEventListener('click', () => {
    
    nav.classList.add('cover');
    menuSobre.classList.remove('desativo');

    document.getElementById('closenav').addEventListener('click', () => {
        nav.classList.remove('cover');
        menuSobre.classList.add('desativo');
    })
})

const stopNav = 1450;

function stopNavbar() {
    if (window.scrollY >= stopNav) {
        navbar.classList.add('visible');
    } else {
        navbar.classList.remove('visible');
    }
}

window.addEventListener('scroll', stopNavbar, { passive: true });
stopNavbar();

const opencard = 2200;

const cardOpen = document.getElementById('desktext');

function verificarcard() {
    if(window.scrollY >= opencard) {
        cardOpen.classList.add('hover');
    } else {
        cardOpen.classList.remove('hover');
    }
}

window.addEventListener('scroll', verificarcard, { passive: true });
verificarcard();

const curriculo = document.getElementById('curriculo');
const fecharCurriculo = document.getElementById('fechar-curriculo');

curriculo.addEventListener('click', () => {
    navbar.classList.add('open');
    fecharCurriculo.classList.add('ativobtn');

    fecharCurriculo.addEventListener('click', () => {
        navbar.classList.remove('open');
        fecharCurriculo.classList.remove('ativobtn');
    })
})


// carrosel


const carrosel = document.querySelector('.carrosel');
const btnNext = document.querySelector('.next');
const btnBack = document.querySelector('.back');

const passo = 600;

btnNext.addEventListener('click', () => {
    carrosel.scrollBy({
        left: passo,
        behavior: 'smooth'
    });
});

btnBack.addEventListener('click', () => {
    carrosel.scrollBy({
        left: -passo,
        behavior: 'smooth'
    });
});

// Conhecimentos

const cardSelecao = document.getElementById('card-selecao');
const cardopencon = document.getElementById('todositens');

cardSelecao.addEventListener('click', () => {
    cardSelecao.classList.add('little');
    cardopencon.classList.add('active');
})



const mapaConhecimentos = {
    "btn-conhecimento-frontend": "card-conhecimento-frontend",
    "btn-conhecimento-backend": "card-conhecimento-backend",
    "btn-conhecimento-ferramentas": "card-conhecimento-ferramentas",
    "btn-conhecimento-ia": "card-conhecimento-ia",
    "btn-conhecimento-idiomas": "card-conhecimento-idiomas"
};

const botoes = document.querySelectorAll('[id^="btn-conhecimento-"]');
const cards = document.querySelectorAll('.card-conhecimento');

botoes.forEach(botao => {

    botao.addEventListener('click', () => {

        botoes.forEach(btn => btn.classList.remove('active'));
        
        cards.forEach(card => card.classList.remove('active'));
 
        const idCard = mapaConhecimentos[botao.id];
        const cardSelecionado = document.getElementById(idCard);

        botao.classList.add('active');
        cardSelecionado.classList.add('active');

    });

});

//

const sobreExp = document.getElementById('sobreexp');
const tivoli = document.getElementById('Tivoli');
const trivus = document.getElementById('Trivus');
const Main = document.getElementById('Main');

const fecharexp = document.querySelectorAll('.fecharexp');

fecharexp.forEach((fechar) => {
    fechar.addEventListener('click', () => {
    sobreExp.classList.remove('active');
})
})

document.getElementById('btn-tivoli').addEventListener('click', ()=>{
    tivoli.classList.add('active');
    trivus.classList.remove('active');
    Main.classList.remove('active');
    sobreExp.classList.add('active');
})

document.getElementById('btn-trivus').addEventListener('click', ()=>{
    trivus.classList.add('active');
    Main.classList.remove('active');
    tivoli.classList.remove('active');
    sobreExp.classList.add('active');
})

document.getElementById('btn-main').addEventListener('click', ()=>{
    Main.classList.add('active');
    tivoli.classList.remove('active');
    trivus.classList.remove('active');
    sobreExp.classList.add('active');
})

const botoesProjetos = document.querySelectorAll('.btnopenproj');
const btncarroselPj= document.querySelectorAll('.btn-carrosel-projetos');
const projetos = document.querySelectorAll('.projeto');
const conteudos = document.querySelectorAll('.content-projetos');
const final = document.getElementById('final');

botoesProjetos.forEach(botao => {

    botao.addEventListener('click', () => {

        const projetoSelecionado = botao.closest('.projeto');


        btncarroselPj.forEach(btnC => {
            btnC.classList.add('none')
        });
        
        if (projetoSelecionado.classList.contains('active')) {

            projetos.forEach(projeto => {
                projeto.classList.remove('active', 'hidden');

                projeto.querySelector('button').textContent = 'ver detalhes';
            });

            conteudos.forEach(conteudo => {
                conteudo.classList.remove('hidden');
                btncarroselPj.forEach(btnC => {
                btnC.classList.remove('none')
                });
            });

            return;
        }

        // Esconde todos os projetos
        projetos.forEach(projeto => {
            projeto.classList.remove('active');
            projeto.classList.add('hidden');
        });

        // Esconde as linhas que não possuem o projeto selecionado
        conteudos.forEach(conteudo => {
            conteudo.classList.add('hidden');
        });

        // Ativa somente o projeto selecionado
        projetoSelecionado.classList.remove('hidden');
        projetoSelecionado.classList.add('active');

        projetoSelecionado.querySelector('button').textContent = 'voltar';

        projetoSelecionado.parentElement.classList.remove('hidden');

    });

});

const sections = document.querySelectorAll('section');


const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }

    });

}, {
    threshold: 0.3
});

sections.forEach(section => observer.observe(section));

const loading = document.querySelector('.loading');

setTimeout(() => {
    loading.classList.add('hidden');
}, 2000);


const janela = document.querySelector('.janela-projetos');
const carrossel = document.querySelector('.content-projetos');
const btnNext1 = document.getElementById('nextcarrosel');
const btnBack2 = document.getElementById('backcarrosel');

let animando = false;

/* Garante que sempre haja itens suficientes para preencher a janela,
   clonando os projetos existentes quando necessário (loop nunca vazio). */
function garantirItensSuficientes() {
  const originais = Array.from(carrossel.children);
  if (originais.length === 0) return;

  let i = 0;
  while (carrossel.children.length < 6 || carrossel.scrollWidth < janela.offsetWidth * 2) {
    const clone = originais[i % originais.length].cloneNode(true);
    clone.classList.remove('open');
    carrossel.appendChild(clone);
    i++;
    if (i > 20) break; // segurança contra loop infinito
  }
}

/* O primeiro item sempre é o ativo */
function definirAtivo() {
  Array.from(carrossel.children).forEach((item, index) => {
    item.classList.toggle('open', index === 0);
  });
}

/* Largura de um "slot" (distância entre o primeiro e o segundo item) */
function larguraSlot() {
  const [a, b] = carrossel.children;
  return b.offsetLeft - a.offsetLeft;
}

/* Desliza o contêiner de volta para a posição original */
function animar(deslocamentoInicial) {
  animando = true;

  const anim = carrossel.animate(
    [
      { transform: `translateX(${deslocamentoInicial}px)` },
      { transform: 'translateX(0)' }
    ],
    { duration: 400, easing: 'ease-out' }
  );

  anim.onfinish = () => { animando = false; };
  anim.oncancel = () => { animando = false; };
}

function proximo() {
  if (animando) return;

  const slot = larguraSlot();
  carrossel.appendChild(carrossel.firstElementChild); // primeiro vai pro final
  definirAtivo();
  animar(slot);
}

function voltar() {
  if (animando) return;

  const slot = larguraSlot();
  carrossel.prepend(carrossel.lastElementChild); // último vai pro começo
  definirAtivo();
  animar(-slot);
}

btnNext1.addEventListener('click', proximo);
btnBack2.addEventListener('click', voltar);

garantirItensSuficientes();
definirAtivo();
