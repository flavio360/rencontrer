document.addEventListener("DOMContentLoaded", function() {
    const menuCardapio = document.getElementById('menu-cardapio');
    const menuConheca = document.getElementById('menu-conheca');
    const contentSection = document.getElementById('content');

    menuCardapio.addEventListener('click', function(event) {
        event.preventDefault();
        loadMenuItems();
    });

    menuConheca.addEventListener('click', function(event) {
        event.preventDefault();
        loadMenuDescription();
    });

    function loadMenuItems() {
        // Implementar o carregamento de dados do cardápio aqui
        contentSection.innerHTML = '<h2>Cardápio</h2><p>Conteúdo do cardápio será carregado aqui.</p>';
    }

    function loadMenuDescription() {
        // Implementar o carregamento da descrição aqui
        contentSection.innerHTML = '<h2>Conheça a Rencontrer</h2><p>Descrição sobre a Rencontrer será carregada aqui.</p>';
    }
});


function initCarousel(containerSelector, imageDir, imageList, interval = 4000) {
    const container = document.querySelector(containerSelector);
    const carousel = container.querySelector('.carousel');
    let currentIndex = 0;

    // Função para carregar as imagens e duplicar o conjunto para rotação contínua
    function loadImages() {
        imageList.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = `${imageDir}/${image}`;
            carousel.appendChild(imgElement);
        });

        // Duplicando as imagens para o loop infinito
        imageList.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = `${imageDir}/${image}`;
            carousel.appendChild(imgElement);
        });
    }

    // Função para trocar as imagens com suavidade
    function nextImage() {
        currentIndex++;
        const offset = -currentIndex * 100 / (imageList.length); // Ajustar o offset conforme o número de imagens
        carousel.style.transition = 'transform 0.5s ease-in-out'; // Suaviza a transição
        carousel.style.transform = `translateX(${offset}%)`;

        // Reseta o carrossel para o começo sem quebra
        if (currentIndex === imageList.length) {
            setTimeout(() => {
                carousel.style.transition = 'none'; // Remove a transição para resetar
                carousel.style.transform = 'translateX(0)'; // Reseta a posição
                currentIndex = 0; // Reseta o índice
            }, 500); // Espera a transição terminar antes de resetar
        }
    }

    loadImages(); // Carregar as imagens ao iniciar
    setInterval(nextImage, interval); // Muda a imagem a cada intervalo definido (padrão: 4 segundos)
}


//Botão do menu lateral
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentIndex = 0;

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('open'); // Alterna a classe 'open' no menu
    });

    function updateCarousel() {
        const offset = -currentIndex * 100;
        document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % carouselItems.length; // Move para o próximo item
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length; // Move para o item anterior
        updateCarousel();
    });
});

