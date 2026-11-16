# 07 - Guia de Alterações Rápidas na Hora da Defesa

Na defesa oral, o professor avaliador pode pedir para o aluno **fazer uma pequena alteração no código em tempo real** para provar que domina a estrutura. 

Abaixo estão as 10 alterações mais prováveis, com indicação exata de arquivo, linha e código antes e depois.

---

### 1. "Mude a cor primária da loja para azul ou verde"
- **Arquivo:** `style.css` (Linha 12)
- **Onde alterar:** Dentro do seletor `:root` no topo do arquivo.
- **Antes:**
  ```css
  --primary-color: #d11515;
  ```
- **Depois (exemplo Azul):**
  ```css
  --primary-color: #0284c7;
  ```
- **Explicação ao professor:** *"Como usamos variáveis CSS, mudar `--primary-color` no `:root` atualiza instantaneamente o cabeçalho, botões, bordas e destaques de todo o site."*

---

### 2. "Mude a quantidade de colunas dos cards de jogos (Grid A) de 4 para 3 ou 2"
- **Arquivo:** `style.css` (Linha 276)
- **Onde alterar:** Na classe `.grid-a`.
- **Antes (4 colunas):**
  ```css
  grid-template-columns: repeat(4, 1fr);
  ```
- **Depois (3 colunas):**
  ```css
  grid-template-columns: repeat(3, 1fr);
  ```

---

### 3. "Altere a idade mínima de cadastro no formulário de 13 para 18 anos"
- **Arquivo 1 (JavaScript):** `script.js` (Linha 77)
  - **Antes:**
    ```javascript
    else if (idadeValor === '' || isNaN(idade) || idade < 13) {
        alert('Erro no campo Idade: Apenas usuários com 13 anos ou mais podem se cadastrar na DevGames.');
    ```
  - **Depois:**
    ```javascript
    else if (idadeValor === '' || isNaN(idade) || idade < 18) {
        alert('Erro no campo Idade: Apenas usuários com 18 anos ou mais podem se cadastrar na DevGames.');
    ```
- **Arquivo 2 (Texto informativo no HTML):** `index.html` (Linha 525)
  - Mudar `*Apenas maiores de 13 anos permitidos.` para `*Apenas maiores de 18 anos permitidos.`

---

### 4. "Mude a proporção das colunas da galeria (Grid B) para 1fr 1fr 1fr ou 2fr 1fr 2fr"
- **Arquivo:** `style.css` (Linha 323)
- **Onde alterar:** Na classe `.grid-b`.
- **Antes:**
  ```css
  grid-template-columns: 1fr 2fr 1fr;
  ```
- **Depois (exemplo 3 colunas iguais):**
  ```css
  grid-template-columns: repeat(3, 1fr);
  ```

---

### 5. "Mude o texto exibido nos botões de tema claro/escuro"
- **Arquivo:** `script.js` (Linha 437)
- **Onde alterar:** Na função `atualizarTextosTema()`.
- **Antes:**
  ```javascript
  const novoTexto = estaEscuro ? 'Ativar Modo Claro' : 'Ativar Modo Escuro';
  ```
- **Depois:**
  ```javascript
  const novoTexto = estaEscuro ? '☀️ Tema Dia' : '🌙 Tema Noite';
  ```

---

### 6. "Adicione um novo item ou link no Menu `<nav>`"
- **Arquivo:** `index.html` (Linha 37)
- **Onde alterar:** Dentro da lista `<ul>` em `<nav class="arthur_nav">`.
- **Exemplo de inserção:**
  ```html
  <li><a href="#loja">Novidades</a></li>
  ```

---

### 7. "Limite o número máximo de imagens no carrossel para 6 imagens"
- **Arquivo:** `script.js` (Linha 210)
- **Onde alterar:** No evento de clique do botão `#carrossel-btn-adicionar`.
- **Código a inserir no início do listener:**
  ```javascript
  if (carrosselImagens.length >= 6) {
      alert('Limite máximo atingido! O carrossel aceita no máximo 6 imagens.');
      return;
  }
  ```

---

### 8. "Mude o filtro inicial da Lista de Desejos para começar em 'Pendentes'"
- **Arquivo:** `script.js` (Linha 249)
- **Onde alterar:** Na declaração da variável de filtro.
- **Antes:**
  ```javascript
  let filtroDesejosAtual = 'todos';
  ```
- **Depois:**
  ```javascript
  let filtroDesejosAtual = 'pendentes';
  ```
- No `index.html` (Linhas 254-256), passe a classe `ativo` para o botão de Pendentes.

---

### 9. "Adicione uma confirmação antes de apagar todos os itens da Lista de Desejos"
- **Arquivo:** `script.js` (Linha 405)
- **Onde alterar:** No listener de `#desejo-btn-limpar-todos`.
- **Antes:**
  ```javascript
  btnLimparTodosDesejos.addEventListener('click', function() {
      if (listaDesejos.length === 0) { ... }
      listaDesejos = [];
      renderizarListaDesejos();
  });
  ```
- **Depois:**
  ```javascript
  btnLimparTodosDesejos.addEventListener('click', function() {
      if (listaDesejos.length === 0) { ... }
      const confirmou = confirm('Tem certeza de que deseja apagar todos os itens da lista?');
      if (confirmou) {
          listaDesejos = [];
          renderizarListaDesejos();
          alert('Lista apagada com sucesso!');
      }
  });
  ```

---

### 10. "Mude a senha mínima do cadastro de 6 para 8 caracteres"
- **Arquivo:** `script.js` (Linha 63)
- **Onde alterar:** Na verificação da senha.
- **Antes:**
  ```javascript
  else if (senha === '' || senha.length < 6) {
      alert('Erro no campo Senha: A senha deve ter no mínimo 6 caracteres para sua segurança.');
  ```
- **Depois:**
  ```javascript
  else if (senha === '' || senha.length < 8) {
      alert('Erro no campo Senha: A senha deve ter no mínimo 8 caracteres para sua segurança.');
  ```
