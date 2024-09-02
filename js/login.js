// Lógica de pesquisa
const searchIcon = document.getElementById('searchIcon');
const searchInput = document.getElementById('searchInput');
const nomeInput = document.getElementById('nomeInput');
const telefoneInput = document.getElementById('telefoneInput');

searchIcon.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const nomeTerm = nomeInput.value.trim().toLowerCase();
    const telefoneTerm = telefoneInput.value.trim().toLowerCase();

    if (searchTerm || nomeTerm || telefoneTerm) {
        // Redirecionar para a página de resultados com os termos
        window.location.href = `search_results.html?query=${encodeURIComponent(searchTerm)}&nome=${encodeURIComponent(nomeTerm)}&telefone=${encodeURIComponent(telefoneTerm)}`;
    } else {
        alert('Por favor, preencha pelo menos um campo para a pesquisa.');
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