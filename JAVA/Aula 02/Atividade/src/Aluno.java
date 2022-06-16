import java.util.Scanner;

public class Aluno
{
    // Atributos da classe
    private static Scanner entradaValores = new Scanner( System.in );

    // Atributos do objeto
    private String nome = "Estudante";
    private int [] notas = { 5, 5, 5, 5 };

    // Método construtor
    public Aluno(String nome )
    {
        this.nome = nome;
    }

    // Inserir notas do aluno
    public void inserirNotas ()
    {
        System.out.println( "Numero de notas que " + this.nome + " possui");
        int quantidade = this.entradaValores.nextInt();
        int [] notas = new int [ quantidade ];

        for ( int indice = 0; indice < quantidade; indice ++ )
        {
            System.out.println( "Digite a " + ( indice + 1 ) + " nota de " + this.nome );
            notas[ indice ] = this.entradaValores.nextInt();
        }

        this.notas = notas;
    }

    // Calcular média das notas do aluno
    public void mediaNotas ()
    {
        int indice;
        float total = 0;

        for ( indice = 0; indice < this.notas.length; indice ++ )
        {
            total += this.notas[ indice ];
        }

        System.out.println( "A media das notas de " + this.nome + " e: " + total / indice );
    }
}
