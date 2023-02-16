
export default function montaCard(video) {
    const itemLista = document.createElement('li');
    itemLista.classList.add('videos__item')
    itemLista.innerHTML = `
    <iframe width="100%" height="72%" src="${video.url}"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    <div class="descricao-video">
        <img src="${video.imagem}" alt="logo canal alura"></img>
        <h3>${video.titulo}</h3>
        <p>${video.descricao}</p>
    </div>
`;
    return itemLista;
}