# 06 - Guia de Defesa Oral: DOM e Validações Detalhadas

Este guia disseca a lógica exata de cada um dos testes de validação do formulário e o ciclo completo de vida das três funcionalidades interativas (D, E e F).

---

## 1. Passo a Passo da Validação do Formulário (13 Campos)

A função `validarFormulario(evento)` é disparada pelo evento `submit` do formulário `#meuForm`. A validação é realizada sequencialmente com `if / else if / else`. Se algum campo falhar, o sistema exibe um `alert()` específico, foca o campo com `.focus()` e encerra a execução com `return`:

1. **Campo 1 (Nome Completo):**
   - Código: `if (nome === '' || nome.length < 3)`
   - Regra: Não pode ser vazio e deve ter pelo menos 3 caracteres.
2. **Campo 2 (E-mail):**
   - Código: `else if (email === '' || !email.includes('@') || !email.includes('.'))`
   - Regra: Deve conter obrigatoriamente os caracteres `@` e `.`. Uso didático do método nativo `.includes()`, dispensando regex complexa.
3. **Campo 3 (Confirmar E-mail):**
   - Código: `else if (emailConfirma === '' || emailConfirma !== email)`
   - Regra: Deve ser exatamente igual ao valor do campo e-mail.
4. **Campo 4 (Senha):**
   - Código: `else if (senha === '' || senha.length < 6)`
   - Regra: Não pode ser vazia e deve conter no mínimo 6 caracteres.
5. **Campo 5 (Confirmar Senha):**
   - Código: `else if (senhaConfirma === '' || senhaConfirma !== senha)`
   - Regra: Deve coincidir perfeitamente com a senha digitada.
6. **Campo 6 (Idade):**
   - Código: `else if (idadeValor === '' || isNaN(idade) || idade < 13)`
   - Regra: O valor é lido e convertido com `Number()`. Rejeita valores não numéricos (`isNaN`) ou menores que 13 anos.
7. **Campo 7 (Data de Nascimento):**
   - Código: `else if (dataNascimento === '') ... if (dataInserida > hoje)`
   - Regra: Deve estar preenchida e a data convertida com `new Date()` não pode ser posterior à data atual (`hoje`).
8. **Campo 8 (Telefone):**
   - Código: `const digitosTelefone = extrairApenasDigitos(telefone); if (digitosTelefone.length < 10 || digitosTelefone.length > 11)`
   - Regra: Remove traços e parênteses. Exige 10 dígitos (fixo com DDD) ou 11 dígitos (celular com DDD).
9. **Campo 9 (Plataforma Favorita):**
   - Código: `else if (plataforma === '')`
   - Regra: A primeira opção do `<select>` possui valor vazio `""`. O usuário é obrigado a escolher uma opção real.
10. **Campo 10 (Gênero Favorito):**
    - Código: `else if (genero === '')`
    - Regra: O mesmo princípio de validação de `<select>` acima.
11. **Campo 11 (Receber Novidades):**
    - Código: `else if (!novidadesMarcada)`
    - Regra: Selecionado via `document.querySelector('input[name="novidades"]:checked')`. Se for nulo, o usuário não marcou nem "Sim" nem "Não".
12. **Campo 12 (Mensagem / Bio):**
    - Código: `else if (mensagem === '' || mensagem.length < 10)`
    - Regra: Textarea obrigatório com pelo menos 10 caracteres de texto limpo (`.trim()`).
13. **Campo 13 (Termos de Uso):**
    - Código: `else if (!termosAceitos)`
    - Regra: Lê a propriedade booleana `.checked` do checkbox. Se for `false`, exige a marcação.
14. **Sucesso:**
    - Dispara `alert('Cadastro realizado com sucesso na DevGames!\nBem-vindo(a) à nossa comunidade, ' + nome + '!');`
    - Executa `formulario.reset()` para limpar todos os campos.

---

## 2. Fluxo da Funcionalidade D: Carrossel com Inclusão de Imagem

### Arquitetura de Dados:
- `carrosselImagens`: Array de objetos `[ { url: '...', legenda: '...' }, ... ]`.
- `indiceCarrossel`: Índice numérico da imagem em exibição (começa em 0).

