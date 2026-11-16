# 09 - Glossário Técnico do Projeto DevGames

Termos técnicos essenciais utilizados na implementação e na defesa oral, explicados de maneira direta e concisa.

---

- **DOM (Document Object Model):** Representação em árvore de objetos que o navegador cria na memória a partir do código HTML, permitindo que o JavaScript altere dinamicamente conteúdos, estruturas e estilos.
- **One Page Application:** Arquitetura de página única onde todo o conteúdo é carregado de uma só vez e a navegação ocorre por rolagem interna através de links âncora.
- **HTML Semântico:** Uso de tags que atribuem significado ao conteúdo (como `<header>`, `<article>`, `<section>`, `<nav>`, `<footer>`) em vez de apenas fins visuais.
- **CSS Grid:** Sistema de layout bidimensional nativo do CSS que permite criar grades complexas com controle simultâneo de linhas e colunas.
- **Unidade `fr` (Fraction):** Unidade de medida do CSS Grid que representa uma fração proporcional do espaço disponível no contêiner.
- **`repeat()`:** Função do CSS Grid usada para repetir declarações de colunas ou linhas idênticas de forma limpa e econômica.
- **`grid-template-areas`:** Propriedade do CSS Grid que permite desenhar a grade visualmente nomeando áreas com strings entre aspas.
- **`grid-area`:** Propriedade aplicada ao elemento filho para associá-lo a uma área com nome correspondente no `grid-template-areas`.
- **Media Queries (`@media`):** Regras de CSS que aplicam estilos condicionais com base nas características do dispositivo, como largura de tela (`max-width`).
- **Variáveis CSS (`var(--...)`):** Propriedades personalizadas declaradas no `:root` que armazenam valores reutilizáveis em cascata, facilitando a troca de temas.
- **Hoisting (Içamento):** Comportamento do JavaScript em que declarações de funções e variáveis com `var` são movidas para o topo de seu escopo antes da execução do código.
- **Escopo de Bloco:** Limitação da visibilidade de uma variável ao bloco `{ }` onde foi criada, característica fundamental de `let` e `const`.
- **Temporal Dead Zone (TDZ):** Período entre a entrada no escopo e a declaração real de uma variável com `let` ou `const`, onde acessá-la dispara um erro.
- **Função Nomeada:** Função declarada com um identificador formal (`function nome() { }`), reutilizável em múltiplos pontos do código.
- **Função Anônima:** Função sem nome próprio, frequentemente utilizada como argumento direto de callback em manipuladores de eventos.
- **Arrow Function:** Sintaxe moderna concisa (`() => { }`) para criação de funções, que não cria seu próprio contexto de `this`.
- **`addEventListener`:** Método do DOM que vincula uma função ouvinte a um evento disparado pelo usuário (como `click`, `submit`, `keyup`).
- **`event.preventDefault()`:** Método que cancela o comportamento padrão do navegador para um determinado evento, como impedir o recarregamento da página no envio de formulários.
- **`document.createElement()`:** Método que cria um novo nó de elemento HTML na memória do navegador.
- **`appendChild()`:** Método que insere um nó filho no final da lista de filhos de um elemento pai na árvore DOM.
- **`classList.toggle()`:** Método que adiciona uma classe CSS ao elemento se ela não existir, ou a remove caso já esteja presente.
- **`URL.createObjectURL()`:** API do navegador que gera uma URL única temporária apontando para um arquivo local ou blob na memória do navegador, sem envio a servidor.
- **`.trim()`:** Método de strings que remove espaços em branco no início e no final de um texto digitado.
- **`Number()`:** Função nativa que converte uma string em valor numérico para permitir operações e comparações matemáticas.
- **`novalidate`:** Atributo booleano da tag `<form>` que desativa as mensagens nativas do navegador para permitir validação 100% controlada via JavaScript.
