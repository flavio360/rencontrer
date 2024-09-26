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

    // Função para carregar as imagens
    function loadImages() {
        imageList.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = `${imageDir}/${image}`;
            carousel.appendChild(imgElement);
        });
    }

    // Função para trocar as imagens
    function nextImage() {
        currentIndex = (currentIndex + 1) % imageList.length;
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    loadImages(); // Carregar as imagens ao iniciar
    setInterval(nextImage, interval); // Muda a imagem a cada intervalo definido (padrão: 4 segundos)
}

