# 05 - Guia de Defesa Oral: JavaScript, Funções e DOM

Este guia aborda os fundamentos de JavaScript utilizados no projeto DevGames, as regras de escopo, os três tipos de função e a manipulação da árvore DOM.

---

## 1. Por que NÃO USAR `var`? (`const` vs `let`)

No projeto DevGames, **o uso de `var` foi 100% banido**, utilizando-se exclusivamente `const` e `let`.

### As razões técnicas para a defesa:
1. **Escopo de Bloco vs. Escopo de Função:**
   - `var` possui escopo de função ou global. Uma variável declarada com `var` dentro de um `if` ou `for` vaza para fora do bloco, causando colisões e bugs imprevisíveis.
   - `const` e `let` possuem **escopo de bloco** (delimitado por `{ }`). Elas só existem dentro do bloco onde foram criadas.
2. **Hoisting (Içamento):**
   - Com `var`, a declaração é içada para o topo e inicializada como `undefined`, permitindo acessar a variável antes da sua linha de criação sem disparar erro visível.
   - Com `const` e `let`, ocorre a *Temporal Dead Zone* (Zona Morta Temporal): acessar a variável antes da sua declaração gera um `ReferenceError`, facilitando a detecção imediata de erros.
3. **Reatribuição Segura:**
   - Usamos `const` para tudo que não deve ter sua referência reatribuída (como seletores de elementos do DOM, arrays e referências fixas).
   - Usamos `let` apenas para variáveis cujo valor precisa mudar ao longo do tempo (como `indiceCarrossel`, `filtroDesejosAtual` e contadores de loop `for`).

---

## 2. Os Três Tipos de Função no Projeto

O projeto demonstra, de forma prática e funcional, os três tipos de funções exigidos no edital:

### 1. Funções Nomeadas (`function nome() { ... }`)
- **Exemplo no projeto:**
  ```javascript
  function validarFormulario(evento) { ... }
  function atualizarCarrossel() { ... }
  function renderizarListaDesejos() { ... }
  function adicionarNovoDesejo() { ... }
  function alternarTemaGlobal() { ... }
  function atualizarTextoTema() { ... }
  ```
- **Quando usar:** São ideais para funções principais do sistema que precisam ser chamadas em mais de um lugar ou que possuem uma responsabilidade bem definida e identificável. Elas sofrem hoisting completo de declaração.

### 2. Funções Anônimas (`function() { ... }`)
- **Exemplo no projeto:**
  ```javascript
  btnCarrosselAnt.addEventListener('click', function() {
      if (indiceCarrossel > 0) {
          indiceCarrossel--;
          atualizarCarrossel();
      }
  });
  ```
- **Quando usar:** São funções que não possuem nome próprio, utilizadas diretamente como funções de retorno de chamada (*callbacks*) de eventos que só serão executados naquele ponto específico.

### 3. Arrow Functions (`() => { ... }`)
- **Exemplo no projeto:**
  ```javascript
  // Função utilitária para extrair dígitos do telefone
  const extrairApenasDigitos = (texto) => {
      let resultado = '';
      for (let i = 0; i < texto.length; i++) {
          if (texto[i] >= '0' && texto[i] <= '9') {
              resultado += texto[i];
          }
      }
      return resultado;
  };

  // Atualização dos contadores na Lista de Desejos
  const atualizarContadoresDesejos = () => { ... };
  ```
- **Quando usar:** Introduzidas no ES6, oferecem uma sintaxe concisa e não vinculam seu próprio `this`, facilitando a leitura de rotinas curtas e operações em lote.

---

## 3. Seleção e Manipulação do DOM

### Seleção de Elementos:
- `document.getElementById('meuForm')`: Seleciona de maneira rápida e direta um elemento pelo seu ID exclusivo.
- `document.querySelector('input[name="novidades"]:checked')`: Seleciona o primeiro elemento que atende a um seletor CSS avançado (neste caso, o radio button marcado).
- `document.querySelectorAll('.filtro-btn')`: Retorna uma lista de nós (`NodeList`) com todos os elementos que possuem a classe informada.

### Manipulação Dinâmica:
- `document.createElement('li')`: Cria um novo nó de elemento HTML em memória sem recarregar a página.
- `elementoPai.appendChild(elementoFilho)`: Anexa o novo elemento dentro do contêiner pai na árvore DOM.
- `elemento.classList.toggle('classe')`: Adiciona a classe se ela não existir, ou remove se ela já estiver presente.
- `elemento.textContent = 'Texto'`: Altera o texto puro do elemento de forma segura contra ataques de injeção XSS.
- `elemento.value`: Lê ou altera o valor digitado pelo usuário em campos de formulário.

---

## 4. O que é e por que usar `URL.createObjectURL()`?

Na **Funcionalidade D (Carrossel)**, quando o usuário seleciona um arquivo de imagem do próprio computador (`<input type="file">`), usamos:

```javascript
const urlTemporaria = URL.createObjectURL(arquivoSelecionado);
```

### Por que usamos isso na defesa?
- **Front End Puro (Sem Backend):** Como o projeto não possui servidor nem banco de dados para fazer upload de imagens, o método nativo do navegador `URL.createObjectURL(blob)` gera uma URL temporária em memória (ex.: `blob:http://...`) que aponta diretamente para o arquivo local.
- **Simplicidade Didática:** É muito mais simples e direto de defender do que o `FileReader`, pois não exige configuração de eventos assíncronos (`onload`) e resolve o problema em uma única linha legível.

---

## 5. Perguntas Prováveis da Defesa Oral e Respostas Modelo

### Pergunta 1: *"Qual a diferença prática entre `let` e `const`?"*
> **Resposta:** *"Uma variável declarada com `const` cria uma referência constante, ou seja, o identificador não pode receber uma nova atribuição com `=`. Já variáveis declaradas com `let` podem ter seu valor reatribuído livremente. Ambas possuem escopo de bloco e não sofrem o içamento problemático do `var`."*

### Pergunta 2: *"Por que vocês usaram `DOMContentLoaded` no início do `script.js`?"*
> **Resposta:** *"O evento `DOMContentLoaded` garante que o navegador só execute o nosso código JavaScript após ter lido e construído toda a árvore de elementos HTML do DOM. Isso evita erros comuns em que o script tenta manipular um botão ou campo que ainda não foi renderizado."*

### Pergunta 3: *"Por que usamos `event.preventDefault()` no submit do formulário?"*
> **Resposta:** *"Por padrão, o formulário HTML tenta enviar os dados para outra página ou recarregar a página atual ao clicar no botão submit. O `evento.preventDefault()` interrompe esse comportamento padrão, permitindo que a nossa função JavaScript valide cada campo primeiro e exiba os alertas sem que a página recarregue e perca os dados digitados."*

### Pergunta 4: *"Como funciona a função `URL.createObjectURL` utilizada no carrossel?"*
> **Resposta:** *"Quando o usuário escolhe um arquivo de imagem pelo `<input type="file">`, essa função da Web API gera uma URL temporária em memória (formato blob) que aponta para o arquivo local. Assim, conseguimos colocar essa URL no atributo `src` da tag `<img>` e exibir a foto na página instantaneamente, sem precisar de um servidor backend."*
