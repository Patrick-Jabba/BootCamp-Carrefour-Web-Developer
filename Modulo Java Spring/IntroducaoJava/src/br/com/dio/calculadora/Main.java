package br.com.dio.calculadora;

public class Main {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		
		
	
		//Calculadora
		System.out.println("Exercicio calculadora: ");
		Calculator.soma(3, 6);
		Calculator.subtracao(9, 1.8);
		Calculator.multiplicacao(7, 8);
		Calculator.divisao(5, 2.5);
		
		// Mensagem
		System.out.println("Exercicio Mensagem");
		Mensagem.obterMensagem(9);
		Mensagem.obterMensagem(14);
		Mensagem.obterMensagem(19);
		
		//Emprestimo
		System.out.println("Exercicio Emprestimo");
		Emprestimo.calcular(1000, Emprestimo.getDuasParcelas());
		Emprestimo.calcular(1000, Emprestimo.getTresParcelas());
		Emprestimo.calcular(1000, 5);
		
		
		
		
	}

}
