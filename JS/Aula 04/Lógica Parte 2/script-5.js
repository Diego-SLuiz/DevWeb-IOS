function mediaNotas ( notas, peso, minima )
{
    let notaTotal = 0;
    let valorMedidor = 0;

    for ( let i = 0; i < notas.length; i ++ ) 
    {
        notaTotal += notas[i] * peso[i];
        valorMedidor += peso[i];
    }

    let mediaFinal = notaTotal / valorMedidor;
    
    if ( mediaFinal >= minima )
    {
        return `O aluno foi aprovado. Nota: ${mediaFinal} Mínima: ${minima}`;
    }

    return `O aluno foi reprovado. Nota: ${mediaFinal} Mínima: ${minima}`;
}

console.log( mediaNotas( [9, 7, 6], [2, 3, 5],  7 ) );
