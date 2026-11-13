/*
  Arquivo: cadastro.js
  Projeto: AutoVia Veículos - Projeto Front-End para Web
  Descrição: cadastro de test drive com lista salva no localStorage
*/

var formulario = document.getElementById("form-testdrive");
var lista = document.getElementById("lista-agendamentos");
var aviso = document.getElementById("aviso");
var agendamentos = [];

if (localStorage.getItem("agendamentos") != null) {
    agendamentos = JSON.parse(localStorage.getItem("agendamentos"));
}

function mostrar() {
    lista.innerHTML = "";

    if (agendamentos.length == 0) {
        aviso.style.display = "block";
    } else {
        aviso.style.display = "none";
    }

    for (var i = 0; i < agendamentos.length; i++) {
        lista.innerHTML = lista.innerHTML + '<li class="list-group-item">' +
            agendamentos[i].nome + " - " + agendamentos[i].carro + " - " + agendamentos[i].data + "</li>";
    }
}

formulario.onsubmit = function (evento) {
    evento.preventDefault();

    var novo = {
        nome: document.getElementById("nome").value,
        telefone: document.getElementById("telefone").value,
        carro: document.getElementById("carro").value,
        data: document.getElementById("data").value
    };

    agendamentos.push(novo);
    localStorage.setItem("agendamentos", JSON.stringify(agendamentos));
    formulario.reset();
    mostrar();
};

document.getElementById("limpar").onclick = function () {
    agendamentos = [];
    localStorage.removeItem("agendamentos");
    mostrar();
};

mostrar();
