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
