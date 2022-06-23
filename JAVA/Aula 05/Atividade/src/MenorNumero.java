import java.util.Scanner;

public class MenorNumero
{
    // Atributos da classe
    private static Scanner entradaDados = new Scanner( System.in );

    // Atributos do objeto
    private int [] arrayNumeros = new int [ 10 ];

    // Inserir lista de valores que será usada para buscar o menor entre eles
    public void inserirValores ( int quantidadeValores )
    {
        System.out.println( "Digite " + quantidadeValores + " valores: " );

        int [] arrayNumeros = new int [ 10 ];

        for ( int indice = 0; indice < quantidadeValores; indice ++ )
        {
            arrayNumeros[ indice ] = entradaDados.nextInt();
        }
    }

    // Buscar e exibir o menor número dentre o array de números
    public void buscarMenor ()
    {
        int menorNumero = this.arrayNumeros[ 0 ];

        for ( int indice = 0; indice < this.arrayNumeros.length; indice ++ )
        {
            if ( this.arrayNumeros[ indice ] < menorNumero )
            {
                menorNumero = this.arrayNumeros[ indice ];
            }
        }

        System.out.println( "O menor numero e: " + menorNumero );
    }
}
