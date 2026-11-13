/*
  Arquivo: financiamento.js
  Projeto: AutoVia Veículos - Projeto Front-End para Web
  Descrição: simulador de financiamento com juros simples de 1,5% ao mês
*/

var formulario = document.getElementById("form-simulador");
var resultado = document.getElementById("resultado");

formulario.onsubmit = function (evento) {
    evento.preventDefault();

    var preco = Number(document.getElementById("carro").value);
    var entrada = Number(document.getElementById("entrada").value);
    var parcelas = Number(document.getElementById("parcelas").value);
    var juros = 0.015;

    if (entrada >= preco) {
        resultado.className = "alert alert-success";
        resultado.innerHTML = "Com essa entrada você compra o carro à vista!";
        return;
    }

    var financiado = preco - entrada;
    var total = financiado + financiado * juros * parcelas;
    var valorParcela = total / parcelas;

    resultado.className = "alert alert-info";
    resultado.innerHTML = "Valor financiado: R$ " + financiado.toFixed(2) + "<br>" +
        parcelas + " parcelas de R$ " + valorParcela.toFixed(2) + "<br>" +
        "Total ao final: R$ " + total.toFixed(2);
};
