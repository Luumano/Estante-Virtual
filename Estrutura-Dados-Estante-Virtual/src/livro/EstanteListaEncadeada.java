package livro;

public class EstanteListaEncadeada {
	private No primeiro;
	
	public EstanteListaEncadeada() {
		this.primeiro = null;
	}
	
	//Adiciona um livro à lista encadeada (no final)
	public void adicionarLivro(Livro livro) {
		No novoNo = new No(livro);
		if(primeiro == null) {
			primeiro = novoNo;
		} else {
			No atual = primeiro;
			while(atual.getProximo() != null) {
				atual = atual.getProximo();
			}
			atual.setProximo(novoNo);
		}
		System.out.println(livro.getTitulo() + "foi adicionado à estante.");
	}
	
	//Remove um livro da lista encadeada pelo ISBN
	public boolean removerLivro(String isbn) {
		if(primeiro == null) {
			System.out.println("A estante está vazia.");
			return false;
		}
		if(primeiro.getLivro().getIsbn().equals(isbn)) {
			System.out.println(primeiro.getLivro().getTitulo() + " foi removido da estante.");
			primeiro = primeiro.getProximo();
			return true;
		}
		
		No atual = primeiro;
		while(atual.getProximo() != null && !atual.getProximo().getLivro().getIsbn().equals(isbn)){
			atual = atual.getProximo();
		}
		
		if(atual.getProximo() != null) {
			System.out.println(atual.getProximo().getLivro().getTitulo() + " foi removido da estante.");
			atual.setProximo(atual.getProximo().getProximo());
			return true;
		}
		System.out.println("Livro com ISBN " + isbn + " não encotrado.");
		return false;
	}	
	
	//Exibe todos os livros na estante
	public void exibirLivros() {
		if(primeiro == null) {
			System.out.println("A estante está vazia.");
			return;
		}
		No atual = primeiro;
		System.out.println("Livros na estante:");
		while(atual != null) {
			System.out.println(atual.getLivro());
			atual = atual.getProximo();
		}
	}
	
	//Verificar se a estante está vazia
	public boolean estanteVazia() {
		return primeiro == null;
	}
}
