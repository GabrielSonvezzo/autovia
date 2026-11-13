/*
  Arquivo: script.js
  Projeto: AutoVia Veículos - Projeto Front-End para Web
  Descrição: escreve o ano atual no rodapé de todas as páginas
*/

var ano = document.getElementById("ano");
var dataAtual = new Date();
ano.innerHTML = dataAtual.getFullYear();
