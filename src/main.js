//O "DOMCONTENTLOADED" FUNCIONA PARA FAZER A PÁGINA SER TOTALMENTE CARREGADA 
//ANTES DE EXECUTAR O CÓDIGO. É IMPORTANTE PARA QUE O JS NÃO TENTE ACESSAR 
//ELEMENTOS COMO BOTÕES E ABAS SEM QUE ESTEJAM CARREGADOS
document.addEventListener('DOMContentLoaded', function(){
    
    //SELECIONA TODOS OS ELEMENTOS COM O ATRIBUTO "DATA-TAB-BUTTON"
    const buttons = document.querySelectorAll('[data-tab-button]');

    //O FOR É UM LOOP QUE PERCORRE TODOS OS BOTÕES SELECIONADOS
    for (let i =0; i < buttons.length; i++){
        //PARA CADA BOTÃO ADICIONAMOS UM EVENTO DE "CLICK"
        //AO SER CLICADO A FUNÇÃO É EXECUTADA
        //BOTAO = EVENTO DE CLICK
        buttons[i].addEventListener('click', function(botao){
            //PERMITE CHEGAR AO VALOR DO ATRIBUTO DATA-TAB-BUTTON (QUE NO CASO SERA 
            //"POPULARES, "STAR_PLUS" OU "EM_BREVE")
            const abaAlvo = botao.target.dataset.tabButton;
            //ACHA A <UL> COM O "DATA-TAB-ID" = AO DA "ABAALVO"
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            //CHAMA A FUNÇÃO DE ESCONDER AS ABAS
            escondeTodasAbas();
            //ADICIONA A CLASSE "SHOWS__LIST--IS-ACTIVE" A <UL>
            aba.classList.add('shows__list--is-active');
            //CHAMA A FUNÇÃO DE ESCONDER A IDICAÇÃO DE BOTÃO ATIVO
            escondeBotaoAtivo()
            //ADICIONA A CLASSE "SHOWS__tabs--IS-ACTIVE" AO <BUTTON>
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }
})

function escondeBotaoAtivo(){
    //SELECIONA TODOS OS BOTÕES
    const buttons = document.querySelectorAll('[data-tab-button]');

    //REMOVE A CLASSE "SHOWS__TABS_BUTTON--IS-ACTIVE"
    for (let i =0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondeTodasAbas(){
    //SELECIONA TODAS AS UL COM "DATA-TAB-ID"
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    
    //REMOVE A CLASSE "SHOWS__LIST--IS-ACTIVE" DE TODOS
    for (let i =0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}

//PARA SELECIONAR O ATRIBUTO É POSSÍVEL FAZER DE 2 FORMAS:
//1) PELO GET ATTRIBUTE:
//variável.getAttribute('data-tab-button')
//
//2) SEM PRECISAR DE UMA FUNÇÃO, RECUPERANDO NOME E VALOR DO ATRIBUTO:
//variável.dataset