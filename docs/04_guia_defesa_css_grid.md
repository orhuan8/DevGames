# 04 - Guia de Defesa Oral: CSS3 e CSS Grid

Este guia explica detalhadamente a estilização do portal DevGames, com foco nos três usos obrigatórios de CSS Grid, seletores e regras de responsividade.

---

## 1. Seletores CSS e Demonstração no Código

No arquivo `style.css`, deixamos comentários identificando cada um dos 5 seletores obrigatórios:

1. **Seletor de Tag (`body`, L46):**
   - Aplica estilos diretamente a um elemento HTML básico sem depender de classes.
   ```css
   /* 1. SELETOR DE TAG */
   body {
       background-color: var(--bg-color);
       color: var(--text-color);
       font-family: Arial, Helvetica, sans-serif;
   }
   ```
2. **Seletor de ID (`#container`, L57):**
   - Aplica estilos a um elemento com identificador único na página (maior especificidade).
   ```css
   /* 2. SELETOR DE ID */
   #container {
       max-width: 1200px;
       margin: 0 auto;
   }
   ```
3. **Seletor de Classe (`.eduardo_cabecalho`, L103) e Convenção de Nomes:**
   - Estiliza elementos identificados por uma classe reutilizável, seguindo a convenção de nomes exigida no edital, distribuída entre os três integrantes da equipe:
     - **Eduardo:** `.eduardo_cabecalho`, `.eduardo_card`, `.eduardo_btn`, `.eduardo_rodape`, etc.
     - **Arthur:** `.arthur_nav`, `.arthur_lateral`, `.arthur_tabela`, `.arthur_form`, etc.
     - **Rhuan:** `.rhuan_banner`, `.rhuan_personalizar_painel`, `.rhuan_btn`, `.rhuan_promo_card`, `.rhuan_badge`.
   ```css
   /* 3. SELETOR DE CLASSE (CONVENÇÃO DE NOMES DO INTEGRANTE EDUARDO) */
   .eduardo_cabecalho {
       background: radial-gradient(circle at 50% 25%, var(--primary-glow) 0%, rgba(18, 20, 29, 0.96) 65%, #0e0f14 100%);
       color: #ffffff;
   }
   ```
