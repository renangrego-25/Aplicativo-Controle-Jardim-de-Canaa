const navBar = document.querySelectorAll('.navbar__item');

const vendas = document.getElementById('vendas');
const paginaVenda = document.getElementById('pagina-vendas');
const imgVendas = vendas.querySelector('span');                 
const todosItens = document.querySelectorAll('.navbar__item'); 


vendas.addEventListener('click', (e) => {
    e.preventDefault;

    paginaVenda.classList.add('active');
    paginaProdutos.classList.remove('active');
    paginaApoiadores.classList.remove('active');

    todosItens.forEach(item => {
        const icone = item.querySelector('span');
        item.classList.remove('navbar__item--ativo');
        icone.classList.remove('img_nav_active');
        icone.classList.add('img_nav');
    });

    vendas.classList.add('navbar__item--ativo');
    imgVendas.classList.remove('img_nav');
    imgVendas.classList.add('img_nav_active');
});

const produtos = document.getElementById('produtos');
const paginaProdutos = document.getElementById('pagina-produtos');
const imgProdutos = produtos.querySelector('span'); 


produtos.addEventListener('click', (e) => {
    e.preventDefault;

    paginaProdutos.classList.add('active');
    paginaApoiadores.classList.remove('active');

    todosItens.forEach(item => {
        const icone = item.querySelector('span');
        item.classList.remove('navbar__item--ativo');
        icone.classList.remove('img_nav_active');
        icone.classList.add('img_nav');
    });

    produtos.classList.add('navbar__item--ativo');
    imgProdutos.classList.remove('img_nav');
    imgProdutos.classList.add('img_nav_active');
});


const apoiadores = document.getElementById('Apoiadores');
const paginaApoiadores = document.getElementById('pagina-apoiadores');
const imgApoiadores = apoiadores.querySelector('span'); 


apoiadores.addEventListener('click', (e) => {
    e.preventDefault;

    paginaApoiadores.classList.add('active');

    todosItens.forEach(item => {
        const icone = item.querySelector('span');
        item.classList.remove('navbar__item--ativo');
        icone.classList.remove('img_nav_active');
        icone.classList.add('img_nav');
    });

    apoiadores.classList.add('navbar__item--ativo');
    imgApoiadores.classList.remove('img_nav');
    imgApoiadores.classList.add('img_nav_active');
});

const controle = document.getElementById('controle');
const imgControle = controle.querySelector('span');

controle.addEventListener('click', (e) => {
    e.preventDefault;

    paginaVenda.classList.remove('active');
    paginaProdutos.classList.remove('active');
    paginaApoiadores.classList.remove('active');

    todosItens.forEach(item => {
        const icone = item.querySelector('span');
        item.classList.remove('navbar__item--ativo');
        icone.classList.remove('img_nav_active');
        icone.classList.add('img_nav');
    });

    controle.classList.add('navbar__item--ativo');
    imgControle.classList.remove('img_nav');
    imgControle.classList.add('img_nav_active');
});


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

//Página de controle de caixa

const paginaCaixa = document.getElementById('pagina-caixa');
const voltarCaixa = document.getElementById('voltarcaixa');

document.getElementById('abrircaixa').addEventListener('click', () => {

    paginaCaixa.classList.add('active');

    voltarCaixa.addEventListener('click', (e) =>{
        e.preventDefault();

        paginaCaixa.classList.remove('active');
    })
})

const vinicial = document.getElementById('vinicial');
const valorincial = document.getElementById('valor').value;

function fecharVinicial() {
    vinicial.classList.remove('active');
}

document.getElementById('editvalor').addEventListener('click', () => {
    vinicial.classList.add('active');

    document.getElementById('salvarnovo').addEventListener('click', fecharVinicial);

    document.getElementById('voltarInicial').addEventListener('click', fecharVinicial);
})

const addTransacao = document.getElementById('addtrans');

