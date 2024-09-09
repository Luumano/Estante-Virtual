package livro;

import java.util.List;

public interface IEstante {
	void adicionarLivro(Livro livro);
	boolean removerLivro(String isbn);
	List<Livro> listarLivrosPorCategoria(String categoria);
	List<Livro> listarTodosLivros();
	Livro buscarLivroPorTitulo(String titulo);
	void exibirLivrosPorCategoria(String categoria);
	int contarLivrosPorCategoria(String categoria);
	void ordenarLivrosPorTitulo();
	void ordenarLivrosPorAno();
}
