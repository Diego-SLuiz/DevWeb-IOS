import java.util.Scanner;

public class Aluno
{
    // Atributos do objeto
    private static Scanner entrada = new Scanner( System.in );

    // Atributos do objeto
    private String nome = "Aluno";
    private float primeiraNota = 5;
    private float segundaNota = 5;

    // Inserir o nome do aluno
    public void inserirNome ()
    {
        System.out.println( "\nDigite o nome do aluno: " );
        this.nome = Aluno.entrada.nextLine();
    }

    // Inserir as duas notas do aluno
    public void inserirNotas ()
    {
        System.out.println( "\nDigite o valor da primeira e segunda nota do aluno " + this.nome + ": " );
        this.primeiraNota = Aluno.entrada.nextFloat();
        this.segundaNota = Aluno.entrada.nextFloat();
    }

    // Calcular a media das duas notas do aluno
    public void calcularMedia ()
    {
        float media = ( this.primeiraNota + this.segundaNota ) / 2;
        System.out.println( "A média de " + this.nome + " é: " + media );
    }
}
