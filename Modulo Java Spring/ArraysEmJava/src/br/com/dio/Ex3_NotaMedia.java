package br.com.dio;

import java.util.Scanner;

public class Ex3_NotaMedia {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);

		int numero;
		int count = 0;
		int maior = 0;
		int soma = 0;
		int media;

		do {
			System.out.println("Numero: ");
			numero = scan.nextInt();
			soma += numero;
			if (numero > maior)
				maior = numero;
			count++;

		} while (count < 5);
		media = soma / count;
		System.out.println("Maior: " + maior);
		System.out.println("Media: " + media);
	}
}