function fecharTransaçao() {
    addTransacao.classList.remove('active');
}

document.getElementById('btn-adicionar-transacao').addEventListener('click', (e) => {
    e.preventDefault;

    addTransacao.classList.add('active');

    document.getElementById('confirmartransacao').addEventListener('click', fecharTransaçao);

    document.getElementById('fechartrans').addEventListener('click', fecharTransaçao);
})

//Página de produção

const paginaProducao = document.getElementById('pagina-produçao');

document.getElementById('producao').addEventListener('click', () => {
    paginaProducao.classList.add('active');

    document.getElementById('fecharprod').addEventListener('click', () => {
        paginaProducao.classList.remove('active');
    })
})

document.getElementById('prod-produtos').addEventListener('click', () => {
    paginaProducao.classList.add('active');

    document.getElementById('fecharprod').addEventListener('click', () => {
        paginaProducao.classList.remove('active');
    })
})

// Pagina estoque

const paginaEstoque = document.getElementById('pagina-estoque');

document.getElementById('estoque').addEventListener('click', () => {
    paginaEstoque.classList.add('active');

    document.getElementById('fecharest').addEventListener('click', () => {
        paginaEstoque.classList.remove('active');
    })
})

document.getElementById('est-produtos').addEventListener('click', () => {
    paginaEstoque.classList.add('active');

    document.getElementById('fecharest').addEventListener('click', () => {
        paginaEstoque.classList.remove('active');
        paginaProducao.classList.remove('active');
    })
})

const botoes = {
  mt: document.getElementById("mt"),
  em: document.getElementById("em"),
  td: document.getElementById("td"),
};

const containers = {
  mtPrima: document.getElementById("mt-prima"),
  embal: document.getElementById("embal"),
  todos: document.getElementById("todoestoque"),
};

function esconderTodos() {
  Object.values(containers).forEach((c) => c.classList.remove("ativo"));

  document.querySelectorAll(".estoque-content").forEach((item) => {
    item.classList.remove("hidden");
  });
}

botoes.mt.addEventListener("click", () => {
  esconderTodos();
  containers.mtPrima.classList.add("ativo");
});

botoes.em.addEventListener("click", () => {
  esconderTodos();
  containers.embal.classList.add("ativo");
});

botoes.td.addEventListener("click", () => {
  esconderTodos();
  containers.mtPrima.classList.add("ativo");
  containers.embal.classList.add("ativo");

  const contEstoque = document.querySelectorAll('.estoque-content');

  contEstoque.forEach((item) => {
    item.classList.add("hidden");
  });
});

// Pagina de investimentos e contas
const botoesCard = {
    investimento: document.getElementById('card-investimentos'),
    contasPagar: document.getElementById('card-contas'),
}

const cardOpen = {
    cardInvest: document.getElementById('pagina-investimentos'),
    cardConta: document.getElementById('pagina-contas'),
}

botoesCard.investimento.addEventListener('click', () => {

    cardOpen.cardInvest.classList.add('active');
});

botoesCard.contasPagar.addEventListener('click', () => {

    cardOpen.cardConta.classList.add('active');
})

const voltaMenu = document.querySelectorAll('.voltarCaixa');

voltaMenu.forEach((botao) => {
  botao.addEventListener('click', () => {
    cardOpen.cardConta.classList.remove('active');
    cardOpen.cardInvest.classList.remove('active');
  });
});

//Página de Vendas

const addPedido = document.getElementById('add-pedido');
const fecharPedido = document.getElementById('fecharpedido');
const salvarpedido = document.getElementById('salvar-pedido');

function fecharAddpedido (){
    addPedido.classList.remove('active');
}

document.getElementById('btn-adicionar-pedido').addEventListener('click', ()=>{
    addPedido.classList.add('active');

    fecharPedido.addEventListener('click', fecharAddpedido);

    salvarpedido.addEventListener('click', fecharAddpedido);
})

//Página de ficha técnica

