function carrega_publicacao()
{
    fetch('arquivos_txt/publicacao/AlmaESentimentos.txt')
      .then(response => response.text())
      .then(data => {
        const campoTexto = document.getElementById('campoTexto');
        campoTexto.textContent = data;
      })
      .catch(error => {
        console.log('Erro ao carregar o arquivo:', error);
      });
}