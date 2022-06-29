import java.util.Scanner;

public class ListaFrutas
{
    private static final Scanner entradaDados = new Scanner( System.in );
    private String [] frutasInseridas = new  String [ 5 ];

    private boolean validarFruta ( String nomeFruta )
    {
        if ( nomeFruta.isEmpty() || nomeFruta.length() < 3 )
        {
            System.out.println( "O nome precisa conter ao menos 3 caracteres!" );
            return false;
        }

        return true;
    }

    private boolean verificarLista ( String nomeFruta )
    {
        for (int indice = 0; indice < this.frutasInseridas.length; indice ++ )
        {
            if ( nomeFruta.equalsIgnoreCase( this.frutasInseridas[ indice ] ) )
            {
                System.out.println( "A fruta inserida já existe!" );
                return false;
            }
        }

        return true;
    }

    public void inserirFrutas ()
    {
        System.out.println( "\nInsira o nome de 5 frutas!" );

        for ( int indice = 0; indice < 5; indice ++ )
        {
            while ( true )
            {
                System.out.print( "Digite o nome da " + ( indice + 1 ) + "° fruta: " );
                String frutaInserida = entradaDados.nextLine();
                frutaInserida = frutaInserida.toLowerCase().trim().replaceAll( "\s+", " " );

                if ( this.validarFruta( frutaInserida ) && this.verificarLista( frutaInserida ) )
                {
                    this.frutasInseridas[ indice ] = frutaInserida;
                    break;
                }
            }
        }
    }

    public void exibirFrutas ()
    {
        System.out.println( "\nLista de frutas: " );

        for (int indice = 0; indice < this.frutasInseridas.length; indice ++ )
        {
            System.out.print( this.frutasInseridas[ indice ] + " " );
        }
    }
}
