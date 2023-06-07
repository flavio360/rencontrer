function loadTextFilePublication() {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", "arquivos_txt/publicacao/AlmaESentimentos.txt", true);
  rawFile.onreadystatechange = function() {
    if (rawFile.readyState === 4 && rawFile.status === 200) {
      var content = rawFile.responseText;
      document.getElementById("campoTexto").innerHTML = content;
    }
  };
  rawFile.send();
}