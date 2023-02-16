import { conectaAPI } from "./conectaAPI.js";
const formulario = document.querySelector('.container__formulario');

function incluirVideo(event) {
    event.preventDefault()
    try {
        const titulo = document.getElementById('titulo').value
        const url = document.getElementById('url').value
        const imagem = document.getElementById('imagem').value
        const descricao = Math.floor(Math.random() * 10).toString();

        conectaAPI.setVideo(titulo, descricao, url, imagem)

        window.location.href = "../pages/envio-concluido.html"
    } catch (erro) {
        alert(erro);
    }


}

formulario.addEventListener('submit', event => incluirVideo(event));