### Ciclo de Ação e Alteração no DOM:
1. **Navegação (Anterior / Próximo):**
   - *Ação do Usuário:* Clica no botão `#carrossel-btn-ant` ou `#carrossel-btn-prox`.
   - *Evento:* Listener de `click`.
   - *Função:* Decrementa ou incrementa `indiceCarrossel` e chama `atualizarCarrossel()`.
   - *Alteração no DOM:* Altera `elementoImgCarrossel.src`, `elementoLegendaCarrossel.textContent` e `elementoContadorCarrossel.textContent`. Desabilita os botões nas pontas (`btn.disabled = true`).
2. **Inclusão de Imagem Local:**
   - *Ação do Usuário:* Escolhe uma foto do computador e digita uma legenda. Clica em "Adicionar Imagem".
   - *Evento:* `click` no botão `#carrossel-btn-adicionar`.
   - *Lógica JS:* Valida se o arquivo e a legenda existem. Cria a URL do arquivo com `URL.createObjectURL(arquivo)` e dá um `push` no array `carrosselImagens`.
   - *Alteração no DOM:* O índice vai para a última posição (`carrosselImagens.length - 1`), a nova foto aparece na tela sem atualizar a página e o contador passa de `4 / 4` para `5 / 5`.

---

## 3. Fluxo da Funcionalidade E: Lista de Desejos Dinâmica

### Arquitetura de Dados:
- `listaDesejos`: Array de objetos `[ { id: 1, nome: 'GTA VI', comprado: false }, ... ]`.
- `filtroDesejosAtual`: String que armazena `'todos'`, `'pendentes'` ou `'comprados'`.

### Ciclo de Ação e Alteração no DOM:
1. **Adicionar Item:**
   - Usuário digita o nome e clica em "Adicionar à Lista" (ou tecla Enter).
   - Valida se o texto está preenchido (`.trim() !== ''`).
   - Cria o objeto com `Date.now()` para ID único e insere no array.
   - Chama `renderizarListaDesejos()`.
2. **Renderização com `createElement`:**
   - A função esvazia a `<ul>` com `innerHTML = ''`.
   - Aplica o filtro selecionado.
   - Para cada jogo, cria os elementos via `document.createElement('li')`, `span` e `button`.
   - Adiciona listeners de clique individuais nos botões do item:
     - Marcar Status: inverte `comprado = !comprado` e re-renderiza.
     - Editar: abre `prompt()`, atualiza a propriedade `nome` e re-renderiza.
     - Excluir: remove do array com `.splice()` e re-renderiza.
   - Anexa os filhos via `appendChild()`.
   - Atualiza os contadores na tela (Total, Pendentes e Comprados).

---

## 4. Fluxo da Funcionalidade F: Personalização Visual Independente

### Arquitetura:
- Baseada em classes CSS aplicadas aos elementos pais e variáveis CSS nativas.

### Ciclo de Ação e Alteração no DOM:
1. **Modo Claro / Escuro Global:**
   - Clica no botão `#btn-tema-geral` na Seção 5.
   - Executa `document.body.classList.toggle('tema-escuro')`.
   - Atualiza o texto do botão (`btnTemaGeral.textContent`) entre "Ativar Modo Claro" e "Ativar Modo Escuro".

2. **5 Botões Independentes de Área:**
   - Cada botão possui seu próprio ouvinte de clique associado ao elemento-alvo:
     - Cabeçalho: `header.classList.toggle('eduardo_cabecalho_alt')`
     - Menu: `nav.classList.toggle('arthur_nav_alt')`
     - Cards: `containerCards.classList.toggle('cards_alt')`
     - Lateral: `aside.classList.toggle('arthur_lateral_alt')`
     - Rodapé: `footer.classList.toggle('eduardo_rodape_alt')`
   - O JavaScript altera o texto do próprio botão no momento do clique (ex.: "Cabeçalho: Roxo Gamer" ↔ "Cabeçalho: Cor Padrão").

3. **Botão Restaurar:**
   - Remove as 5 classes customizadas das áreas e a classe `tema-escuro` do `body`.
   - Reseta os textos de todos os botões para seus valores padrão.
   - Mostra alerta confirmando a restauração das cores originais da loja.
