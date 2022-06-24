import java.util.Scanner;

public class EstacoesAno
{
    // Atributos da classe
    private static final Scanner entradaDados = new Scanner( System.in );
    private static final String [] nomeEstacoes = { "Verao", "Outono", "Inverno", "Primavera" };
    private static final String [] nomeMeses = { "Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" };

    // Atributos do objeto
    private String mesInserido = "Janeiro";

    // Retorna o n�mero que representa o nome de um m�s
    public static int numeroMes ( String mes )
    {
        for ( int indice = 0; indice < nomeMeses.length; indice ++ )
        {
            if ( mes.equalsIgnoreCase( nomeMeses[ indice ] ) )
            {
                return indice;
            }
        }

        return 0;
    }

    // Pedir para o usu�rio inserir o nome de um m�s
    public void inserirMes ()
    {
        System.out.println( "Digite o nome do mes (Sem caracteres especiais) : " );
        this.mesInserido = entradaDados.next();
    }

    // Exibir a esta��o que o m�s inserido pertence
    public void exibirEstacao ()
    {
        String nomeEstacao = nomeEstacoes[ Math.floorDiv( numeroMes( this.mesInserido ), 3 ) ];
        System.out.println( "O mes " + this.mesInserido + " pertence a estacao " + nomeEstacao );
    }
}
