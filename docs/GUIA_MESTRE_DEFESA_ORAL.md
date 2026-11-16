# GUIA MESTRE DE DEFESA ORAL OBJETIVA — DEVGAMES (AVALIAÇÃO A1)

> **Projeto:** DevGames — Portal Temático de Jogos Virtuais  
> **Equipe (Trio):** Arthur Miguel, Eduardo Vinicius e Rhuan Urias  
> **Composição da Nota (5,0 Pontos):** Projeto Entregue (1,0 Ponto) + Defesa Oral Individual (4,0 Pontos)  
> **Objetivo deste Guia:** Permitir que qualquer integrante do trio responda com segurança, clareza e autoridade técnica a **qualquer pergunta aleatória sobre qualquer linha** de `index.html`, `style.css` ou `script.js`.

---

## 1. Como a Banca Avalia (Distribuição dos 4,0 Pontos)

A banca avaliadora formula **5 perguntas individuais** valendo **0,80 ponto cada**:

| Eixo de Avaliação | Valor | O que o Professor Avalia na Prática |
| :--- | :---: | :--- |
| **Eixo 1: HTML & Semântica** | 0,80 | Sabe explicar por que usou cada tag, estrutura do documento e links de âncoras. |
| **Eixo 2: CSS & CSS Grid** | 0,80 | Domina os seletores, Grids A, B e C, `grid-template-areas` e regras de responsividade. |
| **Eixo 3: JavaScript & Funções** | 0,80 | Sabe diferenciar Função Nomeada, Anônima e Arrow Function; sabe por que baniu o `var`. |
| **Eixo 4: DOM & Validações** | 0,80 | Entende o fluxo de eventos, criação/remoção de nós no DOM e a cadeia `if/else if/else`. |
| **Eixo 5: Alteração ao Vivo** | 0,80 | Consegue localizar um trecho, justificar a lógica e fazer uma pequena alteração na hora. |

---

## 2. O Método de Resposta em 3 Passos (Fórmula Universal)

Quando o professor apontar para qualquer linha na tela e perguntar: *"O que essa linha faz?"*, responda sempre seguindo esta estrutura mental de 15 segundos:

```
Passo 1 (O QUE É) ➔ Passo 2 (POR QUE ESTÁ AÍ) ➔ Passo 3 (COMO SE COMPORTA)
```

1. **Passo 1 (O que é):** Diga a sintaxe exata *(ex.: "É uma declaração de variável constante", "É um seletor encadeado no CSS", "É uma Arrow Function")*.
2. **Passo 2 (Por que está aí):** Conecte à regra do edital *(ex.: "Cumpre o requisito de proibição do `var`", "Demonstra o seletor encadeado exigido", "Valida o campo telefone")*.
3. **Passo 3 (Como se comporta):** Explique o resultado no navegador *(ex.: "Se o usuário digitar menos de 10 dígitos, impede o envio, exibe um alerta e foca no campo")*.

---

## 3. Mapeamento Linha a Linha: `index.html` (699 Linhas)

O arquivo HTML possui estrutura 100% semântica, singularidade estrita de blocos estruturais e 11 seções temáticas reais.

```
index.html
├── L1–L18: Metadados, <title> com o trio, CSS externo e CSS interno (6 regras)
├── L19: <body id="container">
├── L22–L26: <header class="eduardo_cabecalho" id="topo"> (1 única vez)
├── L30–L44: <nav class="arthur_nav"> com lista <ul> e âncoras #
├── L47: <main class="layout-principal" style="padding: 15px;"> (Inline 1/3)
│   ├── L50–L68: <aside class="arthur_lateral" style="border-radius: 8px;"> (Inline 2/3)
│   └── L70–L678: <div class="conteudo-central">
│       ├── L73–L95: <div class="banner-destaque rhuan_banner" style="..."> (Inline 3/3)
│       ├── L99–L140: Seção 1 (#loja) - 4 Cards com Grid A
│       ├── L144–L247: Seção 2 (#lancamentos) - Tabela 10×6 semântica
│       ├── L251–L294: Seção 3 (#galeria) - Grid B + Carrossel (Opção D)
│       ├── L298–L337: Seção 4 (#desejos) - Lista Dinâmica (Opção E)
│       ├── L341–L401: Seção 5 (#personalizar) - Personalização (Opção F)
│       ├── L405–L445: Seção 6 (#generos) - Cards informativos
│       ├── L449–L474: Seção 7 (#plataformas) - Suporte técnico
│       ├── L478–L509: Seção 8 (#promocoes) - Ofertas especiais
│       ├── L513–L528: Seção 9 (#sobre) - História da loja e créditos
│       ├── L532–L561: Seção 10 (#dicas) - Listas <ul> e <ol>
│       └── L565–L675: Seção 11 (#contato) - Formulário com 13 campos
├── L682–L686: <footer class="eduardo_rodape"> (1 única vez)
└── L688: <script src="script.js"></script>
```

