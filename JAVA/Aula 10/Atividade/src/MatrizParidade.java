import java.util.Random;

public class MatrizParidade
{
    private static final Random valorAleatorio = new Random();
    private static int limiteLinha = 50;

    private int [][] matrizNumeros = new int [ 100 ][ 100 ];

    public void exibirMatriz ()
    {
        for ( int x = 0; x < this.matrizNumeros.length; x ++ )
        {
            for ( int y = 0; y < this.matrizNumeros[ x ].length; y ++ )
            {
                int valorAtual = this.matrizNumeros[ x ][ y ];

                if ( y % limiteLinha == 0 )
                {
                    System.out.print( "\n" );
                }

                System.out.print( valorAtual + " " );
            }
        }
    }

    public void inserirValores ()
    {
        for ( int x = 0; x < this.matrizNumeros.length; x ++ )
        {
            for ( int y = 0; y < this.matrizNumeros[ x ].length; y ++ )
            {
                this.matrizNumeros[ x ][ y ] = valorAleatorio.nextInt( 100 ) + 1;
            }
        }
    }

    public void verificarParidade ()
    {
        for ( int x = 0; x < this.matrizNumeros.length; x ++ )
        {
            for ( int y = 0; y < this.matrizNumeros[ x ].length; y ++ )
            {
                int valorAtual = this.matrizNumeros[ x ][ y ];

                if ( valorAtual % 2 == 0 )
                {
                    this.matrizNumeros[ x ][ y ] = 1;
                }
                else
                {
                    this.matrizNumeros[ x ][ y ] = -1;
                }
            }
        }
    }
}
