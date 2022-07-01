import java.util.Scanner;

public class MatrizDez
{
    private static final Scanner entradaDados = new Scanner( System.in );

    private int [][] matrizNumeros = new int [ 4 ][ 4 ];

    public void exibirMatriz ()
    {
        for ( int x = 0; x < this.matrizNumeros.length; x ++ )
        {
            for ( int y = 0; y < this.matrizNumeros[ x ].length; y ++ )
            {
                int valorAtual = this.matrizNumeros[ x ][ y ];

                if ( y % this.matrizNumeros.length == 0 )
                {
                    System.out.print( "\n" );
                }

                System.out.print( valorAtual + " " );
            }
        }

        System.out.print( "\n" );
    }

    public void inserirValores ()
    {
        int tamanhoTotal = this.matrizNumeros.length * this.matrizNumeros[ 0 ].length;
        System.out.println( "Digite " + tamanhoTotal + " numeros: " );

        for ( int x = 0; x < this.matrizNumeros.length; x ++ )
        {
            for ( int y = 0; y < this.matrizNumeros[ x ].length; y ++ )
            {
                this.matrizNumeros[ x ][ y ] = entradaDados.nextInt();
            }
        }
    }

    public void maiorDez ()
    {
        int totalMaiorDez = 0;

        for ( int x = 0; x < this.matrizNumeros.length; x ++ )
        {
            for ( int y = 0; y < this.matrizNumeros[ x ].length; y ++ )
            {
                if ( this.matrizNumeros[ x ][ y ] > 10 )
                {
                    totalMaiorDez++;
                }
            }
        }

        System.out.println( "Valores maiores que 10: " + totalMaiorDez );
    }
}
