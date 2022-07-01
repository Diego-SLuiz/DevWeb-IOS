public class MatrizIdentidade
{
    private int [][] matrizNumeros = new int [ 5 ][ 5 ];

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
    }

    public void inserirValores ()
    {
        for ( int x = 0; x < this.matrizNumeros.length; x ++ )
        {
            for ( int y = 0; y < this.matrizNumeros[ x ].length; y ++ )
            {
                if ( x == y )
                {
                    this.matrizNumeros[ x ][ y ] = 1;
                }
                else
                {
                    this.matrizNumeros[ x ][ y ] = 0;
                }
            }
        }
    }
}
