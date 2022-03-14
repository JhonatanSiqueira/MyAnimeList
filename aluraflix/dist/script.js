function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  if (filmeFavorito.endsWith(".jpg")) {
    listarNaTela(filmeFavorito);
  } else {
    console.error("Endereço invalido!");
  }
  document.getElementById("filme").value = "";
}

function listarNaTela(filme) {
  var elementoFilmeFavorito = "<img src=" + filme + ">";
  var elementolistaFilmes = document.getElementById("listaFilmes");
  elementolistaFilmes.innerHTML =
    elementolistaFilmes.innerHTML + elementoFilmeFavorito;
}