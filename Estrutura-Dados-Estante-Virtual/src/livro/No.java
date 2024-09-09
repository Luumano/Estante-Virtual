package livro;

class No {
	private Livro livro;
	private No proximo;
	
	public No(Livro livro) {
		this.livro = livro;
		this.proximo = null;
	}

	public No getProximo() {
		return proximo;
	}

	public void setProximo(No proximo) {
		this.proximo = proximo;
	}

	public Livro getLivro() {
		return livro;
	}
	
}
