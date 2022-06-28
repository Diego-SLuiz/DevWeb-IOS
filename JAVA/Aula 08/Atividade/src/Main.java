public class Main
{
    public static void main ( String [] args )
    {
        System.out.println( "\n1) Média, máxima e mínima dos valores" );
        MediaValores novoValores = new MediaValores();
        novoValores.inserirValores();
        novoValores.exibirComparacoes();

        System.out.println( "\n2) Exibir nomes em ordem reversa" );
        NomePessoa novoNome = new NomePessoa();
        novoNome.inserirNomes();
        novoNome.exibirNomes();

        System.out.println( "\n3) Sortear 10 números e encontrar o menor" );
        SorteioNumero novoSorteio = new SorteioNumero();
        novoSorteio.sortearValores( 10 );
        novoSorteio.exibirMenor();

        System.out.println( "\n4) Concatenar dois arrays" );
        JuntarArray novoArray = new JuntarArray();
        novoArray.inserirValores();
        novoArray.concatenarValores();
    }
}
