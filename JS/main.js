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
