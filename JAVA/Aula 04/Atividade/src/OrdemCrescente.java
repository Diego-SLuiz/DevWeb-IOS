import java.util.Scanner;

public class OrdemCrescente
{
    // Atributos da classe
    private static Scanner entradaDados = new Scanner( System.in );

    // Atributos do objeto
    private float valorUm = 0;
    private float valorDois = 0;

    // Inserir os valores para comparação
    public void inserirValor ()
    {
        System.out.println( "\nDigite dois valores para comparacao:" );
        this.valorUm = OrdemCrescente.entradaDados.nextFloat();
        this.valorDois = OrdemCrescente.entradaDados.nextFloat();
    }

    // Apresentar os dois valores em ordem crescente
    public void compararOrdem ()
    {
        if ( this.valorUm == this.valorDois )
        {
            System.out.println( "Os dois valores sao iguais" );
        }

        else if ( this.valorUm < this.valorDois )
        {
            System.out.println( "A ordem dos valores e: " + this.valorUm + ", " + this.valorDois );
        }

        else
        {
            System.out.println( "A ordem dos valores e: " + this.valorDois + ", " + this.valorUm );
        }
    }
}
