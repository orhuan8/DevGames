# 01 - Checklist Completo de Atendimento aos Requisitos

Tabela detalhada que relaciona cada exigência do edital da avaliação com sua localização no código-fonte do projeto DevGames.

| Requisito do Edital / Proposta | Exigência Específica | Arquivo(s) e Linha(s) Aproximadas | Status |
| :--- | :--- | :--- | :---: |
| **Página One Page Temática** | Portal único e coerente sobre jogos virtuais ("DevGames") sem backend/frameworks | `index.html` (geral) | **Atendido (100%)** |
| **Identidade dos Integrantes** | Nome de Arthur Miguel, Eduardo Vinicius e Rhuan Urias na tag `<title>` | `index.html` (linha 6) | **Atendido (100%)** |
| **Tags de Bloco Únicas** | `<header>`, `<nav>`, `<main>` e `<footer>` utilizados exatamente UMA vez cada | `index.html` (L18, L29, L49, L584) | **Atendido (100%)** |
| **Tags Semânticas de Conteúdo** | Uso semântico de `<section>`, `<article>` e `<aside>` | `index.html` (11 seções, cards com article, lateral com aside) | **Atendido (100%)** |
| **Mínimo de 10 Seções com IDs** | 10+ seções distintas com subtítulos `<h2>`, conteúdo autêntico e IDs exclusivos | `index.html` (11 seções: `#loja`, `#lancamentos`, `#galeria`, `#desejos`, `#personalizar`, `#generos`, `#plataformas`, `#promocoes`, `#sobre`, `#dicas`, `#contato`) | **Atendido (11 seções)** |
| **Navegação com Menu Não Ordenado** | Menu `<nav>` com `<ul>` e `<li>` contendo links âncora para todas as seções | `index.html` (linhas 30–44) | **Atendido (100%)** |
| **Links "Voltar ao Topo"** | Link funcional no final de cada uma das seções conduzindo ao topo | `index.html` (presente no rodapé de cada uma das 11 seções) | **Atendido (100%)** |
| **Imagens Locais em img/** | Formatos estritamente `.jpg` ou `.png`, nomes minúsculos, sem espaços ou acentos | Pasta `img/` (12 imagens ativas, todas locais, alt preenchido) | **Atendido (100%)** |
| **Banner e Galeria** | Banner principal e galeria multimídia | `index.html` (L75 e L190) | **Atendido (100%)** |
| **Área Principal e Lateral** | Lateral de filtros e área central com pelo menos 4 cards e ao menos uma div | `index.html` (`<aside class="arthur_lateral">`, 4 cards de jogos, múltiplas divs funcionais) | **Atendido (100%)** |
| **Tabela 10 Linhas × 6 Colunas** | Tabela semântica com `caption`, `thead`, `tbody`, `tr`, `th scope="col"` e `td` | `index.html` (linhas 134–185) | **Atendido (100%)** |
| **Formulário Semântico Completo** | `fieldset`, `legend`, `label for`, text, email, password, number, date, tel, radio, checkbox, select e textarea | `index.html` (linhas 498–577, 13 campos completos) | **Atendido (100%)** |
| **CSS Externo Principal** | Arquivo `style.css` conectado via `<link>` no `<head>` | `index.html` (linha 8) e `style.css` | **Atendido (100%)** |
| **Demonstração de Seletores CSS** | Seletor de tag, classe, ID, agrupado e encadeado com comentários | `style.css` (linhas 60–108) | **Atendido (100%)** |
| **Convenção de Nomes dos Integrantes** | Identificação dos alunos associada à função (Arthur, Eduardo e Rhuan) | `index.html` e `style.css` (`arthur_...`, `eduardo_...`, `rhuan_...`) | **Atendido (100%)** |
| **CSS Interno no `<head>`** | `<style>` formatando no mínimo 5 elementos/classes | `index.html` (linhas 9–16, 6 regras declaradas) | **Atendido (100%)** |
| **CSS Inline Estrito** | No mínimo 2 e no máximo 5 usos de `style=""` no HTML | `index.html` (linhas 49, 52, 75: exatamente 3 usos) | **Atendido (Exatamente 3)** |
| **CSS Grid A** | Colunas de proporção idêntica com `repeat()` e `fr` (ex.: `repeat(4, 1fr)`) | `style.css` (linhas 274–281) | **Atendido (100%)** |
| **CSS Grid B** | Colunas com proporções desiguais (`1fr 2fr 1fr`) | `style.css` (linhas 320–332) | **Atendido (100%)** |
| **CSS Grid C** | `grid-template-areas` nomeando áreas e `grid-area` nos componentes | `style.css` (linhas 213–236) | **Atendido (100%)** |
| **Media Queries e Adaptação** | Reorganização das áreas nomeadas (lateral acima do conteúdo) e ajuste de colunas | `style.css` (linhas 1060–1110) | **Atendido (100%)** |
| **JavaScript sem `var`** | Proibido usar `var`; uso restrito de `const` e `let` | `script.js` (0 ocorrências de `var`, verificado via busca) | **Atendido (100%)** |
| **Tipos de Funções em JS** | Funções Nomeadas, Função Anônima e Arrow Function em funcionamento real | `script.js` (todas identificadas com comentários de cabeçalho) | **Atendido (100%)** |
| **Validação de Formulário (12+ campos)** | `.value`, `.trim()`, `Number()`, `if / else if / else`, `alert()` para erros/sucesso e `reset()` | `script.js` (linhas 20–135) | **Atendido (100%)** |
| **Funcionalidade D: Carrossel** | 4 imagens iniciais, limites respeitados (botões travam), upload com `URL.createObjectURL` | `script.js` (linhas 140–235) e `index.html` (L190) | **Atendido (100%)** |
| **Funcionalidade E: Lista de Desejos** | Adicionar, não aceitar vazio, marcar status, editar prompt, excluir, limpar tudo, contadores e filtros | `script.js` (linhas 240–420) e `index.html` (L238) | **Atendido (100%)** |
| **Funcionalidade F: Personalização** | Alternador claro/escuro com troca de texto + 5 botões de áreas independentes + Restaurar cores | `script.js` e `style.css` | **Atendido (100%)** |
