# 02 - Mapa Completo do Código-Fonte

Este documento serve como mapa de navegação rápida para os alunos **Arthur Miguel**, **Eduardo Vinicius** e **Rhuan Urias** localizarem qualquer parte do código durante a defesa oral.

---

## 1. Estrutura do HTML (`index.html`)

O arquivo está organizado sequencialmente nas seguintes partes principais:

1. **Cabeçalho Técnico (`<head>`, L1–L17):**
   - Configurações essenciais (`meta charset`, `viewport`, `<title>`);
   - Vínculo da folha de estilos externa (`style.css`);
   - CSS Interno (`<style>`): 6 regras (`.texto-destaque`, `.aviso-idade`, `hr.divisor`, `.link-topo`, `.link-topo:hover`, `.tag-destaque`).

2. **Cabeçalho Semântico (`<header class="eduardo_cabecalho">`):**
   - Título `<h1>` ("DevGames"), subtítulo e selo do portal gamer.

3. **Menu de Navegação (`<nav class="arthur_nav">`):**
   - Lista `<ul>` e `<li>` com 11 âncoras para as seções da página (`#loja`, `#lancamentos`, etc.).

4. **Corpo Principal (`<main class="layout-principal">`):**
   - **Barra Lateral (`<aside class="arthur_lateral">`):** Atalhos rápidos e caixa de suporte.
   - **Área Central (`<div class="conteudo-central">`):**
     - **Banner Destaque (`rhuan_banner`):** Imagem principal `img/banner.jpg` e botão de chamada para a loja.
     - **Seção 1 (`#loja`):** 4 Cards de jogos com Grid A (`.grid-a`) e botões para aquisição de chave.
     - **Seção 2 (`#lancamentos`):** Tabela semântica 10×6 (`.arthur_tabela`).
     - **Seção 3 (`#galeria`):** Galeria panorâmica (Grid B) + Carrossel de Gameplay (Funcionalidade D).
     - **Seção 4 (`#desejos`):** Lista de Desejos gerenciável (Funcionalidade E).
     - **Seção 5 (`#personalizar`):** Painel de personalização (Funcionalidade F), botão geral claro/escuro e 5 botões de áreas independentes.
     - **Seção 6 (`#generos`):** Apresentação visual dos gêneros de jogos.
     - **Seção 7 (`#plataformas`):** Descrição das plataformas suportadas.
     - **Seção 8 (`#promocoes`):** Promoções (`rhuan_promo_card`) com selos de desconto (`rhuan_badge`).
     - **Seção 9 (`#sobre`):** História da DevGames, autoria do trio e imagem temática.
     - **Seção 10 (`#dicas`):** Dicas de performance (lista `<ul>`) e instalação (lista `<ol>`).
     - **Seção 11 (`#contato`):** Formulário de cadastro de jogador com 13 campos semânticos.

5. **Rodapé Semântico (`<footer class="eduardo_rodape">`):**
   - Créditos aos três integrantes (Arthur Miguel, Eduardo Vinicius e Rhuan Urias) e direitos autorais.

6. **Vínculo do Script (`<script src="script.js">`):**
   - Posição no final do `<body>` para garantir o carregamento do DOM antes da execução.

---

## 2. Estrutura do CSS (`style.css`)

1. **Variáveis Globais (`:root`, `body.tema-escuro`):**
   - Cores primárias, fundos, cartões e sombras para modo claro e modo escuro.
2. **Demonstração dos 5 Seletores Exigidos:**
   - Seletor de tag: `body`;
   - Seletor de ID: `#container`;
   - Seletor de classe: `.eduardo_cabecalho`;
   - Seletor agrupado: `h1, h2, h3, h4`;
   - Seletor encadeado: `.arthur_nav ul li a`.
3. **Estrutura de Cabeçalho, Menu e Rodapé:** Estilos do menu fixo e botões modernos com sombra suave.
4. **CSS Grid C - Layout Principal:**
   - `grid-template-areas: "lateral principal"`;
   - `grid-area: lateral` e `grid-area: principal`.
5. **CSS Grid A - Cards de Jogos:**
   - `grid-template-columns: repeat(4, 1fr)`.
6. **CSS Grid B - Galeria de Imagens:**
   - `grid-template-columns: 1fr 2fr 1fr`.
7. **Tabela Semântica 10×6:** Estilização de linhas zebradas e cabeçalho estilizado.
8. **Funcionalidade D - Carrossel:** Moldura, dimensões das imagens e controles.
9. **Funcionalidade E - Lista de Desejos:** Botões de status, botões de ação e contadores.
10. **Funcionalidade F - Personalização Visual:** Classes alternativas das 5 áreas independentes e tema global.
11. **Seções Informativas e Formulário:** Gêneros, plataformas, promoções, sobre, dicas e inputs modernos.
12. **Media Queries / Responsividade:** Adaptação do Grid C para coluna única no mobile e redução dos Grids A e B.

---

## 3. Estrutura do JavaScript (`script.js`)

1. **Bloco 1 - Validação do Formulário:**
   - `extrairApenasDigitos(texto)`: Arrow Function;
   - `validarFormulario(evento)`: Função Nomeada que valida os 13 campos em cadeia contínua `if / else if / else` com `.trim()`, `Number()` e `new Date()`, exibindo mensagens específicas e de sucesso via `alert()`, finalizando com `reset()`.

2. **Bloco 2 - Carrossel com Inclusão de Imagem (Funcionalidade D):**
   - `carrosselImagens`: Array de objetos inicial com 4 imagens locais;
   - `atualizarCarrossel()`: Função Nomeada que atualiza imagem, legenda, contador e trava botões nos limites;
   - Inclusão dinâmica com `URL.createObjectURL(arquivoSelecionado)`.

3. **Bloco 3 - Lista de Desejos Dinâmica (Funcionalidade E):**
   - Array `listaDesejos`;
   - `atualizarContadoresDesejos()`: Arrow Function;
   - `renderizarListaDesejos()`: Função Nomeada com `document.createElement`;
   - Adição com verificação de não-vazio, edição com `prompt()`, alternância de status, exclusão individual, botão apagar todos e filtros (Todos, Pendentes, Comprados).

4. **Bloco 4 - Personalização Visual com Controles Independentes (Funcionalidade F):**
   - `alternarTemaGlobal()` e `atualizarTextoTema()`: Funções Nomeadas para o modo claro/escuro com alternância do texto do botão;
   - 5 Listeners de clique independentes para as áreas de cabeçalho, menu, cards, lateral e rodapé (2 estados de cor cada);
   - `#btn-restaurar-cores`: Reseta classes das 5 áreas, desativa modo escuro e restaura os textos originais.
