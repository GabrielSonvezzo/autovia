/*
  Arquivo: contato.js
  Projeto: AutoVia Veículos - Projeto Front-End para Web
  Descrição: mostra um alerta ao enviar o contato e guarda o nome no localStorage
*/

var formulario = document.getElementById("form-contato");
var alerta = document.getElementById("alerta-contato");
var ultimo = document.getElementById("ultimo-contato");

if (localStorage.getItem("ultimoContato") != null) {
    ultimo.innerHTML = localStorage.getItem("ultimoContato");
}

formulario.onsubmit = function (evento) {
    evento.preventDefault();

    var nome = document.getElementById("nome").value;
    var assunto = document.getElementById("assunto").value;

    alerta.innerHTML = "Obrigado, " + nome + "! Sua mensagem sobre " + assunto + " foi enviada.";
    alerta.style.display = "block";

    localStorage.setItem("ultimoContato", nome);
    ultimo.innerHTML = nome;
    formulario.reset();
};
