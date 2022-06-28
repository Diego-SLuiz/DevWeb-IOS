import java.util.Scanner;
import java.util.Random;

public class SorteioNumero
{
    private static final Scanner entradaDados = new Scanner( System.in );
    private static final Random valorAleatorio = new Random();

    private int [] valoresSorteados = new int [ 10 ];

    public void sortearValores ( int quantidadeValores )
    {
        for ( int indice = 0; indice < quantidadeValores; indice ++ )
        {
            this.valoresSorteados[ indice ] = valorAleatorio.nextInt( 10 ) + 1;
        }
    }

    public void exibirMenor ()
    {
        System.out.println( "Valores sorteados: " );
        int menorValor = this.valoresSorteados[ 0 ];

        for ( int indice = 0; indice < this.valoresSorteados.length; indice ++ )
        {
            int valorAtual = this.valoresSorteados[ indice ];
            System.out.print(  valorAtual + ", " );
            menorValor = Math.min( valorAtual, menorValor );
        }

        System.out.println( "\nO menor valor é: " + menorValor );
    }
}