### Explicação Rápida dos Blocos Críticos de `index.html`:

- **Linhas 6 (`<title>`):** Contém os nomes dos três integrantes (*Arthur Miguel, Eduardo Vinicius e Rhuan Urias*).
- **Linhas 10–17 (`<style>` interno):** Formata 6 elementos (`.texto-destaque`, `.aviso-idade`, `hr.divisor`, `.link-topo`, `.link-topo:hover`, `.tag-destaque`). Atende a exigência de "formatar pelo menos cinco elementos com CSS interno".
- **Linhas 47, 50 e 73 (`style="..."` inline):** Exatamente 3 usos no documento (`padding`, `border-radius`, `text-align`). Atende a regra de "no mínimo 2 e no máximo 5".
- **Linhas 22, 30, 47 e 682:** Uso singular de `<header>`, `<nav>`, `<main>` e `<footer>`. Não existem tags estruturais duplicadas nem aninhadas incorretamente.
- **Linhas 144–247 (Tabela 10×6):**
  - `caption`: Título acessível da tabela;
  - `thead`: Cabeçalho com 6 colunas usando `<th scope="col">` (acessibilidade para leitores de tela);
  - `tbody`: Corpo com exatamente 10 linhas (`<tr>`) e 6 células (`<td>`) por linha.
- **Linhas 565–675 (Formulário):**
  - Usa `<fieldset>` (agrupamento lógico) e `<legend>` (título do bloco);
  - Cada campo possui um `<label for="ID_DO_CAMPO">` correspondente, garantindo acessibilidade semântica;
  - Contém `novalidate` no `<form>` para desativar a validação padrão dos navegadores e permitir que o JavaScript assuma o controle com janelas `alert()`.
- **Links "Voltar ao topo" (ex.: L137, L244, L291...):** Cada uma das 11 seções termina com `<p class="eduardo_voltar_topo"><a href="#topo" class="link-topo">↑ Voltar ao topo</a></p>`, direcionando para o `id="topo"` no `<header>`.

---

## 4. Mapeamento Linha a Linha: `style.css` (1276 Linhas)

O arquivo CSS é responsável pela estilização externa completa, contendo demonstração dos 5 seletores, 3 aplicações de CSS Grid e regras de responsividade com media queries.

### Blocos Principais e O Que Dizer em Cada Um:

#### 1. Variáveis CSS (`:root` e `body.tema-escuro`, L10–L46)
- **O que é:** Pseudo-classe `:root` definindo Custom Properties nativas (`--primary-color`, `--bg-color`, `--card-bg`, etc.).
- **Por que usar:** Permite centralizar a paleta de cores. Quando o modo escuro é ativado, a classe `body.tema-escuro` sobrescreve essas variáveis e todo o site muda de cor instantaneamente por herança cascata.

#### 2. Os 5 Seletores Obrigatórios Demonstrados (L48–L100)
1. **Seletor de Tag (L50):** `body { ... }` — aplica regras globais de fonte, margens e transição suave.
2. **Seletor de ID (L62):** `#container { ... }` — aplica largura máxima de `1220px` e centralização `margin: 0 auto`. Usa o ID permitido pelo edital (`container`).
3. **Seletor de Classe (L72):** `.eduardo_cabecalho { ... }` — estiliza o cabeçalho seguindo a convenção de nomes `integrante_funcao`.
4. **Seletor Agrupado (L94):** `h1, h2, h3, h4 { ... }` — aplica regras idênticas a múltiplos elementos separados por vírgula para evitar redundância (princípio DRY).
5. **Seletor Encadeado (L103):** `.arthur_nav ul li a { ... }` — seleciona links `<a>` que sejam descendentes de `<li>`, dentro de `<ul>`, dentro da classe `.arthur_nav`.

