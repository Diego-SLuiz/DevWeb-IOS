public class Main
{
    public static void main( String [] args )
    {
        int controle, acumulador = 0;
        boolean condicao;

        System.out.println("Numero da iteração\tCondição\tControle\tAcumulador");

        for ( controle = 1; controle <= 10; controle++ )
        {
            acumulador += controle;
            condicao = controle <= 10;
            System.out.println("Iteração " + controle + "\t\t\t" + condicao + "\t\t\t" + controle + "\t\t\t" + acumulador);
        }
    }
}
