public class Triangulo
{
    // Atributos do objeto
    private float base = 3;
    private float altura = 3;

    // Método construtor
    public Triangulo ( float base, float altura )
    {
        this.base = base;
        this.altura = altura;
    }

    // Calcular área do triângulo
    public void calcularArea ()
    {
        float area = this.base * this.altura / 2;
        System.out.println( "A area do triangulo de base " + this.base + " e altura " + this.altura + " = " + area );
    }
}
