# DevGames - Portal de Jogos Virtuais

**Trabalho Prático Integrador (Avaliação A1) — Desenvolvimento Front End**  
**Valor:** 5,0 Pontos (1,0 Projeto Funcional + 4,0 Defesa Oral Individual)  
**Equipe (Trio):** Arthur Miguel, Eduardo Vinicius e Rhuan Urias  
**Tema:** Loja virtual e portal de jogos ("DevGames")  
**Arquitetura:** One Page Application pura em HTML5 Semântico, CSS3 / CSS Grid e JavaScript DOM Moderno (Vanilla puro, sem frameworks ou bibliotecas).

---

## 1. Visão Geral do Projeto

A **DevGames** é uma plataforma temática One Page voltada ao universo dos jogos digitais, com identidade visual moderna, responsiva e dinâmica. O portal reúne:
- **Catálogo de Jogos em Destaque:** 4 cards com Grid A (`repeat(4, 1fr)`) com links direcionados para aquisição;
- **Cronograma Oficial de Lançamentos:** Tabela semântica completa de 10 linhas × 6 colunas (`caption`, `thead`, `tbody`, `th scope="col"`);
- **Galeria Multimídia:** Galeria panorâmica com Grid B assimétrico (`1fr 2fr 1fr`) e Carrossel Interativo de Gameplay (Funcionalidade D) com inclusão de fotos locais via `URL.createObjectURL` e trava de limites;
- **Lista de Desejos Dinâmica (Funcionalidade E):** Adição, edição de texto via `prompt()`, alternância de status (Comprado/Pendente), exclusão individual, botão de apagar todos, contadores automáticos e filtros interativos;
- **Personalização Visual com Controles Independentes (Funcionalidade F):** Alternador geral de modo Claro/Escuro com alternância de texto, 5 botões independentes para cabeçalho, menu, cards, lateral e rodapé, e botão Restaurar;
- **Seções Informativas Completas:** Gêneros, Plataformas Suportadas, Ofertas Especiais, História da Loja ("Sobre") e Dicas para Gamers (listas `<ul>` e `<ol>`);
- **Formulário Semântico de Cadastro:** 13 campos validados via JavaScript com `if / else if / else` contínuo e mensagens personalizadas em janelas `alert()`.

---

## 2. Tecnologias Utilizadas

- **HTML5 Puro:** Estrutura 100% semântica com uso singular de `<header>`, `<nav>`, `<main>` e `<footer>`, além de `<section>`, `<article>`, `<aside>`, `<table>` e `<form>`.
- **CSS3 Puro & CSS Grid:**
  - Variáveis CSS nativas (`:root` e `body.tema-escuro`);
  - **Grid A:** colunas de mesma proporção com `repeat(4, 1fr)`;
  - **Grid B:** colunas desiguais com proporção `1fr 2fr 1fr`;
  - **Grid C:** layout estrutural com `grid-template-areas` e `grid-area`;
  - **Media Queries:** reorganização fluida da barra lateral e adaptação dos cards no mobile;
  - Estilização externa principal (`style.css`), interna no `<head>` (6 regras) e inline estrita (exatamente 3 ocorrências).
- **JavaScript Moderno (ES6+ Vanilla):**
  - **Zero ocorrências de `var`** (uso restrito de `const` e `let`);
  - Funções Nomeadas, Funções Anônimas e Arrow Functions;
  - Manipulação direta da árvore DOM (`createElement`, `appendChild`, `remove`, `classList`, `textContent`);
  - API nativa `URL.createObjectURL` para carregar fotos locais no carrossel sem servidor;
  - Validação completa com `if / else if / else` e feedback em janelas `alert()`.

---

## 3. Estrutura de Pastas

```
DevProject/
├── README.md             # Visão geral do repositório no GitHub
├── index.html            # Estrutura semântica One Page (11 seções completas)
├── style.css             # Estilos externos, seletores comentados, Grids A, B e C, temas e responsividade
├── script.js             # Lógica modular comentada (sem var, funções nomeadas, anônimas e arrows)
├── img/                  # 12 imagens locais (.jpg e .png padronizadas, sem espaços)
│   ├── banner.jpg
│   ├── capa_batman.jpg
│   ├── capa_naruto.jpg
│   ├── capa_pes2021.jpg
│   ├── capa_spiderman.jpg
│   ├── gameplay_batman_1.jpg
│   ├── gameplay_batman_2.jpg
│   ├── gameplay_naruto_1.jpg
│   ├── gameplay_naruto_2.jpg
│   ├── gameplay_spiderman_1.png
│   ├── gameplay_spiderman_2.png
│   └── sobre_devgames.jpg
└── docs/                 # Material completo de estudo para a defesa oral individual
    ├── README.md                     # Visão geral do projeto e guia de execução
    ├── 01_checklist_requisitos.md    # Matriz de rastreabilidade edital vs. código
    ├── 02_mapa_do_codigo.md          # Localizador rápido de linhas e blocos
    ├── 03_guia_defesa_html.md        # Semântica, âncoras, tabela e formulário
    ├── 04_guia_defesa_css_grid.md    # Seletores, convenção de nomes e Grids A, B e C
    ├── 05_guia_defesa_javascript.md  # Funções, const vs let, escopo e DOM
    ├── 06_guia_defesa_dom_validacao.md # Fluxo de validação e interações D, E e F
    ├── 07_alteracoes_rapidas.md      # As 10 alterações que o professor pode pedir na hora
    ├── 08_perguntas_e_respostas.md   # Banco com 26 perguntas e respostas modelo
    ├── 09_glossario.md               # Termos técnicos explicados em 1 ou 2 frases
    └── 10_divisao_do_trabalho.md     # Registro de responsabilidades da equipe
```

---

## 4. Como Executar o Projeto

Não é necessário instalar nenhum compilador, servidor backend (Node, Apache) ou dependência externa:

1. Clone ou baixe o repositório em sua máquina.
2. Dê um duplo clique no arquivo `index.html` para abrir diretamente em qualquer navegador moderno (Chrome, Edge, Firefox, Opera, Safari).
3. Todas as funcionalidades, imagens, temas e validações operam 100% offline.

---

## 5. Integrantes da Equipe

- **Arthur Miguel**
- **Eduardo Vinicius**
- **Rhuan Urias**
