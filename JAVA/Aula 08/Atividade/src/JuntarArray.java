import java.util.Scanner;

public class JuntarArray
{
    private static final Scanner entradaDados =  new Scanner( System.in );

    private int [] valoresInseridosUm = new int [ 4 ];
    private int [] valoresInseridosDois = new int [ 7 ];

    public void inserirValores ()
    {
        System.out.println( "Insira " + this.valoresInseridosUm.length + " valores para o primeiro array: " );
        for ( int indice = 0; indice < this.valoresInseridosUm.length; indice ++ )
        {
            this.valoresInseridosUm[ indice ] = entradaDados.nextInt();
        }

        System.out.println( "Insira " + this.valoresInseridosDois.length  + " valores para o segudno array: " );
        for ( int indice = 0; indice < this.valoresInseridosDois.length; indice ++ )
        {
            this.valoresInseridosDois[ indice ] = entradaDados.nextInt();
        }
    }

    public void concatenarValores ()
    {
        int tamanhoTotal = this.valoresInseridosUm.length + this.valoresInseridosDois.length;
        int [] arrayResultado = new int [ tamanhoTotal ];

        for ( int indice = 0; indice < tamanhoTotal; indice ++ )
        {
            if ( indice < this.valoresInseridosUm.length )
            {
                arrayResultado[ indice ] = this.valoresInseridosUm[ indice ];
            }
            else
            {
                arrayResultado[ indice ] = this.valoresInseridosDois[ indice - this.valoresInseridosUm.length ];
            }
        }

        System.out.print( "A junção dos arrays é: " );
        for ( int indice = 0; indice < arrayResultado.length; indice ++ )
        {
            System.out.print( arrayResultado[ indice ] + ", " );
        }
    }
}
