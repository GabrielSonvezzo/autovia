/*
  Arquivo: puro.js
  Projeto: AutoVia Veículos - Projeto Front-End para Web
  Descrição: abre e fecha o menu das páginas sem Bootstrap em telas pequenas
*/

var botaoMenu = document.getElementById("botao-menu");
var menu = document.getElementById("menu");

botaoMenu.onclick = function () {
    if (menu.className == "aberto") {
        menu.className = "";
    } else {
        menu.className = "aberto";
    }
};
