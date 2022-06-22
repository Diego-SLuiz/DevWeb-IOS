import java.util.Scanner;
import java.util.Random;

public class JogoAdivinha
{
    // Atributos da classe
    private static Scanner entradaDados = new Scanner( System.in );
    private static Random valorAleatorio = new Random();
    private static int nivelDificuldade = 1;
    private static int valorCorreto = 1;

    // Atributos do objeto
    private String nomeJogador = "Jogador";
    private int valorPalpite = 0;

    // Método construtor da classe
    public JogoAdivinha ()
    {
        this.modificarCorreto();
    }

    // Inserir o nome do jogador
    public void inserirNome ()
    {
        System.out.println( "\nDigite o nome do jogador: " );
        this.nomeJogador = JogoAdivinha.entradaDados.nextLine();
    }

    // Inserir um valor de palpite
    public void inserirPalpite ()
    {
        int limite = JogoAdivinha.nivelDificuldade * 10
        System.out.println( "\n" + this.nomeJogador + ", digite um valor entre 0 e " + limite );
        this.valorPalpite = JogoAdivinha.entradaDados.nextInt();
        this.checarPalpite();
    }

    // Checar palpite do jogador
    public void checarPalpite ()
    {
        if ( this.valorPalpite * 0.25 < JogoAdivinha.valorCorreto )
        {
            System.out.println( "O palpite " + this.valorPalpite + " esta muito perto! O valor é maior" );
        }

        else if ( this.valorPalpite * 0.50 < JogoAdivinha.valorCorreto )
        {
            System.out.println( "O palpite " + this.valorPalpite + " esta perto! O valor é maior" );
        }

        else if ( this.valorPalpite * 0.75 < JogoAdivinha.valorCorreto )
        {
            System.out.println( "O palpite " + this.valorPalpite + " esta longe! O valor é maior" );
        }

        else
        {
            System.out.println( "O palpite " + this.valorPalpite + " esta muito longe! O valor é maior" );
        }

        inserirPalpite();
    }

    // Modificar o valor correto
    public void modificarCorreto ()
    {
        JogoAdivinha.valorCorreto = JogoAdivinha.valorAleatorio.nextInt( 10 * JogoAdivinha.nivelDificuldade ) + 1;
    }
}
