import java.util.Scanner;

public class MediaValores
{
    private static final Scanner entradaDados = new Scanner( System.in );

    private float [] valoresInseridos = new float [ 10 ];

    public void inserirValores ()
    {
        System.out.println( "Insira 10 valores: " );

        for ( int indice = 0; indice < 10; indice ++ )
        {
            this.valoresInseridos[ indice ] = entradaDados.nextFloat();
        }
    }

    public void exibirComparacoes ()
    {
        int indice;
        float valorTotal = 0;
        float menorValor = this.valoresInseridos[ 0 ];
        float maiorValor = this.valoresInseridos[ 0 ];

        for ( indice = 0; indice < this.valoresInseridos.length; indice ++ )
        {
            float valorAtual = this.valoresInseridos[ indice ];
            valorTotal += valorAtual;
            maiorValor = Math.max( valorAtual, maiorValor );
            menorValor = Math.min( valorAtual, menorValor );
        }

        System.out.println( "A média dos valores é: " + valorTotal / indice );
        System.out.println( "O maior valor é: " + maiorValor );
        System.out.println( "O menor valor é: " + menorValor );
    }
}
