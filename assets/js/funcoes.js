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

function carregarTextos() {
    const textos = [
        { caminho: 'assets/textos/txt-apresentacao-empresa.txt', id: 'txt-apresentacao-empresa' },
        { caminho: 'assets/textos/txt-missao-empresa.txt', id: 'txt-missao-empresa' },
        { caminho: 'assets/textos/txt-valores-empresa.txt', id: 'txt-valores-empresa' }
    ];

    textos.forEach(texto => {
        lerArquivoTxt(texto.caminho, texto.id); // Chama a função para cada item
    });
}





//CARREGAR O FOOTER 

function carregarFooter(caminho) {
    $(document).ready(function() {
        $("#footer-wrapper").load(caminho);
    });
}
