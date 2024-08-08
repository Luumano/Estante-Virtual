
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

 document.addEventListener('DOMContentLoaded', (event) => {
    // Função para obter o parâmetro da URL
    function getParameterByName(name, url = window.location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
        const results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    // Pega o ID do livro da URL
    const bookId = getParameterByName('id');
    console.log("Book ID from URL:", bookId);

    // Simula uma função de busca de detalhes do livro
    function getBookDetails(bookId) {
        const books = [
            {
                id: 1,
                title: 'A Hipótese do Amor',
                author: 'Ali Hazelwood',
                description: 'Uma breve descrição do livro A Hipótese do Amor...',
                price: 6.00,
                image: 'img/hipotese do amor.png'
            },
            {
                id: 2,
                title: 'Tempestade de Guerra',
                author: 'Victoria Aveyard',
                description: 'Descrição do Livro Exemplo 2...',
                price: 15.00,
                image: 'img/Rectangle 15.jpg'
            }
            // Adicione mais livros conforme necessário
        ];

        return books.find(book => book.id == bookId);
    }

    // Pega os detalhes do livro
    const book = getBookDetails(bookId);
    console.log("Book Details:", book);

    if (book) {
        document.getElementById('bookImage').src = book.image;
        document.getElementById('bookImage').alt = `Imagem do livro ${book.title}`;
        document.getElementById('bookTitle').textContent = book.title;
        document.getElementById('bookAuthor').textContent = `Autor: ${book.author}`;
        document.getElementById('bookDescription').textContent = book.description;
        document.getElementById('bookPrice').textContent = `Preço: R$ ${book.price.toFixed(2)}`;
    } else {
        document.querySelector('.book-details').innerHTML = '<p>Livro não encontrado.</p>';
    }

    // Adicionar ao carrinho 
    document.getElementById('addToCartButton').addEventListener('click', () => {
        alert('Livro adicionado ao carrinho!');
    });
});
