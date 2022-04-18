package br.com.dio;

import java.util.Scanner;

public class Ex4_ParImpar {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);

		int numero;
		int quantNumeros;
		int quantPares = 0;
		int quantImpares = 0;

		int count = 0;
		
		System.out.println("Quantidade numeros a serem inseridos: ");
		quantNumeros = scan.nextInt();
		
		
		do {
			System.out.println("Numero: ");
			numero = scan.nextInt();

			if (numero % 2 == 0)
				quantPares++;
			else
				quantImpares++;

			count++;

		} while (count < quantNumeros);
		System.out.println("Quantidade de Pares: " + quantPares);
		System.out.println("Quantidade de Impares: " + quantImpares);
	}

}
