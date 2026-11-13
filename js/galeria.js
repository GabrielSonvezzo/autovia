/*
  Arquivo: galeria.js
  Projeto: AutoVia Veículos - Projeto Front-End para Web
  Descrição: ao clicar em uma foto da galeria ela é exibida em destaque
*/

var fotos = document.getElementsByClassName("foto");
var imagemDestaque = document.getElementById("imagem-destaque");
var legendaDestaque = document.getElementById("legenda-destaque");
var cliques = 0;

function ampliar(foto) {
    imagemDestaque.src = foto.src;
    legendaDestaque.innerHTML = foto.alt;
    cliques = cliques + 1;
    document.getElementById("cliques").innerHTML = cliques;
}

for (var i = 0; i < fotos.length; i++) {
    fotos[i].onclick = function () {
        ampliar(this);
    };
}
