public class Main
{
    public static void main ( String [] args )
    {
        // Calcular média do aluno
        Aluno novoAluno = new Aluno();
        novoAluno.inserirNome();
        novoAluno.inserirNotas();
        novoAluno.calcularMedia();

        // Verificar pontos do jogador
        Jogador novoJogador = new Jogador();
        novoJogador.inserirNome();
        novoJogador.inserirPontos();
        novoJogador.verificarPontos();

        // Verificar a paridade de um número
        Paridade novoNumero = new Paridade();
        novoNumero.inserirValor();
        novoNumero.verificarParidade();
    }
}
