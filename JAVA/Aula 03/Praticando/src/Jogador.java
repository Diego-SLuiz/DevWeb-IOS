import java.util.Scanner;

public class Jogador
{
    // Atributos da classe
    private static int pontosProximaFase = 1000;
    private static Scanner entrada = new Scanner( System.in );

    // Atributos do objeto
    private String nome = "Jogador";
    private int pontos = 0;

    // Inserir o nome do jogador
    public void inserirNome ()
    {
        System.out.println( "\nDigite o nome do jogador: " );
        this.nome = Jogador.entrada.nextLine();
    }

    // Inserir os pontos para o jogador
    public void inserirPontos ()
    {
        System.out.println( "\nDigite o número de pontos que o jogador " + this.nome + " possui: " );
        this.pontos = Jogador.entrada.nextInt();
    }

    // Verificar se o jogador passou de fase
    public void verificarPontos ()
    {
        if ( this.pontos > Jogador.pontosProximaFase )
        {
            System.out.println( this.nome + " passou de fase com " + this.pontos + " pontos." );
            return;
        }

        System.out.println( this.nome + " não passou de fase. Pontos necessários: " + Jogador.pontosProximaFase );
    }
}