#### 3. Grid C: Layout Estrutural com Áreas Nomeadas (L207–L230)
- **Código:**
  ```css
  .layout-principal {
      display: grid;
      grid-template-columns: 270px 1fr;
      grid-template-areas: "lateral principal";
      gap: 25px;
  }
  .arthur_lateral { grid-area: lateral; }
  .conteudo-central { grid-area: principal; }
  ```
- **Explicação:** Divide o portal em duas regiões nomeadas: a barra lateral (`lateral`) de 270px fixos e o conteúdo central (`principal`) ocupando o espaço flexível restante (`1fr`).

#### 4. Grid A: Cards de Jogos em Mesma Proporção (L272–L285)
- **Código:**
  ```css
  .grid-a {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
  }
  ```
- **Explicação:** Distribui os 4 cards da loja em 4 colunas de mesma proporção com a função `repeat()` e a unidade fracionária `fr`.

#### 5. Grid B: Galeria Panorâmica Assimétrica (L322–L335)
- **Código:**
  ```css
  .grid-b {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      gap: 16px;
  }
  ```
- **Explicação:** Cria colunas de proporções diferentes. A coluna central tem o dobro da largura das laterais (`2fr`), destacando as imagens centrais de gameplay.

#### 6. Funcionalidade F: Cores Alternativas das 5 Áreas (L837–L880)
- Cinco classes exclusivas que alteram visualmente cada área de forma independente:
  - `.eduardo_cabecalho_alt`: gradiente roxo no cabeçalho;
  - `.arthur_nav_alt`: fundo preto e borda dourada no menu;
  - `.cards_alt .eduardo_card`: borda ciano neon nos cards;
  - `.arthur_lateral_alt`: azul marinho na barra lateral;
  - `.eduardo_rodape_alt`: fundo carmim no rodapé.

#### 7. Media Queries e Adaptação Responsiva (L1132–L1200)
- `@media (max-width: 992px)`: Grid A passa para `repeat(2, 1fr)`.
- `@media (max-width: 768px)`:
  - **Adaptação do Grid C:** a lateral passa para cima do conteúdo central reorganizando as áreas nomeadas:
    ```css
    grid-template-columns: 1fr;
    grid-template-areas:
        "lateral"
        "principal";
    ```
  - **Adaptação do Grid B:** colunas passam de `1fr 2fr 1fr` para coluna única `1fr`.
- `@media (max-width: 480px)`: Grid A passa para `1fr` (coluna única nos celulares).

---

## 5. Mapeamento Linha a Linha: `script.js` (571 Linhas)

O arquivo JavaScript controla toda a lógica dinâmica, sem nenhuma ocorrência de `var`, demonstrando os três tipos de funções exigidos.

```
script.js
├── L17: document.addEventListener('DOMContentLoaded', function() { ... })
├── L27–L36: Arrow Function: extrairApenasDigitos = (texto) => { ... }
├── L39–L151: Função Nomeada: validarFormulario(evento) (Cadeia ininterrupta if / else if / else)
├── L154: formulario.addEventListener('submit', validarFormulario)
├── L157–L265: FUNCIONALIDADE D - Carrossel de Gameplay com Inclusão de Imagem
│   ├── L160–L177: Array inicial carrosselImagens com 4 fotos e legendas
│   ├── L180: let indiceCarrossel = 0;
│   ├── L193–L207: Função Nomeada: atualizarCarrossel() (atualiza tela e trava nos limites)
│   ├── L212–L225: Funções Anônimas nos botões Anterior e Próximo
│   └── L228–L264: Arrow Function no botão Adicionar Imagem (URL.createObjectURL)
├── L267–L476: FUNCIONALIDADE E - Lista de Desejos Dinâmica
│   ├── L272–L276: Array em memória listaDesejos
│   ├── L279: let filtroDesejosAtual = 'todos';
│   ├── L292–L308: Arrow Function: atualizarContadoresDesejos = () => { ... }
│   ├── L311–L413: Função Nomeada: renderizarListaDesejos() (createElement, appendChild)
│   ├── L418–L440: Função Nomeada: adicionarNovoDesejo() (valida não-vazio e Date.now())
│   ├── L450–L459: Botão Apagar Todos (listaDesejos = [])
│   └── L462–L475: Botões de Filtro (Todos, Pendentes, Comprados)
└── L478–L570: FUNCIONALIDADE F - Personalização Visual com Controles Independentes
    ├── L484–L498: Função Nomeada: alternarTemaGlobal() e atualizarTextoTema()
    ├── L502–L546: 5 Listeners de clique independentes para as 5 áreas (classList.toggle)
    └── L548–L569: Botão Restaurar Cores e Tema Originais
```

