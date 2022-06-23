public class Main
{
    public static void main ( String [] args )
    {
        // Mostrar uma sequência de números
        System.out.println( "\n\n1) Exibir uma sequencia de numeros" );
        SequenciaNumero novaSequencia = new SequenciaNumero();
        novaSequencia.inserirValores();
        novaSequencia.exibirContagem( 10 );

        // Contar ocorrência de números pares e ímpares
        System.out.println( "\n\n2) contar ocorrencia de numeros impares e pares" );
        ContarParidade novaParidade = new ContarParidade();
        novaParidade.inserirValores( 10 );
        novaParidade.compararNumeros();

        // Mostrar tabuada de um determinado número
        System.out.println( "\n\n3) Exibir a tabuada de determinado numero" );
        TabuadaValor novaTabuada = new TabuadaValor();
        novaTabuada.inserirValores();
        novaTabuada.calcularTabuada( 10 );

        // Mostrar o menor número dentre outros
        System.out.println( "\n\n4) Exibir o menor numero dentre uma lista de numeros" );
        MenorNumero novoNumero = new MenorNumero();
        novoNumero.inserirValores( 10 );
        novoNumero.buscarMenor();
    }
}
