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