### Explicação Rápida dos Trechos Críticos de `script.js`:

#### 1. Por que `document.addEventListener('DOMContentLoaded', ...)` na Linha 17?
> *"Garante que o JavaScript só execute depois que toda a árvore DOM (elementos HTML) tiver sido completamente construída pelo navegador na memória, evitando erros de elemento nulo (`null`)."*

#### 2. Os Três Tipos de Função e Onde Apontá-los:
- **Função Nomeada:** Linha 39 (`function validarFormulario(evento)`), Linha 193 (`function atualizarCarrossel()`), Linha 311 (`function renderizarListaDesejos()`).
- **Função Anônima:** Linha 17 (`function()`), Linha 212 (callback do botão Anterior: `btnCarrosselAnt.addEventListener('click', function() { ... })`).
- **Arrow Function:** Linha 27 (`const extrairApenasDigitos = (texto) => { ... }`), Linha 228 (callback do upload: `btnAdicionarImgCarrossel.addEventListener('click', () => { ... })`).

#### 3. Validação do Formulário (L39–L151)
- `evento.preventDefault()` na L41: impede que a página recarregue ao submeter o formulário.
- Leitura com `.value.trim()`: remove espaços em branco acidentais no início e no final.
- `Number(idadeValor)`: converte a string para número real; se contiver letras, gera `NaN`.
- Cadeia `if / else if / else`:
  - Se qualquer campo for inválido, emite o `alert()`, foca o cursor com `.focus()` e encerra com `return;`.
  - O bloco final `else` (L145) só executa quando todas as 13 regras forem cumpridas, emitindo o alerta de sucesso e chamando `formulario.reset()`.

#### 4. Carrossel e `URL.createObjectURL` (L228–L264)
- **O que faz:** Lê o arquivo local selecionado pelo usuário (`inputArquivoCarrossel.files[0]`) e gera uma URL interna temporária no navegador com `URL.createObjectURL(arquivoSelecionado)`.
- **Por que é inovador:** Permite exibir a foto do computador do usuário na página sem precisar de servidor web ou backend.
- **Trava de limites (L200–L205):** `btnCarrosselAnt.disabled = (indiceCarrossel === 0)` e `btnCarrosselProx.disabled = (indiceCarrossel === carrosselImagens.length - 1)`. Impede que o usuário navegue além do início ou do fim da sequência.

#### 5. Lista de Desejos e Manipulação Direta do DOM (L311–L413)
- `document.createElement('li')`: cria o nó na memória.
- `spanTexto.textContent = ...`: insere o texto de forma segura (previne ataques de injeção XSS, ao contrário de `innerHTML`).
- Adiciona listeners de evento nos botões gerados dinamicamente (Marcar Comprado, Editar com `prompt()`, Excluir com `.splice()`).
- `ulListaDesejos.appendChild(li)`: insere o elemento filho no DOM visual.

#### 6. Personalização Visual Independente (L478–L570)
- `document.body.classList.toggle('tema-escuro')`: adiciona a classe se ela não existir, ou remove se já existir.
- O texto do botão geral alterna entre `"Ativar Modo Claro"` e `"Ativar Modo Escuro"`.
- Cada um dos 5 botões de áreas altera exclusivamente a sua própria área usando `classList.toggle()` na sua tag correspondente, sem interferir nas variáveis globais nem nas outras seções.
- O botão `#btn-restaurar-cores` remove todas as 5 classes alternativas, remove `tema-escuro` e reseta todos os textos dos botões.

