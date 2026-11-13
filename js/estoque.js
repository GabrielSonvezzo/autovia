/*
  Arquivo: estoque.js
  Projeto: AutoVia Veículos - Projeto Front-End para Web
  Descrição: filtra os cards do estoque pela categoria escolhida no select
*/

var filtro = document.getElementById("filtro-categoria");
var carros = document.getElementsByClassName("carro");
var contador = document.getElementById("contador");

function filtrar() {
    var categoria = filtro.value;
    var total = 0;

    for (var i = 0; i < carros.length; i++) {
        if (categoria == "todos" || carros[i].getAttribute("data-categoria") == categoria) {
            carros[i].style.display = "block";
            total = total + 1;
        } else {
            carros[i].style.display = "none";
        }
    }

    contador.innerHTML = total + " veículo(s)";
}

filtro.onchange = filtrar;
filtrar();
