async function getListaDeVideos() {
    const listaDeVideos = await (await fetch('http://localhost:3000/videos')).json();
    return listaDeVideos
}

async function setVideo(titulo, descricao, url, imagem) {
    await fetch('http://localhost:3000/videos', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    })
}

async function getVideoPesquisa(criterioDePesquisa) {
    const video = await fetch(`http://localhost:3000/videos?q=${criterioDePesquisa}`);
    const videoConvertido = await video.json();
    return videoConvertido
}

export const conectaAPI = {
    getListaDeVideos,
    setVideo,
    getVideoPesquisa
}