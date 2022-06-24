import java.util.Scanner;

public class CalcularMedia
{
    private static final Scanner entradaDados = new Scanner( System.in );
    private int [] listaNotas = new int [ 4 ];

    public void inserirNotas ( int qunatidadeNotas )
    {
        System.out.println( "\nDigite " + qunatidadeNotas + " notas: " );
        int [] notasInseridas = new int [ qunatidadeNotas ];

        for ( int indice = 0; indice < qunatidadeNotas; indice ++ )
        {
            notasInseridas[ indice ] = entradaDados.nextInt();
        }

        this.listaNotas = notasInseridas;
    }

    public void exibirMedia ()
    {
        float notaTotal = 0;

        for ( int indice = 0; indice < this.listaNotas.length; indice ++ )
        {
            notaTotal += this.listaNotas[ indice ];
        }

        System.out.println( "\nA media das notas e: " + notaTotal / this.listaNotas.length );
    }
}
