public class Main
{
    public static void main ( String [] args )
    {
        // Comparar ordem de crescente dois números
        OrdemCrescente novoValor = new OrdemCrescente();
        novoValor.inserirValor();
        novoValor.compararOrdem();

        // Maior valor em um array
        MaiorNumero novoArray = new MaiorNumero();
        novoArray.inserirValor();
        novoArray.compararValor();

        // Comparar numero do dia com o nome do dia na semana
        DiaSemana novoDia = new DiaSemana();
        novoDia.inserirDia();
        novoDia.consultarDia();
    }
}
