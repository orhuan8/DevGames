# DevGames - Portal de Jogos Virtuais

**Trabalho Prático Integrador (Avaliação A1) - Desenvolvimento Front End**  
**Valor:** 5,0 Pontos (1,0 Projeto Funcional + 4,0 Defesa Oral Individual)  
**Equipe (Trio):** Arthur Miguel, Eduardo Vinicius e Rhuan Urias  
**Tema:** Loja virtual e portal de jogos ("DevGames")  
**Arquitetura:** One Page Application pura (HTML5 Semântico, CSS3 / CSS Grid e JavaScript DOM Moderno, sem frameworks nem backend).

---

## 1. Visão Geral do Projeto

A **DevGames** é uma plataforma temática One Page voltada ao universo dos jogos digitais, com identidade visual moderna, responsiva e dinâmica. O portal reúne:
- Catálogo de jogos em destaque com Grid A e direcionamento para compra;
- Galeria multimídia com Grid assimétrico e carrossel dinâmico com upload local;
- Lista de Desejos gerenciável em tempo real (adição, edição, exclusão, filtros e contadores);
- Painel de personalização visual independente com alternador de tema claro/escuro e 5 áreas customizáveis;
- Tabela semântica de lançamentos futuros da indústria (10 linhas × 6 colunas);
- Seções informativas sobre gêneros, plataformas, promoções, história da loja e dicas técnicas;
- Formulário cadastral semântico com validação obrigatória de 13 campos via JavaScript e alertas informativos.

---

## 2. Tecnologias Utilizadas

- **HTML5 Puro:** Estrutura 100% semântica com uso singular de `<header>`, `<nav>`, `<main>` e `<footer>`, além de `<section>`, `<article>`, `<aside>`, `<table>` e `<form>`.
- **CSS3 Puro & CSS Grid:** 
  - Variáveis CSS nativas (`:root` e `body.tema-escuro`);
  - Grid A: colunas de proporção idêntica com `repeat(4, 1fr)`;
  - Grid B: colunas desiguais `1fr 2fr 1fr`;
  - Grid C: layout global com `grid-template-areas` e `grid-area`;
  - Responsividade com Media Queries para tablets e celulares;
  - Estilização externa principal (`style.css`), interna no `<head>` (6 regras) e inline estrita (3 ocorrências).
- **JavaScript Moderno (ES6+ Vanilla):**
  - **Zero ocorrências de `var`** (apenas `const` e `let`);
  - Funções Nomeadas, Funções Anônimas e Arrow Functions;
  - Manipulação direta da árvore DOM (`createElement`, `appendChild`, `remove`, `classList`, `textContent`);
  - API nativa `URL.createObjectURL` para carregar fotos locais no carrossel sem servidor;
  - Validação completa com `if / else if / else` e mensagens personalizadas via `alert()`.

---

## 3. Integrantes da Equipe

- **Arthur Miguel**
- **Eduardo Vinicius**
- **Rhuan Urias**