4. **Seletor Agrupado (`h1, h2, h3, h4`, L75):**
   - Permite aplicar a mesma regra a múltiplos seletores simultaneamente, separados por vírgula, evitando repetição de código (DRY - Don't Repeat Yourself).
   ```css
   /* 4. SELETOR AGRUPADO */
   h1, h2, h3, h4 {
       margin-top: 0;
       margin-bottom: 12px;
   }
   ```
5. **Seletor Encadeado / Descendente (`.arthur_nav ul li a`, L82):**
   - Aplica estilos especificamente ao elemento `<a>` que está dentro de um `<li>`, que está em uma `<ul>`, dentro do contêiner `.arthur_nav`.
   ```css
   /* 5. SELETOR ENCADEADO */
   .arthur_nav ul li a {
       color: #ffffff;
       text-decoration: none;
   }
   ```

---

## 2. Níveis de Aplicação de CSS (Externo, Interno e Inline)

- **CSS Externo (`style.css`):** Responsável por mais de 95% do design, facilitando manutenção e separação de responsabilidades.
- **CSS Interno (`<style>` no `<head>`):** Formata exatamente 6 regras específicas no documento (`.texto-destaque`, `.aviso-idade`, `hr.divisor`, `.link-topo`, `.link-topo:hover`, `.tag-destaque`), atendendo à exigência de "pelo menos cinco elementos".
- **CSS Inline (`style=""`):** Usado exatamente **3 vezes** no `index.html` (o edital exige entre 2 e 5 vezes):
  1. No `<main>` para definir `padding: 15px;`;
  2. No `<aside>` para definir `border-radius: 8px;`;
  3. Na `<section class="banner-destaque">` para definir `text-align: center;`.

---

## 3. Os Três Usos Obrigatórios de CSS Grid

### GRID A: Colunas Iguais com `repeat()` e `fr`
- **Onde está:** Na seção `#loja`, classe `.grid-a`.
- **Código:**
  ```css
  .grid-a {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
  }
  ```
- **Explicação:** A função `repeat(4, 1fr)` cria 4 colunas de largura idêntica, onde `1fr` representa 1 fração do espaço disponível no contêiner. O `gap: 18px` define o espaçamento horizontal e vertical entre os cards.

### GRID B: Colunas Desiguais com Proporções Diferentes
- **Onde está:** Na galeria panorâmica da seção `#galeria`, classe `.grid-b`.
- **Código:**
  ```css
  .grid-b {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      gap: 15px;
      align-items: center;
  }
  ```
- **Explicação:** A coluna central (`2fr`) possui o dobro da largura das duas colunas laterais (`1fr` cada), dando destaque visual à imagem central de gameplay.

### GRID C: Layout Estrutural com Áreas Nomeadas (`grid-template-areas`)
- **Onde está:** No layout geral do portal, classe `.layout-principal`.
- **Código:**
  ```css
  .layout-principal {
      display: grid;
      grid-template-columns: 260px 1fr;
      grid-template-areas: "lateral principal";
      gap: 25px;
  }
  .arthur_lateral {
      grid-area: lateral;
  }
  .conteudo-central {
      grid-area: principal;
  }
  ```
- **Explicação:** Define uma coluna fixa de `260px` para a barra lateral de filtros e o restante (`1fr`) para a área central de conteúdo. A propriedade `grid-template-areas` nomeia as células da grade e os componentes filhos se encaixam nelas usando `grid-area`.

---

## 4. Responsividade e Adaptação com Media Queries

Nas linhas finais do `style.css`, temos media queries que reorganizam a página para telas menores:

```css
@media (max-width: 768px) {
    /* Reorganização do GRID C: lateral passa para cima em uma única coluna */
    .layout-principal {
        grid-template-columns: 1fr;
        grid-template-areas:
            "lateral"
            "principal";
        gap: 20px;
    }

    /* Adaptação do GRID B: galeria passa para 1 coluna empilhada */
    .grid-b {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    /* Adaptação do GRID A: cards passam para coluna única */
    .grid-a {
        grid-template-columns: 1fr;
    }
}
```

---

## 5. Perguntas Prováveis da Defesa Oral e Respostas Modelo

### Pergunta 1: *"O que significa a unidade `fr` no CSS Grid?"*
> **Resposta:** *"A unidade `fr` significa 'fração do espaço livre disponível' (fraction). Diferente de porcentagem ou pixels, o navegador calcula quanto espaço sobrou após descontar margens, bordas e gaps e distribui proporcionalmente entre as colunas definidas com `fr`."*

### Pergunta 2: *"Como vocês fizeram para a barra lateral ficar em cima do conteúdo no celular?"*
> **Resposta:** *"Utilizamos uma media query para telas até 768px. Nela, alteramos a propriedade `grid-template-areas` da `.layout-principal` de `"lateral principal"` (lado a lado) para duas linhas `"lateral"` e `"principal"` (uma em cima da outra), alterando também `grid-template-columns` para `1fr`."*

### Pergunta 3: *"Por que usar variáveis CSS (`var(--...)`) para os temas claro e escuro?"*
> **Resposta:** *"Porque variáveis nativas centralizam as cores do projeto em um só lugar. Quando a classe `tema-escuro` é adicionada ao `body`, nós só redefinimos o valor das variáveis (`--bg-color`, `--card-bg`, etc.), e todos os componentes que utilizam essas variáveis atualizam suas cores automaticamente, sem precisar reescrever regras individuais para cada elemento."*

### Pergunta 4: *"Qual a diferença entre seletor agrupado e seletor encadeado?"*
> **Resposta:** *"O seletor agrupado usa vírgula para aplicar a mesma formatação para vários elementos diferentes ao mesmo tempo, como `h1, h2, h3`. Já o seletor encadeado usa espaços entre os nomes para indicar hierarquia e descendência, aplicando o estilo apenas ao elemento mais interno que esteja dentro dos outros, como `.arthur_nav ul li a`."*
