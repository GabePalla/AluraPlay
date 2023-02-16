import { conectaAPI } from "./conectaAPI.js";
import montaCard from "./montaCard.js";

const elementoListaVideos = document.querySelector('[data-lista-videos]');
const barraDePesquisa = document.getElementById('pesquisar');
const btnPesquisa = document.querySelector('.pesquisar__botao');

async function listarVideos() {
    try{
        const listaDevideos = await conectaAPI.getListaDeVideos();
        if (listaDevideos.length == 0) {
            throw new Error('Não há nenhum video para ser exibido.')
        }
        listaDevideos.forEach(video => {
            elementoListaVideos.appendChild(montaCard(video))
        });
    } catch(erro) {
        throw new Error(erro);
    }


}

async function listaVideosPesquisa(criterioDePesquisa) {
    elementoListaVideos.innerHTML = ""
    try {
        const listaDeVideos = await conectaAPI.getVideoPesquisa(criterioDePesquisa);

        listaDeVideos.forEach(video => {
            elementoListaVideos.appendChild(montaCard(video)) 
        });
    } catch (erro) {
        throw new Error(erro)
    }

}

listarVideos()

btnPesquisa.addEventListener('click', () => {
    listaVideosPesquisa(barraDePesquisa.value)
})