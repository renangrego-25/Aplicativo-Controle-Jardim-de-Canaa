const navBar = document.querySelectorAll('.navbar__item');

const vendas = document.getElementById('vendas');
const paginaVenda = document.getElementById('pagina-vendas');
const imgVendas = vendas.querySelector('span');                 
const todosItens = document.querySelectorAll('.navbar__item'); 


const paginasNav = {
  controle: null,
  vendas: document.getElementById('pagina-vendas'),
  produtos: document.getElementById('pagina-produtos'),
  Apoiadores: document.getElementById('pagina-apoiadores'),
};

navBar.forEach(item => {
  item.addEventListener('click', () => {
    Object.values(paginasNav).forEach(p => p && p.classList.remove('active'));
    if (paginasNav[item.id]) paginasNav[item.id].classList.add('active');

    navBar.forEach(i => {
      const ativo = i === item;
      const icone = i.querySelector('span');
      i.classList.toggle('navbar__item--ativo', ativo);
      icone.classList.toggle('img_nav_active', ativo);
      icone.classList.toggle('img_nav', !ativo);
    });
  });
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

const fichaOpen = document.getElementById('pagina-ficha');
const voltarBtn = document.querySelectorAll('.voltar');

document.getElementById('ficha').addEventListener('click', () => {
    
    fichaOpen.classList.add('active');

    voltarBtn.forEach((back) => [
        back.addEventListener('click', () => {
            fichaOpen.classList.remove('active');
        })
    ])
})

// pagina de apoiadores e fornecedores

const openContent = document.getElementById('btnopencontent');
const addFA = document.getElementById('add-fa');
const descopen = document.getElementById('descopen');
const addCupom = document.getElementById('addcupom');

openContent.addEventListener('click', () => {

    addFA.classList.toggle('open');
    openContent.classList.toggle('click');
    descopen.classList.toggle('active');
})

document.getElementById('btn-adicionar-cupom').addEventListener('click', () => {
    addCupom.classList.add('active');

    voltarBtn.forEach((back) => {
        back.addEventListener('click', () => {
            addCupom.classList.remove('active');
        })
    })
}) 