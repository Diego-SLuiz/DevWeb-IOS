import java.util.Scanner;

public class TabuadaValor
{
    // Atributos da classe
    private static Scanner entradaDados = new Scanner( System.in );

    // Atributos do objeto
    private int numeroBase = 1;

    // Inserir valor do número que terá a tabuada calculada
    public void inserirValores ()
    {
        System.out.println( "Digite um numero para calcular a tabuada: " );
        this.numeroBase = entradaDados.nextInt();
    }

    // Calcular os valores da tabuada para o número inserido
    public void calcularTabuada ( int numeroLinhas )
    {
        System.out.println( "A tabuada de " + this.numeroBase + " e: " );

        int indice = 1;
        while ( indice <= numeroLinhas )
        {
            System.out.println( indice + " X " + this.numeroBase + " = " + ( indice * this.numeroBase ) );
            indice ++;
        }
    }
}
