# 03 - Guia de Defesa Oral: HTML5 e Semântica

Este guia prepara **Arthur Miguel**, **Eduardo Vinicius** e **Rhuan Urias** para responderem com segurança a qualquer pergunta sobre a estrutura HTML do projeto DevGames.

---

## 1. Conceitos Semânticos Centrais

### Por que usar HTML Semântico em vez de encher de `<div>`?
- **Acessibilidade:** Leitores de tela para deficientes visuais conseguem navegar diretamente entre áreas lógicas (cabeçalho, navegação, conteúdo principal e rodapé).
- **SEO (Otimização para Motores de Busca):** Motores como o Google entendem a hierarquia e relevância de cada conteúdo.
- **Manutenibilidade:** O código fica autoexplicativo para qualquer desenvolvedor que assuma o projeto.

### Regra do Edital: Tags usadas uma única vez
- `<header>`: Cabeçalho institucional do site (marca e título principal). Utilizado uma única vez no topo.
- `<nav>`: Contêiner dos links de navegação primária. Utilizado uma única vez.
- `<main>`: Contêiner que envolve o conteúdo único e principal da página. Utilizado uma única vez.
- `<footer>`: Rodapé de encerramento com direitos autorais e créditos. Utilizado uma única vez.

### Tags de Seção e Conteúdo:
- `<section>`: Representa uma seção temática autônoma do documento (ex.: `#loja`, `#lancamentos`, `#galeria`). Cada seção possui um subtítulo `<h2>`.
- `<article>`: Representa um conteúdo autocontido que faz sentido mesmo de forma isolada. Foi utilizado para **cada card de jogo** e para os **cards de ofertas**.
- `<aside>`: Conteúdo tangencial ou lateral em relação ao conteúdo que o cerca. Foi utilizado na **barra lateral de filtros e atalhos rápidos** (`.arthur_lateral`).
- `<div>`: Elemento sem significado semântico específico, reservado exclusivamente para agrupar elementos para layout e CSS (ex.: `.conteudo-central`, `.carrossel-moldura`).

---

## 2. Navegação One Page com Âncoras e IDs

### Como funciona a navegação interna?
1. Cada seção recebe um atributo `id` exclusivo (ex.: `<section id="loja">`).
2. Os links do menu utilizam o caractere `#` seguido do id correspondente (ex.: `<a href="#loja">Loja</a>`).
3. Ao clicar no link, o navegador realiza uma rolagem suave até o ponto exato da página onde o elemento com aquele `id` está posicionado.
4. Ao final de cada uma das 11 seções, inserimos um link de retorno ao topo: `<a href="#topo" class="link-topo">↑ Voltar ao topo</a>`, que aponta para o `<header id="topo">`.

---

## 3. Estrutura Semântica da Tabela (10 Linhas × 6 Colunas)

A tabela de lançamentos foi construída seguindo rigorosamente a especificação do W3C:
- `<table>`: Elemento raiz da tabela;
- `<caption>`: Título/legenda acessível da tabela ("Tabela 1: Cronograma Oficial de Lançamentos...");
- `<thead>`: Cabeçalho que agrupa os títulos das colunas;
- `<tbody>`: Corpo que agrupa as 10 linhas de dados informativos;
- `<tr>`: Representa uma linha (Table Row);
- `<th scope="col">`: Célula de cabeçalho (Table Header). O atributo `scope="col"` informa explicitamente aos leitores de tela que aquele título se aplica a toda a coluna abaixo dele;
- `<td>`: Célula de dado comum (Table Data).

---

## 4. Estrutura Semântica do Formulário

O formulário de cadastro possui 13 campos e utiliza:
- `<form id="meuForm" novalidate>`: O atributo `novalidate` desativa a validação padrão automática do navegador, permitindo que o nosso script JavaScript assuma 100% da validação e dispare os alertas customizados via `alert()`;
- `<fieldset>`: Agrupa logicamente os campos relacionados ao cadastro;
- `<legend>`: Legenda visual e semântica do agrupamento;
- `<label for="idDoInput">`: Vincula o texto do rótulo ao campo de entrada via atributo `for` coincidente com o `id` do input. Isso amplia a área de clique para o usuário e garante acessibilidade total.

---

## 5. Perguntas Prováveis da Defesa Oral e Respostas Modelo

### Pergunta 1: *"Por que vocês usaram `<article>` para os cards de jogos e não `<section>`?"*
> **Resposta:** *"O `<article>` é a tag semântica apropriada para conteúdos que são independentes e autossuficientes. Se retirarmos o card de um jogo (como o Spider-Man) e colocarmos em uma newsletter ou em outra página, ele continua fazendo sentido por completo, com sua foto, título, preço e descrição. Já a `<section>` serve para agrupar uma grande área temática do portal, como a seção inteira da Loja."*

### Pergunta 2: *"Como funciona a ligação entre a tag `<label>` e o `<input>`?"*
> **Resposta:** *"A ligação é feita através do atributo `for` na `<label>`, que deve ter exatamente o mesmo valor do atributo `id` do `<input>`. Além de ser uma regra de acessibilidade para tecnologias assistivas, isso permite que o usuário clique no texto do label para focar diretamente o campo de texto ou marcar o checkbox/radio."*

### Pergunta 3: *"Por que vocês colocaram o link 'Voltar ao topo' no final de cada seção?"*
> **Resposta:** *"Como o projeto é no formato One Page e possui mais de 10 seções ricas em conteúdo, o usuário rola bastante a página. Os links 'Voltar ao topo' garantem excelente usabilidade, permitindo que o visitante retorne instantaneamente ao menu principal sem ter que fazer uma longa rolagem manual."*

### Pergunta 4: *"O que o atributo `scope="col"` faz dentro da tabela de vocês?"*
> **Resposta:** *"O `scope="col"` dentro da tag `<th>` especifica semanticamente que aquela célula de cabeçalho é o título de toda a coluna que está abaixo dela. Isso ajuda muito pessoas com deficiência visual que usam leitores de tela, pois ao navegar pelas células de dados, o leitor vocaliza automaticamente a qual coluna aquele dado pertence."*
