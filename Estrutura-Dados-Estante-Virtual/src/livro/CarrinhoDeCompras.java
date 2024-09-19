package livro;

import java.util.ArrayList;
import java.util.List;

public class CarrinhoDeCompras {
	private List<Livro> livrosNoCarrinho;
	
	public CarrinhoDeCompras() {
		livrosNoCarrinho = new ArrayList<>();
	}
	
	public void adicionarLivro(Livro livro) {
		livrosNoCarrinho.add(livro);
		System.out.println(livro.getTitulo() + "Foi adicionado ao carrinho.");
	}
	
	public boolean removerLivro(String isbn) {
		for(Livro livro : livrosNoCarrinho) {
			if(livro.getIsbn().equals(isbn)) {
				livrosNoCarrinho.remove(livro);
				System.out.println(livro.getTitulo() + "Foi removido do carrinho.");
				return true;
			}
		}
		return false;
	}
	
	public void exibirCarrinho() {
		if(livrosNoCarrinho.isEmpty()) {
			System.out.println("O carrinho está vazio.");
		} else {
			System.out.println("Livros no carrinho:");
			for(Livro livro : livrosNoCarrinho) {
				System.out.println(livro);
			}
		}
	}
	
	public double calcularValorTotal() {
		double total = 0;
		for(Livro livro : livrosNoCarrinho) {
			total += livro.getPreco();
		}
		return total;
	}
	
	public void finalizarCompra() {
		if(!livrosNoCarrinho.isEmpty()) {
			System.out.println("Compra finalizada. Valor total: R$ " + calcularValorTotal());
			livrosNoCarrinho.clear();
		} else {
			System.out.println("O carrinho está vazio. Adicione livros antes de finalizar a compra.");
		}
	}
}
