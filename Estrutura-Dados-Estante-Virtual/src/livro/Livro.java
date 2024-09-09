package livro;

public class Livro {
	private String titulo;
	private String autor;
	private String isbn;
	private int anoPublicacao;
	private String categoria;
	private double preco;

	public Livro(String titulo, String autor, String isbn, int anoPublicacao, String categoria) {
		this.titulo = titulo;
		this.autor = autor;
		this.isbn = isbn;
		this.anoPublicacao = anoPublicacao;
		this.categoria = categoria;
	}

	public String getTitulo() {
		return titulo;
	}

	public String getAutor() {
		return autor;
	}

	public String getIsbn() {
		return isbn;
	}

	public int getAnoPublicacao() {
		return anoPublicacao;
	}

	public String getCategoria() {
		return categoria;
	}

	
	public double getPreco() {
		return preco;
	}
	
	@Override
	public String toString() {
		return "Livro {" +
	               "titulo='" + titulo + '\'' +
	                ", autor='" + autor + '\'' +
	                ", isbn='" + isbn + '\'' +
	                ", anoPublicacao=" + anoPublicacao +
	                ", categoria='" + categoria + '\'' +
	                ", preco='" + preco + '\''+
	                '}';		
	}
}
