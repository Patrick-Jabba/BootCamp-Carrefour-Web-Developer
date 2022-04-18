package br.com.dio;

import java.util.Scanner;

public class Ex5_Tabuada {

	public static void main(String[] args) {
		Scanner scan = new Scanner (System.in);
		
			
		System.out.println("Qual tabuada gostaria de ver: ");
		int tabuada = scan.nextInt();
		
		for (int i = 1; i <= 10; i++) {
			System.out.println(tabuada + " X " + i + " = " + (tabuada * i));
			
		}
				
				
	}

}
