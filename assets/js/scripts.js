document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menuContent = document.getElementById('menu-content');
    const showMenu = document.getElementById('show-menu');
    const menuInfo = document.getElementById('menu-info');

    menuToggle.addEventListener('click', function() {
        menuContent.classList.toggle('d-none');
        loadMenuItems(); // Carregar itens do menu
    });

    showMenu.addEventListener('click', function() {
        menuInfo.classList.toggle('d-none');
        loadMenuDescription(); // Carregar descrição do menu
    });

    function loadMenuItems() {
        // Carregar itens fixos "Cardápio" e "Conheça a Rencontrer"
        const menuContainer = document.getElementById('menu-content');
        menuContainer.innerHTML = '';

        const menuItems = [
            { text: 'Cardápio' },
            { text: 'Conheça a Rencontrer' }
        ];

        menuItems.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            menuItem.textContent = item.text;
            menuContainer.appendChild(menuItem);
        });
    }

    function loadMenuDescription() {
        fetch('assets/xlsx/_menu.xlsx')
            .then(response => response.arrayBuffer())
            .then(data => {
                const workbook = XLSX.read(new Uint8Array(data), { type: 'array' });
                const sheetName = workbook.SheetNames[0]; // Usar a primeira planilha
                const sheet = workbook.Sheets[sheetName];
                const items = XLSX.utils.sheet_to_json(sheet);

                const menuDescriptionContainer = document.getElementById('menu-info');
                menuDescriptionContainer.innerHTML = '';

                items.forEach(item => {
                    if (item.Descrição) {
                        const descriptionItem = document.createElement('div');
                        descriptionItem.classList.add('menu-description');
                        descriptionItem.textContent = item.Descrição;
                        menuDescriptionContainer.appendChild(descriptionItem);
                    } else {
                        console.warn('Campo "Descrição" não encontrado no item:', item);
                    }
                });
            })
            .catch(error => console.error('Erro ao carregar o arquivo Excel:', error));
    }
});
