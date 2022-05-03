function somar ( x, y )
{
    return x + y;
}

const sum = ( x, y ) => { return x + y };

console.log( somar( 10, 10 ) );
console.log( sum( 10, 10 ) );

pessoa =
{
    "nome": "Diego",
    "idade": 18,
}

console.log( pessoa.nome )
console.log( pessoa.idade )

class Carro
{
    constructor ( model, brand, color )
    {
        this.model = model;
        this.brand = brand;
        this.color = color;
    }
}

let carro_1 = new Carro( "X5", "BMW", "White")

console.log( carro_1 );

function boasVindas ()
{
    alert( "Bem-Vindo! :)" )
}