---

## 6. As 10 "Alterações ao Vivo" mais Pedidas pela Banca (Eixo 5)

Na avaliação do Eixo 5 (0,80 ponto), o professor pede para você fazer uma alteração simples em tempo real para provar que domina o código. Veja onde e como alterar:

| O que o Professor Pede | Onde Alterar | Como Fazer (Antes ➔ Depois) |
| :--- | :--- | :--- |
| **1. "Mude a cor primária da loja para azul"** | `style.css` (L14) | Mude `--primary-color: #d11515;` para `--primary-color: #0284c7;` |
| **2. "Mude os cards (Grid A) para 3 colunas"** | `style.css` (L274) | Mude `repeat(4, 1fr);` para `repeat(3, 1fr);` |
| **3. "Mude a proporção da galeria (Grid B) para 3 colunas iguais"** | `style.css` (L324) | Mude `1fr 2fr 1fr;` para `repeat(3, 1fr);` ou `1fr 1fr 1fr;` |
| **4. "Altere a idade mínima do formulário de 13 para 18 anos"** | `script.js` (L94) | Mude `idade < 13` para `idade < 18` e atualize a mensagem no `alert()` |
| **5. "Mude o texto do botão de modo claro/escuro"** | `script.js` (L489) | Mude `'Ativar Modo Claro' : 'Ativar Modo Escuro'` para `'☀️ Dia' : '🌙 Noite'` |
| **6. "Adicione um 5º card de jogo no catálogo"** | `index.html` (L134) | Duplique um `<article class="eduardo_card">` e mude o título e imagem |
| **7. "Adicione mais um link no menu de navegação"** | `index.html` (L43) | Insira `<li><a href="#promocoes">Promoções Relâmpago</a></li>` |
| **8. "Mude o tamanho máximo do container principal"** | `style.css` (L63) | Mude `max-width: 1220px;` para `max-width: 1400px;` |
| **9. "Limite o carrossel para no máximo 6 imagens"** | `script.js` (L230) | Adicione no início do clique: `if (carrosselImagens.length >= 6) { alert('Limite atingido!'); return; }` |
| **10. "Mude o tamanho mínimo do nome no cadastro para 5 letras"** | `script.js` (L64) | Mude `nome.length < 3` para `nome.length < 5` |

---

## 7. Glossário Relâmpago para a Defesa Oral

Se o professor perguntar o significado conceitual de qualquer termo, responda com estas frases exatas:

- **DOM (Document Object Model):** Representação em árvore de objetos que o navegador cria na memória a partir do HTML, permitindo que o JavaScript altere elementos, textos e estilos em tempo real.
- **`preventDefault()`:** Método que cancela a ação padrão que o navegador executaria para aquele evento, como evitar que a página recarregue ao enviar um formulário.
- **`textContent` vs `innerHTML`:** `textContent` insere apenas texto puro (mais rápido e seguro contra invasão XSS), enquanto `innerHTML` interpreta e compila tags HTML como código.
- **Escopo de Bloco (`const` e `let`):** A variável só existe dentro das chaves `{ }` onde foi criada. O `var` não tem escopo de bloco e vaza para fora de `if` e `for`.
- **Temporal Dead Zone (TDZ):** Período entre o início do bloco e a linha de declaração de `const`/`let`, no qual tentar acessar a variável dispara um erro de referência em vez de retornar `undefined`.
- **`URL.createObjectURL()`:** Método nativo da Web API que cria um endereço URL temporário em memória para um arquivo local escolhido pelo usuário no `<input type="file">`.
- **`grid-template-areas`:** Propriedade do CSS Grid que permite desenhar o mapa estrutural da página utilizando palavras nomeadas entre aspas, facilitando a reorganização no mobile via Media Queries.
- **Unidade `fr` (Fractional Unit):** Unidade flexível do CSS Grid que representa uma fração do espaço disponível no contêiner da grade.
- **Hoisting:** Comportamento do JavaScript de elevar declarações para o topo do seu escopo durante a fase de compilação.
- **`reset()`:** Método nativo de formulário que redefine todos os campos de volta aos seus valores iniciais vazios ou padrão.
