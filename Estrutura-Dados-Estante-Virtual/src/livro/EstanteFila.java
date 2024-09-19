package livro;

import java.util.LinkedList;
import java.util.Queue;

public class EstanteFila {
	private Queue<Livro> filaDeLivros;
	
	public EstanteFila() {
		this.filaDeLivros = new LinkedList<>();
	}
	
	//Adiciona um livro à fila (estante)
	public void adicionarLivro(Livro livro) {
		filaDeLivros.add(livro);
		System.out.println(livro.getTitulo() + " foi adicionado à estante.");
	}
	
	//Remover o livro mais antigo
	public Livro removerLivro() {
		if(filaDeLivros.isEmpty()) {
			System.out.println("A estante está vazia");
			return null;
		}
		Livro livroRemovido = filaDeLivros.remove();
		System.out.println(livroRemovido.getTitulo() + " foi removido da estante.");
		return livroRemovido;
	}
	
	//Exibe o próximo livro a ser removido(sem remover)
	public Livro verProximoLivro() {
		if(filaDeLivros.isEmpty()) {
			System.out.println("A estante está vazia.");
			return null;
		}
		Livro proximoLivro = filaDeLivros.peek();
		System.out.println("O próximo livro a ser removido é: " + proximoLivro.getTitulo());
		return proximoLivro;
	}
	
	//Exibe todos os livros na estante
	public void exibirTodosLivros() {
		if(filaDeLivros.isEmpty()) {
			System.out.println("A estante está vazia.");
		} else {
			System.out.println("Livros na estante: ");
			for(Livro livro : filaDeLivros) {
				System.out.println(livro);
			}
		}
	}
	
	//Verifica se a estante está vazia
	public boolean estanteVazia() {
		return filaDeLivros.isEmpty();
	}
}
