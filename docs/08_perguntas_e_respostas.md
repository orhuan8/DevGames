# 08 - Banco de 25 Perguntas e Respostas para a Defesa Oral

Organizado estritamente de acordo com os **5 eixos de avaliação** do Trabalho Prático Integrador (cada eixo vale 0,8 ponto na nota individual da defesa).

---

## Eixo 1: HTML, Semântica e Navegação One Page (0,8 Ponto)

### 1. O que caracteriza uma página "One Page" e como o usuário navega nela?
> **Resposta para falar:** *"Uma página One Page concentra todo o conteúdo em um único arquivo HTML. A navegação ocorre por rolagem interna através de links âncora com `#id` que apontam diretamente para os IDs exclusivos de cada seção."*

### 2. Por que tags como `<header>`, `<nav>`, `<main>` e `<footer>` só podem aparecer uma vez cada no projeto?
> **Resposta para falar:** *"Porque representam a macroestrutura semântica do documento: um único cabeçalho principal, uma barra de navegação global, uma única área de conteúdo exclusivo e um único rodapé institucional."*

### 3. Qual a diferença prática entre `<section>` e `<article>` no projeto de vocês?
> **Resposta para falar:** *"Usamos `<section>` para grandes divisões temáticas da página, como a Loja ou Lançamentos. Já o `<article>` foi usado para cada card de jogo individual, pois ele é um conteúdo independente que tem sentido próprio por si só."*

### 4. Para que serve o elemento `<aside>` e onde ele foi aplicado?
> **Resposta para falar:** *"O `<aside>` representa um conteúdo complementar ou lateral. Aplicamos na nossa barra lateral de filtros rápidos e suporte (`.arthur_lateral`), ao lado do catálogo principal."*

### 5. Como garantiram que a tabela de lançamentos seja acessível e semanticamente correta?
> **Resposta para falar:** *"Utilizamos a estrutura completa da W3C: `<table>`, `<caption>` para o título, `<thead>` e `<tbody>` para dividir cabeçalho e dados, e `<th scope="col">` nas células do cabeçalho para indicar aos leitores de tela a qual coluna cada dado pertence."*

---

## Eixo 2: CSS e CSS Grid (0,8 Ponto)

### 6. O que é o CSS Grid e qual a diferença básica entre ele e o Flexbox?
> **Resposta para falar:** *"O CSS Grid é bidimensional, controlando linhas e colunas ao mesmo tempo. O Flexbox é unidimensional, controlando o fluxo em uma única direção (linha ou coluna por vez)."*

### 7. Como funciona o Grid A nos cards de jogos da loja?
> **Resposta para falar:** *"Usamos `display: grid` com `grid-template-columns: repeat(4, 1fr)`. A função `repeat` cria 4 colunas com exatamente a mesma proporção (`1fr`) do espaço disponível, com espaçamento definido por `gap`."*

### 8. Explique o Grid B e por que as colunas têm tamanhos diferentes.
> **Resposta para falar:** *"No Grid B usamos `grid-template-columns: 1fr 2fr 1fr`. As três colunas são desiguais: a coluna do meio tem `2fr`, ou seja, o dobro do tamanho das duas colunas laterais (`1fr`), destacando a imagem central de gameplay."*

### 9. Como funciona o Grid C com `grid-template-areas` e `grid-area`?
> **Resposta para falar:** *"O contêiner pai define um mapa visual através de `grid-template-areas: 'lateral principal'`. Em seguida, os elementos filhos se associam a essas áreas usando a propriedade `grid-area: lateral` e `grid-area: principal`."*

### 10. O que acontece com o Grid no celular ou tablet através das Media Queries?
> **Resposta para falar:** *"Em telas até 768px, a media query reorganiza a propriedade `grid-template-areas` para colocar a lateral em cima do conteúdo principal em uma só coluna (`1fr`), e no Grid B e Grid A reduzimos as colunas para evitar que os cards fiquem espremidos."*

---

## Eixo 3: JavaScript, Funções, Eventos e Escopo (0,8 Ponto)

### 11. Por que o uso de `var` é terminantemente proibido e como vocês garantiram isso?
> **Resposta para falar:** *"Porque `var` não tem escopo de bloco e vaza variáveis para fora de loops e condicionais, além de sofrer içamento (hoisting). Usamos somente `const` para valores que não mudam de referência e `let` para contadores e estados."*

