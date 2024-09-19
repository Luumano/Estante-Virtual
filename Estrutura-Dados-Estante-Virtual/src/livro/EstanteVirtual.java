package livro;

import java.util.*;
import java.util.List;

public class EstanteVirtual implements IEstante {
	private Map<String, List<Livro>> estante;

	public EstanteVirtual() {
		estante = new HashMap<>();
	}
	
	@Override
	public void adicionarLivro(Livro livro) {
		estante.putIfAbsent(livro.getCategoria(), new ArrayList<>());
		estante.get(livro.getCategoria()).add(livro);
	}

	@Override
	public boolean removerLivro(String isbn) {
		for(List<Livro> livros : estante.values()) {
			for(Livro livro : livros) {
				if(livro.getIsbn().equals(isbn)) {
					livros.remove(livro);
					return true;
				}
			}
		}
		return false;
	}

	@Override
	public List<Livro> listarLivrosPorCategoria(String categoria) {
		return estante.getOrDefault(categoria, new ArrayList<>());
	}

	@Override
	public List<Livro> listarTodosLivros() {
		List<Livro> todosLivros = new ArrayList<>();
		for (List<Livro> livros : estante.values()) {
			todosLivros.addAll(livros);
		}
		return todosLivros;
	}

	@Override
	public Livro buscarLivroPorTitulo(String titulo) {
		for(List<Livro> livros : estante.values()) {
			for(Livro livro : livros) {
				if(livro.getTitulo().equalsIgnoreCase(titulo)) {
					return livro;
				}
			}
		}
		return null;
	}

	@Override
	public void exibirLivrosPorCategoria(String categoria) {
		List<Livro> livros = listarLivrosPorCategoria(categoria);
		if(!livros.isEmpty()) {
			System.out.println("Livros na Categoria " + categoria + ":");
			for(Livro livro : livros) {
				System.out.println(livro);
			}
		} else {
			System.out.println("Nenhum livro encontrado na categoria " + categoria);
		}
	}

	@Override
	public int contarLivrosPorCategoria(String categoria) {
		return listarLivrosPorCategoria(categoria).size();
	}

	@Override
	public void ordenarLivrosPorTitulo() {
		List<Livro> todosLivros = listarTodosLivros();
		todosLivros.sort(Comparator.comparing(Livro::getTitulo));
		estante.clear();
		for(Livro livro : todosLivros) {
			adicionarLivro(livro);
		}
	}

	@Override
	public void ordenarLivrosPorAno() {
		List<Livro> todosLivros = listarTodosLivros();
		todosLivros.sort(Comparator.comparingInt(Livro::getAnoPublicacao));
		estante.clear();
		for(Livro livro : todosLivros) {
			adicionarLivro(livro);
		}
	}

}
