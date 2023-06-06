const fs = require('fs');

// Ler o valor do arquivo
fs.readFile('contador.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Converter o valor lido para número e incrementá-lo em 1
  let valor = parseInt(data);
  valor += 1;

  // Salvar o novo valor no arquivo
  fs.writeFile('arquivo.txt', valor.toString(), 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }

    //console.log('Novo valor salvo com sucesso!');
  });
});