package br.com.dio;

public class Main {

	public static void main(String[] args) {
		// Retornos
		
		System.out.println("Exercicios retornos");
		
		double areaQuadrado = Quadrilatero.area(3);
		System.out.println(areaQuadrado);

		double areaRetangulo = Quadrilatero.area(5d, 5d);
		System.out.println(areaRetangulo);
		
		double areaTrapezio = Quadrilatero.area(7, 8, 9);
		System.out.println(areaTrapezio);
		
		float areaLosango = Quadrilatero.area(5f, 5f);
		System.out.println(areaLosango);
		
		

	}

}
