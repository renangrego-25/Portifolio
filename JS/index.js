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
const projetos = document.querySelectorAll('.projeto');
const conteudos = document.querySelectorAll('.content-projetos');
const final = document.getElementById('final');

botoesProjetos.forEach(botao => {

    botao.addEventListener('click', () => {

        const projetoSelecionado = botao.closest('.projeto');

        final.classList.add('space');
        
        if (projetoSelecionado.classList.contains('active')) {

            projetos.forEach(projeto => {
                projeto.classList.remove('active', 'hidden');

                projeto.querySelector('button').textContent = 'ver detalhes';
            });

            conteudos.forEach(conteudo => {
                conteudo.classList.remove('hidden');
                final.classList.remove('space');
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