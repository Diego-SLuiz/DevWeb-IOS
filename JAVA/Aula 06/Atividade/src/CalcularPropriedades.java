import java.util.Scanner;

public class CalcularPropriedades
{
    private static final Scanner entradaDados = new Scanner( System.in );
    private static int numeroLinhas = 10;
    private int valorBase = 0;

    public void inserirValor ()
    {
        System.out.println( "\nDigite um numero: " );
        this.valorBase = entradaDados.nextInt();
    }

    public void exibirTabuada ()
    {
        System.out.println( "\nTabuada de " + this.valorBase );

        for ( int linha = 1; linha <= numeroLinhas; linha ++ )
        {
            System.out.println( this.valorBase + " X " + linha + " = " + this.valorBase * linha );
        }
    }

    public void exibirRaiz ()
    {
        System.out.print( "\nRaiz quadrada de " + this.valorBase + ": " + Math.sqrt( this.valorBase ) );
    }

    public void exibirParidade ()
    {
        boolean valorPar = this.valorBase % 2 == 0;
        System.out.println( "\nO numero " + this.valorBase + " e: " + ( valorPar ? "par": "impar" ) );
    }
}
