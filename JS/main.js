const textStart = document.getElementById('textstart');
const startButton = document.getElementById('startbutton');
const banner = document.getElementById('banner');


startButton.addEventListener('click', () => {

    document.getElementById('contentstart').classList.add('active');

    textStart.classList.add('hidden');
    banner.classList.add('transform');

})

document.getElementById('btnmenumobile').addEventListener('click', () => {

    const navOpen = document.getElementById('navopen');
    const fecharNav = document.getElementById('fecharmenu');

    navOpen.classList.add('active');

    fecharNav.addEventListener('click', ()=> {
        navOpen.classList.remove('active');
    })
    
})

// curriculo 

const curriculo = document.getElementById('curriculo');
const abrirCurri = document.getElementById('abrircurri');
const btnCurriMenu = document.getElementById('btncurrimenu');
const btnCurriMenuMbl = document.getElementById('btncurrimenumbl');

function abrirCurriculo() {

    curriculo.classList.add('active');

}

function fecharCurriculo() {

    curriculo.classList.remove('active');
}

abrirCurri.addEventListener('click', abrirCurriculo);
btnCurriMenu.addEventListener('click', abrirCurriculo);
btnCurriMenuMbl.addEventListener('click', abrirCurriculo);

const btnFecharCC = document.getElementById('btnfecharcc').addEventListener('click', fecharCurriculo);


//

const container = document.getElementById('carrosel');
const track = document.querySelector('.carrosel');
const prev = document.getElementById('back');
const next = document.getElementById('next');
const cards = document.querySelectorAll('.conquista');

let offset = 0;

function getStep() {
  return cards.length > 1
    ? cards[1].offsetLeft - cards[0].offsetLeft
    : cards[0].offsetWidth;
}

function getMaxOffset() {
  // parte realmente visível: nunca maior que a tela
  const visible = Math.min(
    container.clientWidth,
    window.innerWidth - container.getBoundingClientRect().left
  );
  // largura total da faixa (incluindo o espaço antes dela) menos o que cabe na tela
  return Math.max(0, track.offsetLeft + track.scrollWidth - visible);
}

function updateCarrosel() {
  track.style.transform = `translateX(${-offset}px)`;
}

next.addEventListener('click', () => {
  const max = getMaxOffset();
  offset = offset >= max - 1 ? 0 : Math.min(offset + getStep(), max);
  updateCarrosel();
});

prev.addEventListener('click', () => {
  const max = getMaxOffset();
  offset = offset <= 0 ? max : Math.max(offset - getStep(), 0);
  updateCarrosel();
});

window.addEventListener('resize', () => {
  offset = Math.min(offset, getMaxOffset());
  updateCarrosel();
});

//

