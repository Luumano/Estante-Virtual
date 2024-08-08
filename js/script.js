document.addEventListener('DOMContentLoaded', (event) => {
    // Lógica de pesquisa
    const searchIcon = document.getElementById('searchIcon');
    const searchInput = document.getElementById('searchInput');

    searchIcon.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (searchTerm) {
            // Redirecionar para a página de resultados
            window.location.href = `search_results.html?query=${encodeURIComponent(searchTerm)}`;
        } else {
            alert('Por favor, digite um termo de pesquisa válido.');
        }
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchIcon.click();
        }
    });

    // Lógica de exibição do menu de categorias
    const categoriesIcon = document.getElementById('categoriesIcon');
    const categoriesMenu = document.getElementById('categoriesMenu');

    categoriesIcon.addEventListener('click', () => {
        if (categoriesMenu.style.display === 'block') {
            categoriesMenu.style.display = 'none';
        } else {
            categoriesMenu.style.display = 'block';
        }
    });

    // Ocultar o menu ao clicar fora dele
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.categorias')) {
            categoriesMenu.style.display = 'none';
        }
    });

    // Lógica de redirecionamento do carrinho
    const cartIconLink = document.getElementById('cartIconLink');
    if (isLoggedIn) {
        cartIconLink.href = 'compra.html';
    } else {
        cartIconLink.href = 'login.html';
    }

    // Lógica de login
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    const loginText = document.getElementById('loginText');
    const warningMessage = document.getElementById('warningMessage');

    function checkInputs() {
        if (emailInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
            warningMessage.style.display = 'none';
        } else {
            warningMessage.style.display = 'block';
        }
    }

    emailInput.addEventListener('input', checkInputs);
    passwordInput.addEventListener('input', checkInputs);

    loginText.addEventListener('click', function(event) {
        if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
            warningMessage.style.display = 'block';
        } else {
            alert('Login realizado com sucesso!');
        }
    });
});