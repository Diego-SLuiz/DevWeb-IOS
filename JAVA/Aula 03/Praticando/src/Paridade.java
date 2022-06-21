import java.util.Scanner;

public class Paridade
{
    // Atributos da classe
    private static Scanner entrada = new Scanner( System.in );

    // Atributos do objeto
    private int valor = 0;

    // Inserir o valor que sera trabalhado
    public void inserirValor ()
    {
        System.out.println( "Digite o valor do numero para verificar: " );
        this.valor = Paridade.entrada.nextInt();
    }

    // Verificar se o número é ímpar ou par
    public void verificarParidade ()
    {
        boolean par = ( this.valor % 2 ) == 0;
    }
}
