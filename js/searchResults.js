document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query').toLowerCase();
    document.getElementById('searchQuery').textContent = `Você pesquisou por: ${query}`;

    console.log('Iniciando busca por livros...');
    fetch('data/books.json')  // Ajuste o caminho se necessário
        .then(response => {
            console.log('Resposta recebida:', response);
            if (!response.ok) {
                throw new Error(`Erro na resposta da rede: ${response.statusText}`);
            }
            return response.json();
        })
        .then(books => {
            console.log('Livros carregados:', books);
            const resultsContainer = document.getElementById('results');
            const filteredBooks = books.filter(book => 
                book.title.toLowerCase().includes(query) ||
                book.author.toLowerCase().includes(query)
            );

            console.log('Livros filtrados:', filteredBooks);

            if (filteredBooks.length > 0) {
                filteredBooks.forEach(book => {
                    const bookElement = document.createElement('div');
                    bookElement.className = 'book-card';
                    bookElement.innerHTML = `
                        <div class="price-tag">
                            <div class="price-background"></div>
                            <div class="price-text">A partir de R$ ${book.price}</div>
                        </div>
                        <div class="book-title">${book.title}</div>
                        <div class="book-author">${book.author}</div>
                        <img class="book-image" src="${book.image}" />
                    `;
                    resultsContainer.appendChild(bookElement);
                });
            } else {
                resultsContainer.textContent = 'Nenhum livro encontrado.';
            }
        })
        .catch(error => {
            console.error('Erro ao carregar os dados dos livros:', error);
            document.getElementById('results').textContent = 'Erro ao carregar os dados dos livros.';
        });
});
