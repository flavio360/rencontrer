function lerArquivoTxt(caminho, idElemento) {
    fetch(caminho)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao ler o arquivo: ' + response.statusText);
            }
            return response.text();
        })
        .then(texto => {
            const elemento = document.getElementById(idElemento);
            if (elemento) {
                elemento.textContent = texto; // Insere o conteúdo no elemento <p>
            } else {
                console.error('Elemento não encontrado: ' + idElemento);
            }
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}
// Chama a função para carregar o arquivo após o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    lerArquivoTxt('assets/textos/txt-apresentacao-empresa.txt', 'txt-apresentacao-empresa');
});

