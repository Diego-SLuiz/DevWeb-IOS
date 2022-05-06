function precoFinal ( custo_fabrica, por_impostos, por_distribuidor )
{
    custo_final = custo_fabrica + custo_fabrica * (por_impostos / 100) + custo_fabrica * (por_distribuidor / 100);
    return `Custo final: ${custo_final}R$`;
}

console.log( precoFinal( 1200, 45, 28 ) );
