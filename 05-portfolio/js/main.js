/* ============================================================
   js/main.js — COMPORTAMENTO do portfólio
   ============================================================

   O QUE ESTE ARQUIVO FAZ:
   1) Criar os cards a partir do array projetos (projetos.js)
   2) Filtrar os cards por tecnologia
   3) Abrir o modal com os subprojetos de um repositório
   4) Fechar o menu hambúrguer ao clicar num link (celular)
   5) Destacar no menu a seção que está na tela (ScrollSpy)
   ============================================================ */


/* ------------------------------------------------------------
   0. ELEMENTOS DA PÁGINA
   ------------------------------------------------------------ */

const listaProjetos = document.querySelector("#lista-projetos");
const filtros = document.querySelector(".filtros");
const resumoFiltro = document.querySelector("#resumo-filtro");
const menu = document.querySelector("#menu");

const modal = document.querySelector("#modal-projeto");
const modalTitulo = document.querySelector("#modal-titulo");
const modalDescricao = document.querySelector("#modal-descricao");
const modalSubprojetos = document.querySelector("#modal-subprojetos");
const modalRepo = document.querySelector("#modal-repo");

// Guarda o filtro selecionado atualmente.
let filtroAtual = "todos";

// O Bootstrap vem de um CDN. Se ele não carregar (sem internet, bloqueio),
// "bootstrap" não existe e usar new bootstrap.Modal() quebraria o arquivo
// inteiro, inclusive os cards. Por isso conferimos antes.
const bootstrapDisponivel = typeof bootstrap !== "undefined";


/* ------------------------------------------------------------
   1. CRIAR OS CARDS
   ------------------------------------------------------------ */

// criarCard(projeto): recebe um objeto e devolve uma string HTML.
// ATENÇÃO: os nomes depois do ponto (projeto.nome, projeto.imagemAlt...) precisam
// ser IGUAIS aos do projetos.js. Se algum não existir, aparece "undefined" na tela.

function criarCard(projeto) {

    // Cria o botão somente se existirem subprojetos.
    const botaoProjetos = projeto.subprojetos.length > 0
        ? `<button type="button"
                   class="projeto-botao"
                   data-id="${projeto.id}">
                Ver projetos
           </button>`
        : "";

    // Cria o link da demonstração somente se existir uma URL.
    const linkDemo = projeto.demo
        ? `<a href="${projeto.demo}"
              target="_blank"
              rel="noopener">
                Demo
           </a>`
        : "";

    // Transforma cada tecnologia em um item da lista.
    const tecnologias = projeto.tecnologias
        .map(t => `<li>${t}</li>`)
        .join("");

    // Retorna a estrutura HTML do card.
    return `
        <div class="col-md-6 col-lg-4">

            <article class="projeto-card">

                <img
                    class="projeto-capa"
                    src="${projeto.imagem}"
                    alt="${projeto.imagemAlt}"
                    loading="lazy"
                    decoding="async"
                >

                <div class="projeto-corpo">

                    <h3 class="projeto-titulo">
                        ${projeto.nome}
                    </h3>

                    <p class="projeto-descricao">
                        ${projeto.descricao}
                    </p>

                    <ul class="lista-chips projeto-tags">
                        ${tecnologias}
                    </ul>

                    <div class="projeto-acoes">

                        ${botaoProjetos}

                        <a href="${projeto.repositorio}"
                           target="_blank"
                           rel="noopener">
                            Repositório
                        </a>

                        ${linkDemo}

                    </div>

                </div>

            </article>

        </div>
    `;
}


// renderizarProjetos(lista): desenha os cards na página.

function renderizarProjetos(lista) {

    // Transforma todos os projetos em HTML e insere na página.
    listaProjetos.innerHTML = lista
        .map(criarCard)
        .join("");

    // Atualiza a quantidade de projetos exibidos.
    atualizarResumo(lista.length);
}


/* ------------------------------------------------------------
   2. FILTRAR
   ------------------------------------------------------------ */

// Atualiza o texto que informa a quantidade de projetos.

function atualizarResumo(quantidade) {

    if (quantidade === 0) {

        resumoFiltro.textContent =
            filtroAtual === "todos"
                ? "Nenhum projeto cadastrado."
                : `Nenhum projeto encontrado com ${filtroAtual}.`;

    }

    else if (filtroAtual === "todos") {

        resumoFiltro.textContent =
            quantidade === 1
                ? "Mostrando 1 projeto"
                : `Mostrando ${quantidade} projetos`;

    }

    else {

        resumoFiltro.textContent =
            quantidade === 1
                ? `Mostrando 1 projeto com ${filtroAtual}`
                : `Mostrando ${quantidade} projetos com ${filtroAtual}`;

    }
}


// Atualiza o botão que está selecionado.

