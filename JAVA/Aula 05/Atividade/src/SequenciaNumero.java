import java.util.Scanner;

public class SequenciaNumero
{
    // Atributos da classe
    private static Scanner entradaDados = new Scanner( System.in );

    // Atributos do objeto
    private int numeroInicial = 0;
    private int numeroFinal = 0;

    // Inserir valores iniciais e finais
    public void inserirValores ()
    {
        System.out.println( "Insira um valor inicial e um valor final: " );

        this.numeroInicial = entradaDados.nextInt();
        this.numeroFinal = entradaDados.nextInt();
    }

    public void exibirContagem ( int quebrarCada )
    {
        System.out.println( "Contagem de " + this.numeroInicial + " a " + this.numeroFinal );

        for ( int indice = this.numeroInicial + 1; indice <= this.numeroFinal; indice ++ )
        {
            System.out.print( indice + " " );

            if ( indice % quebrarCada == 0 )
            {
                System.out.print( "\n" );
            }
        }
    }
}
