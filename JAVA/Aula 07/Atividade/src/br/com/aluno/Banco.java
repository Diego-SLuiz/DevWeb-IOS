package br.com.aluno;
import java.util.Scanner;

public class Banco
{
    // Atributos da classe
    private static final Scanner entradaDados = new Scanner( System.in );
    private static final String [] tiposContasDisponiveis = { "Corrente", "Poupança", "Estudante" };
    private static final String nomeBanco = "BancoTop";

    // Atributos do objeto
    private String tipoConta = "Corrente";
    private String nomeUsuario = "Usuario";

    // Método principal que irá executar o código
    public static void main ( String [] args )
    {
        Banco meuBanco = new Banco();
        meuBanco.inserirNomeUsuario();
        System.out.println( "Você está no banco " + nomeBanco + "!" );

        meuBanco.inserirTipoConta();
        System.out.println( "Você está no banco " + nomeBanco + "!" );

        System.out.println( "Obrigado pela preferência!" );
    }

    // Método construtor do objeto Banco
    public Banco ()
    {
        System.out.println( "Bem-vindo(a) ao banco " + nomeBanco + "!");
    }

    // Pedir para o usuário inserir um nome para a conta
    public void inserirNomeUsuario ()
    {
        System.out.println( "Insira o seu nome de usuário: " );
        this.nomeUsuario = entradaDados.nextLine();

        System.out.println( "Seu nome de usuário é " + this.nomeUsuario + ". Deseja confirmar? (sim/não)" );
        String respostaUsuario = entradaDados.nextLine();

        if ( respostaUsuario.equalsIgnoreCase( "não" ) )
        {
            this.inserirNomeUsuario();
        }
    }

    // Pedir para o usuário inserir um tipo de conta
    public void inserirTipoConta ()
    {
        System.out.println( this.nomeUsuario +  ", digite o numero da conta que deseja: " );

        for ( int indice = 0; indice < tiposContasDisponiveis.length; indice ++ )
        {
            System.out.println( indice + 1 + ") " + tiposContasDisponiveis[ indice ] );
        }

        int numeroSelecionado = entradaDados.nextInt();
        this.tipoConta = tiposContasDisponiveis[ numeroSelecionado - 1 ];

        System.out.println( "Seu tipo de conta será " + this.tipoConta + ". Deseja confirmar? (sim/não)" );
        String respostaUsuario = entradaDados.next();

        if ( respostaUsuario.equalsIgnoreCase( "não" ) )
        {
            this.inserirTipoConta();
        }
    }
}
