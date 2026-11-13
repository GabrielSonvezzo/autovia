/*
  Arquivo: midia.js
  Projeto: AutoVia Veículos - Projeto Front-End para Web
  Descrição: botões que tocam e pausam o vídeo e o áudio
*/

var video = document.getElementById("video");
var audio = document.getElementById("audio");
var botaoVideo = document.getElementById("botao-video");
var botaoAudio = document.getElementById("botao-audio");

botaoVideo.onclick = function () {
    if (video.paused) {
        video.play();
        botaoVideo.innerHTML = "Pausar vídeo";
    } else {
        video.pause();
        botaoVideo.innerHTML = "Reproduzir vídeo";
    }
};

botaoAudio.onclick = function () {
    if (audio.paused) {
        audio.play();
        botaoAudio.innerHTML = "Pausar som";
    } else {
        audio.pause();
        botaoAudio.innerHTML = "Ouvir som do motor";
    }
};