### 12. Onde vocês usaram uma Função Nomeada no projeto e por quê?
> **Resposta para falar:** *"Usamos em funções centrais como `validarFormulario()`, `atualizarCarrossel()` e `renderizarListaDesejos()`, pois são blocos lógicos reutilizáveis que precisam ser chamados em momentos diferentes."*

### 13. Onde foi utilizada uma Função Anônima no JavaScript?
> **Resposta para falar:** *"Utilizamos nas funções de callback dos ouvintes de eventos `addEventListener`, por exemplo no clique dos botões Anterior e Próximo do carrossel: `btn.addEventListener('click', function() { ... })`."*

### 14. Onde vocês aplicaram uma Arrow Function e qual a vantagem dela?
> **Resposta para falar:** *"Usamos arrow function na rotina utilitária `extrairApenasDigitos = (texto) => { ... }` e na `atualizarContadoresDesejos = () => { ... }`. Ela oferece uma sintaxe moderna, limpa e concisa."*

### 15. Qual a importância do evento `DOMContentLoaded` que envolve todo o script?
> **Resposta para falar:** *"Ele garante que o código JavaScript só seja executado depois que todo o HTML for lido e os elementos do DOM existirem na memória, evitando erros de 'elemento não encontrado'."*

---

## Eixo 4: Manipulação do DOM, Validação e Interações (0,8 Ponto)

### 16. Como funciona a leitura e validação dos campos do formulário?
> **Resposta para falar:** *"Lemos os valores digitados usando a propriedade `.value`, removemos espaços extras com `.trim()` e convertemos números com `Number()`. Testamos campo por campo com `if / else if` e exibimos o erro específico via `alert()`."*

### 17. Como vocês validaram o campo de e-mail sem usar expressões regulares complicadas?
> **Resposta para falar:** *"Usamos o método nativo de strings `.includes('@')` e `.includes('.')`. Se o e-mail não possuir o caractere arroba ou o caractere ponto, a validação é rejeitada com um alerta claro."*

### 18. Como funciona a inclusão dinâmica de uma imagem local no carrossel (Funcionalidade D)?
> **Resposta para falar:** *"Pegamos o arquivo selecionado no `<input type="file">` e usamos `URL.createObjectURL(arquivo)`. Isso gera uma URL temporária em memória no navegador, adicionamos o objeto no array do carrossel e exibimos a nova foto na tela sem recarregar."*

### 19. Como os limites do carrossel são respeitados para não dar erro?
> **Resposta para falar:** *"A função `atualizarCarrossel()` verifica o índice. Se o índice for 0, o botão Anterior é desabilitado (`disabled = true`). Se o índice for a última foto do array, o botão Próximo é desabilitado."*

### 20. Como a Lista de Desejos cria novos elementos na tela (Funcionalidade E)?
> **Resposta para falar:** *"Usamos os métodos de DOM `document.createElement('li')`, criamos os botões de ação com suas classes e textos, adicionamos os ouvintes de clique e anexamos tudo à lista com `appendChild()`."*

### 21. Como funciona a edição de um jogo na Lista de Desejos?
> **Resposta para falar:** *"Ao clicar em 'Editar', abrimos uma caixinha nativa `prompt()` com o nome atual do jogo. Se o usuário digitar um novo texto válido, atualizamos a propriedade no array e chamamos a função `renderizarListaDesejos()` para atualizar a tela."*

---

## Eixo 5: Integração, Raciocínio e Personalização (0,8 Ponto)

### 22. Como funciona a alternância do Modo Claro e Modo Escuro (Funcionalidade F)?
> **Resposta para falar:** *"O JavaScript usa `document.body.classList.toggle('tema-escuro')`. Essa classe altera os valores das variáveis CSS de cores de fundo, texto e cards. O script também atualiza o texto do botão entre 'Ativar Modo Escuro' e 'Ativar Modo Claro'."*

### 23. Como funcionam os 5 botões de cores independentes sem um interferir no outro?
> **Resposta para falar:** *"Cada botão tem um ouvinte de clique próprio que adiciona ou remove uma classe específica exclusivamente no seu elemento-alvo (como `.eduardo_cabecalho_alt` no `<header>` ou `.arthur_nav_alt` no `<nav>`), sem afetar as variáveis globais nem as outras áreas."*

### 24. O que faz o botão 'Restaurar Cores Padrão'?
> **Resposta para falar:** *"Ele remove a classe `tema-escuro` do `body`, remove as classes personalizadas das 5 áreas, reseta os textos de todos os botões para o padrão e emite um alerta avisando que tudo voltou às cores de fábrica da DevGames."*
