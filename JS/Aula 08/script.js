alert( "Checar console!!!" ) 

// Atividade em sala
let carros =
[
    "Hyundai HB20",
    "Fiat Mobi",
    "Chevrolet Onix",
    "Fiat Pulse",
    "Fiat Argo",
    "Chevrolet Onix Plus",
    "Jeep Compass",
    "Volkswagen T-Cross",
    "Chevrolet Tracker",
    "Hyundai Creta",
]

for ( let i = 0; i < carros.length; i += 2 )
{
    console.log( carros[i] );
}

// Exercício - Tabuada simples
function tabuada1 ( base )
{
    for ( let i = 1; i <= 10; i ++ )
    {
        console.log( `${base} X ${i} = ${i * base}` );
    }
}

function tabuada2 ( base )
{
    let i = 1;

    while ( i <= 10 )
    {
        console.log( `${base} X ${i} = ${i * base}` );
        i ++;
    }
}

tabuada1( 9 );
tabuada2( 7 );
