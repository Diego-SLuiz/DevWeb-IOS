function calcMedia ( notas, minima )
{
    let total = 0;
    let resultado = "acima";

    for ( var i = 0; i < notas.length; i ++ )
    {
        total += notas[i];
    }

    let media = total / i;

    if ( media < minima )
    {
        resultado = "abaixo";
    }

    return `A média é de ${media} e está ${resultado} da mínima de ${minima}!`;
}

alert( calcMedia( [8, 9, 7, 6], 7) )
