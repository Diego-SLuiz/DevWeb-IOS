import java.util.Scanner;

public class ContarParidade
{
    // Atributos da classe
    private static Scanner entradaDados = new Scanner( System.in );

    // Atributos do objeto
    private int [] valoresInseridos;

    // Inserir valores que ser�o comparados com par ou �mpar
    public void inserirValores ( int quantidadeValores )
    {
        System.out.println( "Digite " + quantidadeValores + " valores: ");

        int [] novosValores = new int [ quantidadeValores ];

        for ( int indice = 0; indice < quantidadeValores; indice ++ )
        {
            novosValores[ indice ] = entradaDados.nextInt();
        }

        this.valoresInseridos = novosValores;
    }

    // Comparar e exibir o n�mero de ocorr�ncias de pares e �mpares
    public void compararNumeros ()
    {
        int contadorPar = 0;
        int contadorImpar = 0;

        for ( int indice = 0; indice < this.valoresInseridos.length; indice ++ )
        {
            if ( this.valoresInseridos[ indice ] % 2 == 0 )
            {
                contadorPar ++;
            }
            else
            {
                contadorImpar ++;
            }
        }

        System.out.println( "Dentre os numeros, ha " + contadorPar + " numeros pares e " + contadorImpar + " numeros impares" );
    }
}
