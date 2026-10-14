const controle = document.getElementById('controle');
const vendas = document.getElementById('vendas');
const produtos = document.getElementById('produtos');
const apoiadores = document.getElementById('Apoiadores');

const navBar = document.querySelectorAll('.navbar__item');
const imgNav = document.querySelectorAll('img_nav');

//Ia content

const btnIa = document.getElementById('btnia');
const btnClose = document.getElementById('btnclose');
const topBar = document.getElementById('topbar');

btnIa.addEventListener('click', () => {
     
    topBar.classList.add('active');

    document.getElementById('iacontent').classList.add('active');

    btnIa.classList.add('hidden');
    btnClose.classList.add('active');
})

btnClose.addEventListener('click', () => {

    topBar.classList.remove('active');

    document.getElementById('iacontent').classList.remove('active');

    btnIa.classList.remove('hidden');
    btnClose.classList.remove('active');
})