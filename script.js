/* ==========================================================================
   DEVGAMES - ARQUIVO DE SCRIPT JAVASCRIPT (script.js)
   Trabalho Prático Integrador - Front End
   Desenvolvido por: Arthur Miguel, Eduardo Vinicius e Rhuan Urias

   REGRAS ATENDIDAS:
   - NENHUM uso da palavra-chave 'var' (somente 'const' e 'let').
   - Demonstração com comentários de:
     * Funções Nomeadas: function nomeDaFuncao() { ... }
     * Funções Anônimas: callbacks como function(evento) { ... }
     * Arrow Functions: sintaxe () => { ... }
   - Manipulação completa do DOM (createElement, appendChild, remove, classList, etc.)
   - Todas as mensagens de formulário exibidas via janela alert().
   ========================================================================== */

// Espera o carregamento completo do DOM antes de iniciar os scripts
document.addEventListener('DOMContentLoaded', function() {

    /* ==========================================================================
       1. VALIDAÇÃO DO FORMULÁRIO DE CADASTRO (MÍNIMO 12 CAMPOS)
       ========================================================================== */

    // Seleção do formulário pelo ID (Arthur)
    const formulario = document.getElementById('meuForm');

    // Função auxiliar (ARROW FUNCTION): remove caracteres não numéricos de uma string
    const extrairApenasDigitos = (texto) => {
        let resultado = '';
        for (let i = 0; i < texto.length; i++) {
            const caractere = texto[i];
            if (caractere >= '0' && caractere <= '9') {
                resultado += caractere;
            }
        }
        return resultado;
    };

    // Função Nomeada principal para validação do formulário
    function validarFormulario(evento) {
        // Impede o envio padrão da página ao submeter o formulário
        evento.preventDefault();

        // Leitura de todos os campos com .value, .trim() e conversão com Number()
        const nome = document.getElementById('form-nome').value.trim();
        const email = document.getElementById('form-email').value.trim();
        const emailConfirma = document.getElementById('form-email-confirma').value.trim();
        const senha = document.getElementById('form-senha').value.trim();
        const senhaConfirma = document.getElementById('form-senha-confirma').value.trim();
        const idadeValor = document.getElementById('form-idade').value.trim();
        const idade = Number(idadeValor);
        const dataNascimento = document.getElementById('form-nascimento').value;
        const telefone = document.getElementById('form-telefone').value.trim();
        const plataforma = document.getElementById('form-plataforma').value;
        const genero = document.getElementById('form-genero').value;
        const novidadesMarcada = document.querySelector('input[name="novidades"]:checked');
        const mensagem = document.getElementById('form-mensagem').value.trim();
        const termosAceitos = document.getElementById('form-termos').checked;

        const digitosTelefone = extrairApenasDigitos(telefone);

        // Validação encadeada obrigatória com if / else if / else verificando cada campo específico:

        // Campo 1: Nome Completo (mínimo 3 caracteres)
        if (nome === '' || nome.length < 3) {
            alert('Erro no campo Nome: Por favor, preencha seu nome completo com no mínimo 3 caracteres.');
            document.getElementById('form-nome').focus();
        }

        // Campo 2: E-mail (formato contendo @ e .)
        else if (email === '' || !email.includes('@') || !email.includes('.')) {
            alert('Erro no campo E-mail: Insira um endereço de e-mail válido contendo "@" e ponto ".".');
            document.getElementById('form-email').focus();
        }

        // Campo 3: Confirmar E-mail (idêntico ao e-mail informado)
        else if (emailConfirma === '' || emailConfirma !== email) {
            alert('Erro na Confirmação de E-mail: Os e-mails informados não são idênticos.');
            document.getElementById('form-email-confirma').focus();
        }

        // Campo 4: Senha (mínimo 6 caracteres)
        else if (senha === '' || senha.length < 6) {
            alert('Erro no campo Senha: A senha deve ter no mínimo 6 caracteres para sua segurança.');
            document.getElementById('form-senha').focus();
        }

        // Campo 5: Confirmar Senha (idêntica à senha informada)
        else if (senhaConfirma === '' || senhaConfirma !== senha) {
            alert('Erro na Confirmação de Senha: As duas senhas digitadas não conferem.');
            document.getElementById('form-senha-confirma').focus();
        }

        // Campo 6: Idade (número válido e maior ou igual a 13 anos)
        else if (idadeValor === '' || isNaN(idade) || idade < 13) {
            alert('Erro no campo Idade: Apenas usuários com 13 anos ou mais podem se cadastrar na DevGames.');
            document.getElementById('form-idade').focus();
        }

        // Campo 7: Data de Nascimento (obrigatória e não pode estar no futuro)
        else if (dataNascimento === '') {
            alert('Erro no campo Data de Nascimento: Por favor, selecione sua data de nascimento.');
            document.getElementById('form-nascimento').focus();
        }
        else if (new Date(dataNascimento) > new Date()) {
            alert('Erro na Data de Nascimento: A data informada não pode estar no futuro.');
            document.getElementById('form-nascimento').focus();
        }

        // Campo 8: Telefone (com DDD, 10 ou 11 números)
        else if (digitosTelefone.length < 10 || digitosTelefone.length > 11) {
            alert('Erro no campo Telefone: Digite um número válido com DDD (10 ou 11 números).');
            document.getElementById('form-telefone').focus();
        }

        // Campo 9: Plataforma Favorita (select obrigatório)
        else if (plataforma === '') {
            alert('Erro no campo Plataforma: Por favor, selecione a sua plataforma de jogos favorita.');
            document.getElementById('form-plataforma').focus();
        }

        // Campo 10: Gênero Favorito (select obrigatório)
        else if (genero === '') {
            alert('Erro no campo Gênero: Por favor, selecione seu gênero favorito de jogos.');
            document.getElementById('form-genero').focus();
        }

        // Campo 11: Receber novidades (radio obrigatório)
        else if (!novidadesMarcada) {
            alert('Erro nas Preferências: Indique se deseja ou não receber novidades por e-mail.');
        }

        // Campo 12: Biografia / Mensagem (textarea com mínimo de 10 caracteres)
        else if (mensagem === '' || mensagem.length < 10) {
            alert('Erro no campo Mensagem: Conte um pouco sobre você com pelo menos 10 caracteres.');
            document.getElementById('form-mensagem').focus();
        }

        // Campo 13: Termos de Uso (checkbox obrigatório)
        else if (!termosAceitos) {
            alert('Erro nos Termos: Você precisa aceitar os termos de uso para concluir o cadastro.');
            document.getElementById('form-termos').focus();
        }

        // SUCESSO: Todas as 13 condições foram atendidas (bloco else final com reset())
        else {
            alert('Cadastro realizado com sucesso na DevGames!\nBem-vindo(a) à nossa comunidade, ' + nome + '!');
            formulario.reset();
        }
    }

    // Vinculação do evento de submit usando FUNÇÃO NOMEADA
    formulario.addEventListener('submit', validarFormulario);


    /* ==========================================================================
       2. FUNCIONALIDADE D: CARROSSEL DE GAMEPLAY COM INCLUSÃO DE IMAGEM
       ========================================================================== */

    // Array inicial com 4 imagens locais de gameplay e suas respectivas legendas
    const carrosselImagens = [
        {
            url: 'img/gameplay_spiderman_1.png',
            legenda: 'Spider-Man em combate aéreo sobre a cidade de Nova York'
        },
        {
            url: 'img/gameplay_batman_1.jpg',
            legenda: 'Batman observando Gotham City do alto de uma gárgula gótica'
        },
        {
            url: 'img/gameplay_naruto_1.jpg',
            legenda: 'Naruto preparando o golpe especial Rasengan em combate ninja'
        },
        {
            url: 'img/gameplay_spiderman_2.png',
            legenda: 'Spider-Man balançando em teias durante o pôr do sol'
        }
    ];

    // Variável de controle do índice atual da imagem exibida
    let indiceCarrossel = 0;

    // Elementos do DOM do carrossel
    const elementoImgCarrossel = document.getElementById('carrossel-img');
    const elementoLegendaCarrossel = document.getElementById('carrossel-legenda');
    const elementoContadorCarrossel = document.getElementById('carrossel-contador');
    const btnCarrosselAnt = document.getElementById('carrossel-btn-ant');
    const btnCarrosselProx = document.getElementById('carrossel-btn-prox');
    const inputArquivoCarrossel = document.getElementById('carrossel-file-input');
    const inputLegendaCarrossel = document.getElementById('carrossel-legenda-input');
    const btnAdicionarImgCarrossel = document.getElementById('carrossel-btn-adicionar');

    // Função Nomeada: Atualiza a tela com a imagem, legenda e contador do índice atual
    function atualizarCarrossel() {
        const itemAtual = carrosselImagens[indiceCarrossel];
        elementoImgCarrossel.src = itemAtual.url;
        elementoImgCarrossel.alt = itemAtual.legenda;
        elementoLegendaCarrossel.textContent = itemAtual.legenda;
        elementoContadorCarrossel.textContent = (indiceCarrossel + 1) + ' / ' + carrosselImagens.length;

        // Respeitando os limites do carrossel:
        // Desabilita o botão Anterior no primeiro item (índice 0)
        btnCarrosselAnt.disabled = (indiceCarrossel === 0);

        // Desabilita o botão Próximo no último item
        btnCarrosselProx.disabled = (indiceCarrossel === carrosselImagens.length - 1);
    }

    // Inicializa o carrossel com o primeiro elemento
    atualizarCarrossel();

    // Evento do botão Anterior (FUNÇÃO ANÔNIMA)
    btnCarrosselAnt.addEventListener('click', function() {
        if (indiceCarrossel > 0) {
            indiceCarrossel--;
            atualizarCarrossel();
        }
    });

    // Evento do botão Próximo (FUNÇÃO ANÔNIMA)
    btnCarrosselProx.addEventListener('click', function() {
        if (indiceCarrossel < carrosselImagens.length - 1) {
            indiceCarrossel++;
            atualizarCarrossel();
        }
    });

    // Evento de Adicionar Nova Imagem do Computador ao Carrossel (ARROW FUNCTION)
    btnAdicionarImgCarrossel.addEventListener('click', () => {
        const arquivos = inputArquivoCarrossel.files;
        const textoLegenda = inputLegendaCarrossel.value.trim();

        // Validação: precisa escolher arquivo e preencher legenda
        if (!arquivos || arquivos.length === 0) {
            alert('Por favor, selecione uma imagem do seu computador!');
            return;
        }

        if (textoLegenda === '') {
            alert('Por favor, digite uma legenda para a imagem adicionada!');
            inputLegendaCarrossel.focus();
            return;
        }

        const arquivoSelecionado = arquivos[0];

        // Criação de URL temporária via URL.createObjectURL (solução pura de Front End, sem servidor)
        const urlTemporaria = URL.createObjectURL(arquivoSelecionado);

        // Adiciona o novo objeto de imagem ao final do array
        carrosselImagens.push({
            url: urlTemporaria,
            legenda: textoLegenda
        });

        // Navega diretamente para a imagem recém-adicionada
        indiceCarrossel = carrosselImagens.length - 1;
        atualizarCarrossel();

        // Limpa os campos de entrada
        inputArquivoCarrossel.value = '';
        inputLegendaCarrossel.value = '';

        alert('Nova imagem adicionada com sucesso ao carrossel de gameplay!');
    });


    /* ==========================================================================
       3. FUNCIONALIDADE E: LISTA DE DESEJOS DINÂMICA COM EDIÇÃO E FILTROS
       ========================================================================== */

    // Array em memória para armazenar os jogos desejados
    let listaDesejos = [
        { id: 1, nome: 'Grand Theft Auto VI', comprado: false },
        { id: 2, nome: 'The Witcher 4', comprado: false },
        { id: 3, nome: 'Marvel\'s Spider-Man', comprado: true }
    ];

    // Variável para armazenar o filtro atual ('todos', 'pendentes' ou 'comprados')
    let filtroDesejosAtual = 'todos';

    // Elementos do DOM da Lista de Desejos
    const inputTextoDesejo = document.getElementById('desejo-texto-input');
    const btnAdicionarDesejo = document.getElementById('desejo-btn-adicionar');
    const ulListaDesejos = document.getElementById('lista-desejos-ul');
    const spanTotal = document.getElementById('contador-total');
    const spanPendentes = document.getElementById('contador-pendentes');
    const spanComprados = document.getElementById('contador-comprados');
    const btnLimparTodosDesejos = document.getElementById('desejo-btn-limpar-todos');
    const botoesFiltro = document.querySelectorAll('.filtro-btn');

    // ARROW FUNCTION: Atualiza os números dos contadores após qualquer ação
    const atualizarContadoresDesejos = () => {
        const total = listaDesejos.length;
        let comprados = 0;
        let pendentes = 0;

        for (let i = 0; i < listaDesejos.length; i++) {
            if (listaDesejos[i].comprado) {
                comprados++;
            } else {
                pendentes++;
            }
        }

        spanTotal.textContent = 'Total: ' + total;
        spanPendentes.textContent = 'Pendentes: ' + pendentes;
        spanComprados.textContent = 'Comprados: ' + comprados;
    };

    // Função Nomeada: Renderiza a lista na tela criando elementos via DOM (createElement)
    function renderizarListaDesejos() {
        // Limpa o conteúdo atual da lista
        ulListaDesejos.innerHTML = '';

        // Filtra a lista de acordo com o filtro selecionado
        let itensFiltrados = [];
        for (let i = 0; i < listaDesejos.length; i++) {
            const item = listaDesejos[i];
            if (filtroDesejosAtual === 'todos') {
                itensFiltrados.push(item);
            } else if (filtroDesejosAtual === 'comprados' && item.comprado) {
                itensFiltrados.push(item);
            } else if (filtroDesejosAtual === 'pendentes' && !item.comprado) {
                itensFiltrados.push(item);
            }
        }

        // Se a lista estiver vazia para o filtro, exibe mensagem informativa
        if (itensFiltrados.length === 0) {
            const liVazio = document.createElement('li');
            liVazio.textContent = 'Nenhum jogo encontrado nesta categoria.';
            liVazio.className = 'desejo-item';
            ulListaDesejos.appendChild(liVazio);
            atualizarContadoresDesejos();
            return;
        }

        // Percorre os itens e constrói os elementos HTML do DOM
        for (let i = 0; i < itensFiltrados.length; i++) {
            const jogo = itensFiltrados[i];

            // Cria o elemento <li>
            const li = document.createElement('li');
            li.className = 'desejo-item' + (jogo.comprado ? ' comprado' : '');

            // Cria o texto com o nome do jogo
            const spanTexto = document.createElement('span');
            spanTexto.className = 'desejo-texto';
            spanTexto.textContent = jogo.nome + (jogo.comprado ? ' (Comprado)' : ' (Pendente)');

            // Cria o contêiner de botões de ação
            const divBotoes = document.createElement('div');
            divBotoes.className = 'desejo-botoes';

            // 1. Botão de Alternar Status (Comprado / Pendente)
            const btnStatus = document.createElement('button');
            btnStatus.type = 'button';
            btnStatus.className = 'btn-acao-item ' + (jogo.comprado ? 'btn-status-pendente' : 'btn-status-comprado');
            btnStatus.textContent = jogo.comprado ? 'Marcar Pendente' : 'Marcar Comprado';
            btnStatus.addEventListener('click', function() {
                jogo.comprado = !jogo.comprado;
                renderizarListaDesejos();
            });

            // 2. Botão de Editar Nome do Jogo
            const btnEditar = document.createElement('button');
            btnEditar.type = 'button';
            btnEditar.className = 'btn-acao-item btn-editar-item';
            btnEditar.textContent = 'Editar';
            btnEditar.addEventListener('click', function() {
                const novoNome = prompt('Digite o novo nome para o jogo:', jogo.nome);
                if (novoNome !== null) {
                    const textoLimpo = novoNome.trim();
                    if (textoLimpo !== '') {
                        jogo.nome = textoLimpo;
                        renderizarListaDesejos();
                    } else {
                        alert('O nome do jogo não pode ser vazio!');
                    }
                }
            });

            // 3. Botão de Excluir Item
            const btnExcluir = document.createElement('button');
            btnExcluir.type = 'button';
            btnExcluir.className = 'btn-acao-item btn-excluir-item';
            btnExcluir.textContent = 'Excluir';
            btnExcluir.addEventListener('click', function() {
                // Remove o item do array principal
                for (let k = 0; k < listaDesejos.length; k++) {
                    if (listaDesejos[k].id === jogo.id) {
                        listaDesejos.splice(k, 1);
                        break;
                    }
                }
                renderizarListaDesejos();
            });

            // Monta a estrutura anexando os elementos
            divBotoes.appendChild(btnStatus);
            divBotoes.appendChild(btnEditar);
            divBotoes.appendChild(btnExcluir);

            li.appendChild(spanTexto);
            li.appendChild(divBotoes);

            ulListaDesejos.appendChild(li);
        }

        // Atualiza os contadores
        atualizarContadoresDesejos();
    }

    // Inicializa a renderização da lista
    renderizarListaDesejos();

    // Evento de Adicionar Novo Desejo (FUNÇÃO NOMEADA)
    function adicionarNovoDesejo() {
        const texto = inputTextoDesejo.value.trim();

        if (texto === '') {
            alert('Por favor, digite o nome de um jogo antes de adicionar!');
            inputTextoDesejo.focus();
            return;
        }

        // Cria o novo objeto do jogo
        const novoItem = {
            id: Date.now(),
            nome: texto,
            comprado: false
        };

        listaDesejos.push(novoItem);
        inputTextoDesejo.value = '';
        inputTextoDesejo.focus();
        renderizarListaDesejos();
    }

    btnAdicionarDesejo.addEventListener('click', adicionarNovoDesejo);

    // Permite adicionar apertando a tecla Enter no campo
    inputTextoDesejo.addEventListener('keyup', function(evento) {
        if (evento.key === 'Enter') {
            adicionarNovoDesejo();
        }
    });

    // Evento de Apagar Todos os Itens
    btnLimparTodosDesejos.addEventListener('click', function() {
        if (listaDesejos.length === 0) {
            alert('A lista de desejos já está vazia!');
            return;
        }

        listaDesejos = [];
        renderizarListaDesejos();
        alert('Todos os jogos foram removidos da sua lista de desejos!');
    });

    // Configuração dos Botões de Filtro (Todos / Pendentes / Comprados)
    for (let i = 0; i < botoesFiltro.length; i++) {
        botoesFiltro[i].addEventListener('click', function() {
            // Remove a classe ativa de todos
            for (let j = 0; j < botoesFiltro.length; j++) {
                botoesFiltro[j].classList.remove('ativo');
            }
            // Adiciona a classe ativa no botão clicado
            this.classList.add('ativo');

            // Atualiza a variável de filtro e re-renderiza
            filtroDesejosAtual = this.getAttribute('data-filtro');
            renderizarListaDesejos();
        });
    }


    /* ==========================================================================
       4. FUNCIONALIDADE F: PERSONALIZAÇÃO VISUAL COM CONTROLES INDEPENDENTES
       Responsável: Rhuan Urias
       ========================================================================== */

    // Botão geral de alternar tema da página inteira (Claro / Escuro)
    const btnTemaGeral = document.getElementById('btn-tema-geral');

    // Função Nomeada: Atualiza o texto do botão de tema conforme o estado atual
    function atualizarTextoTema() {
        const estaEscuro = document.body.classList.contains('tema-escuro');
        btnTemaGeral.textContent = estaEscuro ? 'Ativar Modo Claro' : 'Ativar Modo Escuro';
    }

    // Função Nomeada: Alterna a classe de tema escuro global no body
    function alternarTemaGlobal() {
        document.body.classList.toggle('tema-escuro');
        atualizarTextoTema();
    }

    btnTemaGeral.addEventListener('click', alternarTemaGlobal);


    // 5 Botões Independentes para alternar cores de 5 áreas diferentes (2 estados cada):
    // Área 1: Cabeçalho
    const btnCorCabecalho = document.getElementById('btn-cor-cabecalho');
    const headerElemento = document.querySelector('header');
    btnCorCabecalho.addEventListener('click', function() {
        headerElemento.classList.toggle('eduardo_cabecalho_alt');
        const ativo = headerElemento.classList.contains('eduardo_cabecalho_alt');
        this.textContent = ativo ? 'Cabeçalho: Roxo Gamer' : 'Cabeçalho: Cor Padrão';
    });

    // Área 2: Menu de Navegação (nav)
    const btnCorNav = document.getElementById('btn-cor-nav');
    const navElemento = document.querySelector('nav');
    btnCorNav.addEventListener('click', function() {
        navElemento.classList.toggle('arthur_nav_alt');
        const ativo = navElemento.classList.contains('arthur_nav_alt');
        this.textContent = ativo ? 'Menu: Dourado & Preto' : 'Menu: Grafite Padrão';
    });

    // Área 3: Cards de Jogos
    const btnCorCards = document.getElementById('btn-cor-cards');
    const containerCards = document.querySelector('.grid-a');
    btnCorCards.addEventListener('click', function() {
        containerCards.classList.toggle('cards_alt');
        const ativo = containerCards.classList.contains('cards_alt');
        this.textContent = ativo ? 'Cards: Borda Neon' : 'Cards: Borda Padrão';
    });

    // Área 4: Barra Lateral (aside)
    const btnCorLateral = document.getElementById('btn-cor-lateral');
    const asideElemento = document.querySelector('aside');
    btnCorLateral.addEventListener('click', function() {
        asideElemento.classList.toggle('arthur_lateral_alt');
        const ativo = asideElemento.classList.contains('arthur_lateral_alt');
        this.textContent = ativo ? 'Lateral: Azul Noturno' : 'Lateral: Neutro Padrão';
    });

    // Área 5: Rodapé (footer)
    const btnCorRodape = document.getElementById('btn-cor-rodape');
    const footerElemento = document.querySelector('footer');
    btnCorRodape.addEventListener('click', function() {
        footerElemento.classList.toggle('eduardo_rodape_alt');
        const ativo = footerElemento.classList.contains('eduardo_rodape_alt');
        this.textContent = ativo ? 'Rodapé: Carmim Noturno' : 'Rodapé: Escuro Padrão';
    });

    // Botão Restaurar para voltar às cores iniciais
    const btnRestaurar = document.getElementById('btn-restaurar-cores');
    btnRestaurar.addEventListener('click', function() {
        // Remove a classe do tema escuro global
        document.body.classList.remove('tema-escuro');
        atualizarTextoTema();

        // Remove as classes customizadas das 5 áreas independentes
        headerElemento.classList.remove('eduardo_cabecalho_alt');
        navElemento.classList.remove('arthur_nav_alt');
        containerCards.classList.remove('cards_alt');
        asideElemento.classList.remove('arthur_lateral_alt');
        footerElemento.classList.remove('eduardo_rodape_alt');

        // Restaura os textos originais de cada botão
        btnCorCabecalho.textContent = 'Mudar Cor do Cabeçalho';
        btnCorNav.textContent = 'Mudar Cor do Menu';
        btnCorCards.textContent = 'Mudar Cor dos Cards';
        btnCorLateral.textContent = 'Mudar Cor da Lateral';
        btnCorRodape.textContent = 'Mudar Cor do Rodapé';

        alert('Todas as cores das 5 áreas e o tema global foram restaurados para o padrão original da DevGames!');
    });

});
