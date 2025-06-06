const image = document.getElementById("previewImage");

const image1 = "imagens/previa.png"; // imagem inicial
const image2 = "imagens/previa-desktop.png"; // imagem alternativa

let showingFirst = true;

image.addEventListener("click", () => {
  image.src = showingFirst ? image2 : image1;
  showingFirst = !showingFirst;
});
