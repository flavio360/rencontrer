document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menuContent = document.getElementById('menu-content');
    const showMenu = document.getElementById('show-menu');
    const menuInfo = document.getElementById('menu-info');

    menuToggle.addEventListener('click', function() {
        menuContent.classList.toggle('d-none');
        loadMenuItems(); // Função para carregar itens do menu
    });

    showMenu.addEventListener('click', function() {
        menuInfo.classList.toggle('d-none');
        loadMenuDescription(); // Função para carregar descrição do menu
    });

    function loadMenuItems() {
        // Código para carregar itens do menu a partir do Excel
        // Exemplo com fetch:
        fetch('path/to/menu-items.xlsx')
            .then(response => response.arrayBuffer())
            .then(data => {
                // Processar dados do Excel e exibir no menu
            });
    }

    function loadMenuDescription() {
        // Código para carregar descrição do menu
    }
});
