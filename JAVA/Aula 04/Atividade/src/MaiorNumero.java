import java.util.Arrays;
import java.util.Scanner;

public class MaiorNumero
{
    // Atributos da classe
    private static Scanner entradaDados = new Scanner( System.in );

    // Atributos do objeto
    private int [] arrayNumeros = new int [ 3 ];

    // Inserir valores que serão comparados
    public void inserirValor ()
    {
        System.out.println( "\nDigite tres valores para comparacao: " );

        for ( int index = 0; index < this.arrayNumeros.length; index ++ )
        {
            this.arrayNumeros[ index ] = MaiorNumero.entradaDados.nextInt();
        }
    }

    // Buscar o maior valor dentro do array
    public void compararValor ()
    {
        int maiorValor = 0;

        for ( int index = 0; index < this.arrayNumeros.length; index ++ )
        {
            if ( maiorValor < this.arrayNumeros[ index ] )
            {
                maiorValor = this.arrayNumeros[ index ];
            }
        }

        System.out.println( "O maior valor entre os numeros e: " + maiorValor );
    }
}
