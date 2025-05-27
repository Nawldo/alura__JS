class Carousel {
  constructor(images, titles, urls) {
      this.images = images;
      this.titles = titles;
      this.urls = urls;
      this.currentIndex = 0;
      this.carouselElement = document.getElementById("carousel");
      this.titleElement = document.getElementById("carousel-title");

      this.updateCarousel(); // Exibir primeira imagem corretamente

      document.getElementById("btnAvance").addEventListener("click", () => this.next());
      document.getElementById("btnVoltar").addEventListener("click", () => this.previous());

      setInterval(() => this.next(), 5000); // Troca automática a cada 5 segundos
  }

  next() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.updateCarousel();
  }

  previous() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      this.updateCarousel();
  }

  updateCarousel() {
      this.carouselElement.style.backgroundImage = `url('${this.images[this.currentIndex]}')`;
      this.titleElement.innerHTML = `<a href="${this.urls[this.currentIndex]}">${this.titles[this.currentIndex]}</a>`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const images = ["img/imagem_1.jpg", "img/imagem_2.jpg", "img/imagem_3.jpg"];
  const titles = ["Esta é a nova Ranger Ford 2022.", "Ford T, primeiro carro popular da história.", "Novo Ford Branco Sport 2022."];
  const urls = ["#car1", "#car2", "#car3"];

  new Carousel(images, titles, urls);
});


// Cria um novo elemento <style> e insere regras CSS
const style = document.createElement("style");
style.innerHTML = 
`
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Garante que ocupe toda a altura da tela */
  flex-direction: column; /* Coloca os elementos um abaixo do outro */
} 

div#carousel {
   width: 86%;
   height: 86%;
   object-fit: contain;

div#botoes {
  display: flex;
  gap: 10px; /* Espaço entre os botões */
  justify-content: center; /* Centraliza horizontalmente */
}

button {
    background-color: #007BFF;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s, transform 0.2s;
}

button:hover {
    background-color: #0056b3;
    transform: scale(1.1);
}

button:active {
    transform: scale(0.95);
}

`
// Adiciona a regra ao <head> da página
document.head.appendChild(style);

