public class Main
{
    public static void main ( String [] args )
    {
        // Aluno 1
        Aluno aluno_1 = new Aluno( "Diego" );
        aluno_1.inserirNotas();
        aluno_1.mediaNotas();

        // Aluno 2
        Aluno aluno_2 = new Aluno( "Joao" );
        aluno_2.inserirNotas();
        aluno_2.mediaNotas();

        // Triângulo 1
        Triangulo triangulo_1 = new Triangulo( 5, 8 );
        triangulo_1.calcularArea();

        // Triângulo 2
        Triangulo triangulo_2 = new Triangulo( 7, 15 );
        triangulo_2.calcularArea();
    }
}
