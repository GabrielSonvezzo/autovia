# AutoVia Veículos - Guia de defesa do projeto

Site de uma loja de carros seminovos feito para a disciplina Desenvolvimento Front-End para Web (DFEW.08).
Para abrir: dê dois cliques em `index.html` (funciona offline, sem servidor).

## Estrutura de pastas

| Pasta / arquivo | Conteúdo |
|---|---|
| `*.html` (raiz) | as 10 páginas do site |
| `css/estilo.css` | CSS externo das páginas com Bootstrap |
| `css/puro.css` | CSS externo das páginas sem Bootstrap (galeria e mídia) |
| `css/bootstrap.min.css` | Bootstrap 5.3 (cópia local para rodar offline) |
| `js/script.js` | ano do rodapé (todas as páginas) |
| `js/puro.js` | abre/fecha o menu nas páginas sem Bootstrap |
| `js/estoque.js`, `contato.js`, `cadastro.js`, `financiamento.js`, `galeria.js`, `midia.js` | script de cada página |
| `img/` | fotos dos carros, banner e logo |
| `video/apresentacao.mp4`, `audio/motor.mp3` | mídia dos players |
| `doc/` | documentação |

## Páginas (10)

1. `index.html` - Início (banner, alerta, 3 cards, flexbox)
2. `estoque.html` - cards dos carros com filtro por categoria (JS mostra/esconde)
3. `galeria.html` - **HTML/CSS/JS puros** - galeria em CSS Grid
4. `midia.html` - **HTML/CSS/JS puros** - vídeo e áudio com controles
5. `servicos.html` - cards em CSS Grid e lista numerada
6. `comparativo.html` - tabela 8 x 7 com cabeçalho
7. `financiamento.html` - simulador de parcelas com juros simples
8. `cadastro.html` - agendamento de test drive salvo no localStorage
9. `contato.html` - formulário com validações nativas, salva no localStorage
10. `sobre.html` - sobre a loja

## Onde cada requisito do professor está atendido

| # | Requisito | Onde |
|---|---|---|
| 1 | Pastas organizadas | img, css, js, doc, video, audio |
| 2 | HTML5 semântico | `header`, `nav`, `main`, `section`, `article`, `figure`, `footer`, `address` em todas as páginas |
| 3 | CSS por TAG, CLASSE e ID / em linha, incorporado, externo | `estilo.css`: `body` (tag), `.banner` (classe), `#topo` (id). Incorporado: `<style>` em `index.html`, `sobre.html`, `galeria.html`. Em linha: `style=""` no parágrafo "Avaliamos o seu usado" em `index.html` e no `h2` de `galeria.html` |
| 4 | 2 páginas sem framework | `galeria.html` e `midia.html` (usam só `puro.css`, `script.js`, `puro.js`) |
| 5 | Menu com links internos e externos + hover | navbar: links das 10 páginas + FIPE e Detran-PR. Hover em `#topo .nav-link:hover` e `#menu a:hover` |
| 6 | Navbar, container e rodapé em todas | `header#topo`, `main.container`, `footer#rodape` |
| 7 | Vídeo e áudio com controles | `midia.html` (`<video controls>`, `<audio controls>`) |
| 8 | CSS Grid | `.galeria` em `puro.css` e `.grade-servicos` em `estilo.css` |
| 9 | Flexbox | `.caixa-flex`, `.rodape-conteudo`, `.barra`, `.midia`, `#destaque` |
| 10 | Cards horizontais | `index.html` (destaques), `servicos.html`, `estoque.html` |
| 11 | Responsivo 2 larguras | `@media (max-width: 768px)` nos dois CSS + grid do Bootstrap |
| 12 | Tabela 4x4 com títulos | `comparativo.html` (8 linhas x 7 colunas, `<thead>`) |
| 13 | Form com text, email, select, submit, textarea | `contato.html` |
| 14 | required, minlength, pattern, placeholder | `contato.html` e `cadastro.html` (pattern do telefone) |
| 15 | :focus, :hover, :invalid | fim de `estilo.css` (`.form-control:focus/hover/invalid`) |
| 16 | Classes do Bootstrap: menu, botões, forms, alertas, cards | `navbar`, `btn`, `form-control`, `alert`, `card` |
| 17 | Eventos JS manipulando o DOM | `onclick`, `onchange`, `onsubmit` em todos os scripts; `innerHTML`, `style.display`, `className` |
| 18 | 4 estruturas: sequencial, condicional, repetição, dados | `script.js` (sequencial); `estoque.js` (`for` + `if`); `cadastro.js` (vetor de objetos) |
| 19 | localStorage | `cadastro.js` (lista de agendamentos) e `contato.js` (último nome) |
| 20 | GitHub | criar repositório público e enviar a pasta (ver abaixo) |

## Roteiro sugerido para a defesa

1. Abrir `index.html` e mostrar o menu, o banner e os cards. Reduzir a janela para mostrar o menu "hambúrguer" e os cards empilhados.
2. `estoque.html`: trocar o filtro e explicar o `for` + `if` em `estoque.js` que mostra/esconde cada card pelo `data-categoria`.
3. `cadastro.html`: agendar um test drive, dar F5 e mostrar que continua (localStorage). Abrir DevTools > Application > Local Storage.
4. `contato.html`: tentar enviar vazio para mostrar `required`, `minlength` e `pattern`, e o campo ficando vermelho (`:invalid`).
5. `galeria.html` e `midia.html`: mostrar que não há `bootstrap.min.css` no `<head>` e que o menu mobile é feito trocando o `className` em `puro.js`.
6. `financiamento.html`: explicar o cálculo de juros simples (`total = financiado + financiado * 0.015 * parcelas`) e o `if` da compra à vista.

## Como publicar no GitHub

1. Criar um repositório público chamado `autovia-veiculos`.
2. Enviar todos os arquivos desta pasta (arrastar na página do repositório ou `git add . && git commit && git push`).
3. Em Settings > Pages, escolher a branch `main` e a pasta raiz para ter o site online.

## Ferramentas e referências

- Bootstrap 5.3: https://getbootstrap.com/docs/5.3/
- MDN Web Docs: https://developer.mozilla.org/pt-BR/
- W3Schools: https://www.w3schools.com/
- Validador HTML do W3C: https://validator.w3.org/