function atualizarBotoes() {

    document.querySelectorAll(".btn-filtro").forEach(botao => {

        // Verifica se o filtro do botão é o filtro atual.
        const ativo = botao.dataset.filtro === filtroAtual;

        // Adiciona ou remove a classe ativo.
        botao.classList.toggle("ativo", ativo);

        // Atualiza o atributo de acessibilidade.
        botao.setAttribute(
            "aria-pressed",
            ativo ? "true" : "false"
        );

    });
}


// Filtra os projetos de acordo com a tecnologia escolhida.

function filtrarProjetos(tecnologia) {

    // Guarda o filtro selecionado (criarCard e atualizarResumo leem esta variável).
    filtroAtual = tecnologia;

    let listaFiltrada;

    // Se o filtro for todos, mostra todos os projetos.
    if (tecnologia === "todos") {

        listaFiltrada = projetos;

    }

    // Caso contrário, procura projetos que tenham a tecnologia.
    else {

        listaFiltrada = projetos.filter(projeto =>
            projeto.tecnologias.includes(tecnologia)
        );

    }

    // Atualiza os cards exibidos.
    renderizarProjetos(listaFiltrada);

    // Atualiza o botão selecionado.
    atualizarBotoes();
}


/* ------------------------------------------------------------
   3. MODAL DE SUBPROJETOS
   ------------------------------------------------------------ */

// Cria uma instância do modal do Bootstrap (ou null, se o Bootstrap não carregou).

const modalBootstrap = bootstrapDisponivel
    ? new bootstrap.Modal(modal)
    : null;


// Abre o modal e apresenta os subprojetos do repositório.

function abrirModal(id) {

    // Procura o projeto pelo seu identificador.
    const projeto = projetos.find(p =>
        String(p.id) === String(id)
    );

    // Interrompe a função caso o projeto não exista.
    if (!projeto) {
        return;
    }

    // Preenche o título e a descrição do modal.
    modalTitulo.textContent = projeto.nome;

    modalDescricao.textContent = projeto.descricao;

    // Define o endereço do repositório.
    modalRepo.href = projeto.repositorio;

    // Cria a lista de subprojetos.
    modalSubprojetos.innerHTML = projeto.subprojetos
        .map(subprojeto => {

            // Verifica se o subprojeto possui descrição.
            const descricao = subprojeto.descricao
                ? `<p>${subprojeto.descricao}</p>`
                : "";

            // Verifica se o subprojeto possui demonstração.
            const demo = subprojeto.demo
                ? `<p>
                    <a href="${subprojeto.demo}"
                       target="_blank"
                       rel="noopener">
                        Ver demonstração
                    </a>
                   </p>`
                : "";

            // Retorna o HTML de cada subprojeto (o link do código se chama "link").
            return `
                <li>

                    <a href="${subprojeto.link}"
                       target="_blank"
                       rel="noopener">
                        ${subprojeto.nome}
                    </a>

                    ${descricao}

                    ${demo}

                </li>
            `;

        })
        .join("");

    // Exibe o modal.
    if (modalBootstrap) {
        modalBootstrap.show();
    }
}


/* ------------------------------------------------------------
   4. EVENTOS
   ------------------------------------------------------------ */

// Clique nos botões de filtro.

filtros.addEventListener("click", function(event) {

    // Procura o botão de filtro clicado.
    const botao = event.target.closest(".btn-filtro");

    // Se encontrou um botão, executa o filtro.
    if (botao) {

        filtrarProjetos(botao.dataset.filtro);

    }

});


// Clique nos botões "Ver projetos" dos cards.

listaProjetos.addEventListener("click", function(event) {

    // Procura o botão clicado.
    const botao = event.target.closest(".projeto-botao");

    // Se encontrou, abre o modal correspondente.
    if (botao) {

        abrirModal(botao.dataset.id);

    }

});


// Fecha o menu hambúrguer ao clicar em um link.

if (bootstrapDisponivel) {

    document.querySelectorAll("#menu .nav-link").forEach(link => {

        link.addEventListener("click", function() {

            // Recupera ou cria a instância do menu Bootstrap.
            const menuBootstrap =
                bootstrap.Collapse.getOrCreateInstance(menu, {
                    toggle: false
                });

            // Fecha o menu (no desktop o menu não está "aberto", então nada acontece).
            menuBootstrap.hide();

        });

    });

}


/* ------------------------------------------------------------
   5. SCROLLSPY
   ------------------------------------------------------------ */

// Destaca automaticamente a seção atual no menu.

if (bootstrapDisponivel) {

    new bootstrap.ScrollSpy(document.body, {

        target: "#menu",

        rootMargin: "-30% 0px -60% 0px"

    });

}


/* ------------------------------------------------------------
   6. INÍCIO
   ------------------------------------------------------------ */

// Exibe todos os projetos quando a página é carregada.

renderizarProjetos(projetos);

// Marca o filtro "todos" como selecionado.
atualizarBotoes();