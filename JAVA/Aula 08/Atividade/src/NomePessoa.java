import java.util.Scanner;

public class NomePessoa
{
    private static final Scanner entradaDados = new Scanner( System.in );

    private String [] nomesInseridos = new String [ 5 ];

    public void inserirNomes ()
    {
        System.out.println( "Insira o nome de 5 pessoas: " );

        for ( int indice = 0; indice < 5; indice ++ )
        {
            this.nomesInseridos[ indice ] = entradaDados.nextLine();
        }
    }

    public void exibirNomes ()
    {
        System.out.print( "\n" );

        for ( int indice = this.nomesInseridos.length - 1; indice >= 0; indice -- )
        {
            System.out.println( this.nomesInseridos[ indice ] );
        }
    }
}
