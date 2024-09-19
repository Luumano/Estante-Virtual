package livro;

public class Main {
    public static void main(String[] args) {
        EstanteListaEncadeada estante = new EstanteListaEncadeada();

        // Criando alguns livros
        Livro livro1 = new Livro("1984", "George Orwell", "1234567890", 1949, "Ficção", 20.00);
        Livro livro2 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", "0987654321", 1954, "Fantasia", 45.00);
        Livro livro3 = new Livro("O Hobbit", "J.R.R. Tolkien", "1122334455", 1937, "Fantasia", 30.00);

        // Adicionando livros à estante (lista encadeada)
        estante.adicionarLivro(livro1);
        estante.adicionarLivro(livro2);
        estante.adicionarLivro(livro3);

        // Exibindo todos os livros na estante
        estante.exibirLivros();

        // Removendo um livro pelo ISBN
        estante.removerLivro("0987654321");

        // Exibindo todos os livros após a remoção
        estante.exibirLivros();

        // Verificando se a estante está vazia
        System.out.println("A estante está vazia? " + estante.estanteVazia());
    }
}

