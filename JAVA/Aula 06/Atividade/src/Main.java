public class Main
{
    public static void main ( String [] args )
    {
        // Exibir tabuada, ra�z quadrada e paridade de um n�mero
        System.out.println( "\n\n1) Calcular tabuada, raiz quadrada e paridade" );
        CalcularPropriedades novaPropriedade = new CalcularPropriedades();
        novaPropriedade.inserirValor();
        novaPropriedade.exibirTabuada();
        novaPropriedade.exibirRaiz();
        novaPropriedade.exibirParidade();

        // Calcular e exibir a m�dia de um aluno
        System.out.println( "\n\n2) Calcular media de um aluno" );
        CalcularMedia novaMedia = new CalcularMedia();
        novaMedia.inserirNotas( 8 );
        novaMedia.exibirMedia();
    }
}
