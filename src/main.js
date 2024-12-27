//-------------------------------------------------------------------------------------
//CÓDIGO DAS ABAS DE FILMES

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
//-------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------
//CODIGO DAS ABAS DE FAQ

document.addEventListener('DOMContentLoaded', function(){
    //LOCALIZA NO HTML TODOS OS ELEMENTOS COM O ATRIBUTO "DATA-FAQ-QUESTION" E RETORNA UMA NODE LIST
    const questions = document.querySelectorAll('[data-faq-question]');
    
    //PERCORRE O LISTA DE PERGUNTAS EM LOOP E ADICIONA UM OUVINTE DE EVENTOS PARA CAPTURAR O EVENTO "CLICK"
    //QUANDO O "CLICK" ACONTECE EXECUTA-SE A FUNÇÃO "ABREOUFECHARESPOSTA"
    for (let i =0; i < questions.length; i++){
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
})

function abreOuFechaResposta(elemento){
    //CRIA UM VARIÁVEL DE CADEIA DE CARACTERES PARA INSERIR NA CLASSE
    const classe = 'faq__questions__item--is-open';
    //ELEMENTO.TARGET É O ELEMENTO CLICADO, ENQUANTO O PARENTNODE É O ELEMENTO PAI, NO CASO O <LI>
    const elementoPai = elemento.target.parentNode;
    //O TOGGLE ADICIONA A CLASSE SE ELE NÃO ESTIVER INSERIDA, OU EXCLUI SE TIVER, POR CAUSA DO CLASSLIST
    elementoPai.classList.toggle(classe);
}
//-------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------
//APARECEREM OS ELEMENTOS EM HIDDEN APÓS A ROLAGEM PASSAR DA ALTURA DA PÁGINA

document.addEventListener('DOMContentLoaded', function(){
    //SELECIONA O HERO POIS VAI SER O PARÂMETRO DE ALTURA. QUEREMOS QUE OS ÍCONES EM HIDE APAREÇAM APÓS ELE
    const heroSection = document.querySelector('.hero');
    //O CLIENTHEIGHT RETORNA A ALTURA DO ELEMENTO EM PIXELS COM PADDING (MAS SEM MARGENS E BORDAS)
    const alturaHero = heroSection.clientHeight;
    
    //WINDOW É UMA VARIÁVEL GLOBA, OU SEJA, NÃO PRECISA SER DECLARADA
    //E REFERE-SE A JANELA DO NAVEGADOR, ENTÃO:
    //ADICIONA-SE UM EVENTO DE OBSERVAR TODA A VEZ QUE HOUVER UM SCROLL NA JANELA
    window.addEventListener('scroll', function(){
        
        //CRIA A VARIÁVEL DE SCROLL NA VERTICAL (Y), QUE RETORNA A POSIÇÃ VERTICAL DO SCROLL EM PIXELS
        const posicaoAtual = window.scrollY;

        //É MELHOR DESAPARECER QDO CHEGAR NA ALTURA DO HERO, PARA QUE A FUNÇÃO SEJA EXECUTADA MENOS VEZES
        //POIS O JAVASCRIPT É EXECUTADO NO APARELHO
        if (posicaoAtual < alturaHero){
            ocultaElementosDoHeader();
        } else{
            exibeElementosDoHeader();
        }
    })
})

//SELECIONA O ELEMENTO HEADER E ADICIONA A CLASSE
function ocultaElementosDoHeader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

//SELECIONA O ELEMENTO HEADER E REMOVE A CLASSE
function exibeElementosDoHeader(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

//-------------------------------------------------------------------------------------