// Define uma classe chamada 'Carousel'
class Carousel {
    // O construtor recebe três arrays: imagens, títulos e URLs
    constructor(images, titles, urls) {
        this.images = images; // Armazena o array de imagens
        this.titles = titles; // Armazena o array de títulos
        this.urls = urls; // Armazena o array de URLs
        this.currentIndex = 0; // Inicializa o índice da imagem atual
        this.carouselElement = document.getElementById("carousel"); // Obtém o elemento do carrossel pelo ID
        this.titleElement = document.getElementById("carousel-title"); // Obtém o elemento do título pelo ID
        this.start(); // Inicia o carrossel
        
    }

    // Método para iniciar o carrossel
    start() {
        this.next(); // Exibe a primeira imagem
        setInterval(() => this.next(), 2000); // Troca a imagem a cada 2 segundos automaticamente
    }

    // Método para avançar para a próxima imagem
    next() {
        // Atualiza o índice da imagem atual, garantindo que ele volte ao início quando chegar ao final
        this.currentIndex = (this.currentIndex + 1) % this.images.length;

        // Atualiza a imagem de fundo do carrossel
        this.carouselElement.style.backgroundImage = `url('${this.images[this.currentIndex]}')`;

        // Atualiza o título do carrossel, criando um link para a URL correspondente
        this.titleElement.innerHTML = `<a href="${this.urls[this.currentIndex]}">${this.titles[this.currentIndex]}</a>`;
    }
}

// Aguarda o carregamento completo da página antes de executar o código
document.addEventListener("DOMContentLoaded", () => {
    // Arrays contendo imagens, títulos e URLs
    const images = ["img/imagem_1.jpg", "img/imagem_2.jpg", "img/imagem_3.jpg"];
    const titles = ["Esta é a nova Ranger Ford 2022. Verifique novidades.", 
                    "Ford T, primeiro carro popular da história.",  
                    "Novo Ford Branco Sport 2022."];
    const urls = ["#car1", "#car2", "#car3"];

    // Cria uma instância do carrossel com os dados fornecidos
    new Carousel(images, titles, urls);
});

// Cria um novo elemento `<style>` para adicionar regras CSS ao documento
const style = document.createElement("style");
style.innerHTML = 
`
/* Define um estilo para o elemento 'main' */
main {
  display: flex; /* Usa flexbox para organizar os elementos */
  justify-content: center; /* Centraliza os elementos horizontalmente */
  align-items: center; /* Centraliza os elementos verticalmente */
  height: 100vh; /* Define a altura como 100% da tela */
  flex-direction: column; /* Organiza os elementos verticalmente */
}

/* Define um estilo para o carrossel */
div#carousel {
   width: 86%; /* Define a largura como 86% do contêiner */
   height: 86%; /* Define a altura como 86% do contêiner */
   object-fit: contain; /* Garante que a imagem se ajuste dentro do contêiner */
}
`;

// Adiciona o estilo criado ao `<head>` da página
document.head.appendChild(style);
