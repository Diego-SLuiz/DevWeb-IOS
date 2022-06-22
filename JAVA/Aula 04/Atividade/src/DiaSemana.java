import java.util.Scanner;

public class DiaSemana
{
    // Atributos da classe
    private static Scanner entradaDados = new Scanner( System.in );
    private static String [] nomeDias = {"Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sabado" };

    // Atributos do objeto
    private int valorDia = 0;

    // Inserir o valor do dia da semana que será comparado
    public void inserirDia ()
    {
        System.out.println( "\nDigite o numero do dia da semana: " );
        int valorDia = DiaSemana.entradaDados.nextInt();
        this.valorDia = valorDia < 1 ? 1 : valorDia > 7 ? 7 : valorDia;
    }

    // Consultar a qual dia da semana determinado número representa
    public void consultarDia ()
    {
        System.out.println( "O dia numero " + this.valorDia + " e: " + DiaSemana.nomeDias[ this.valorDia - 1 ] );
    }
}
