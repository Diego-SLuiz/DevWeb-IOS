public class Main
{
    public static void main ( String [] args )
    {
        // Criar uma matriz 4x4 e exibir valores maiores que 10
        System.out.println( "\n1) Matriz 4x4. Exibir valores maiores que 10" );
        MatrizDez matrizMaiorDez = new MatrizDez();
        matrizMaiorDez.inserirValores();
        matrizMaiorDez.exibirMatriz();
        matrizMaiorDez.maiorDez();

        // Criar uma matriz 5x5 e criar uma diagonal com valores 1
        System.out.println( "\n1) Matriz 5x5. Criar diagonal com valores 1" );
        MatrizIdentidade matrizDiagonal = new MatrizIdentidade();
        matrizDiagonal.inserirValores();
        matrizDiagonal.exibirMatriz();

        // Criar uma matriz 100x100 e substituir valores ímpares por -1 e pares por 1
        System.out.println( "\n1) Matriz 100x100. Substituir valores ímpares por 1 e pares por -1" );
        MatrizParidade matrizParImpar = new MatrizParidade();
        matrizParImpar.inserirValores();
        matrizParImpar.exibirMatriz();
        matrizParImpar.verificarParidade();
        matrizParImpar.exibirMatriz();
    }
}
