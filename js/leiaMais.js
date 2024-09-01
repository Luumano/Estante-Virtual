// Lógica de pesquisa
const searchIcon = document.getElementById('searchIcon');
const searchInput = document.getElementById('searchInput');

searchIcon.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm) {
        // Redireciona para a página de resultados
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


let currentIndex = 0;

function mostrarMais() {
    // Esconde o grupo atual de 6 livros com transição suave
    for (let i = currentIndex; i < currentIndex + 6; i++) {
        const book = document.querySelector(`.carrossel${i + 1}`);
        book.classList.add('fade-out');
        setTimeout(() => {
            book.style.display = 'none';
            book.classList.remove('fade-out');
        }, 90); // Atraso para permitir que a animação termine
    }

    // Atualiza o índice para o próximo grupo de 6 livros
    currentIndex += 6;

    // Se o índice ultrapassar o número de livros, volta ao início
    if (currentIndex >= 12) {
        currentIndex = 0;
    }

    // Mostra o próximo grupo de 6 livros com transição suave
    for (let i = currentIndex; i < currentIndex + 6; i++) {
        const book = document.querySelector(`.carrossel${i + 1}`);
        book.style.display = 'block';
        book.classList.add('fade-in');
        setTimeout(() => {
            book.classList.remove('fade-in');
        }, 90); // Atraso para permitir que a animação termine
    }
}

function mostrarAnterior() {
    // Esconde o grupo atual de 6 livros com transição suave
    for (let i = currentIndex; i < currentIndex + 6; i++) {
        const book = document.querySelector(`.carrossel${i + 1}`);
        book.classList.add('fade-out');
        setTimeout(() => {
            book.style.display = 'none';
            book.classList.remove('fade-out');
        }, 90); // Atraso para permitir que a animação termine
    }

    // Atualiza o índice para o grupo anterior de 6 livros
    currentIndex -= 6;

    // Se o índice ficar negativo, volta para o último grupo
    if (currentIndex < 0) {
        currentIndex = 6;
    }

    // Mostra o grupo anterior de 6 livros com transição suave
    for (let i = currentIndex; i < currentIndex + 6; i++) {
        const book = document.querySelector(`.carrossel${i + 1}`);
        book.style.display = 'block';
        book.classList.add('fade-in');
        setTimeout(() => {
            book.classList.remove('fade-in');
        }, 90); // Atraso para permitir que a animação termine
    }
}

