const TABELA_INSS = 
[
    [0, 1212, 0.075],
    [1212, 2427, 0.09],
    [2427, 3641, 0.12],
    [3641, 7087, 0.14],
]

function Funcionario ( nome, salario, vinculo )
{
    let funcionario = 
    {
        "nome": nome,
        "salario": salario,
        "vinculo": vinculo,
    }

    calcularInss( funcionario );

    return funcionario;
}

function calcularInss( funcionario )
{
    if ( funcionario.vinculo == "PJ" ) 
    {
        funcionario.valor_inss = 0;
        return
    }

    for ( var index = 0; index < TABELA_INSS.length; index ++ )
    {
        if ( funcionario.salario > TABELA_INSS[index][0] && funcionario.salario < TABELA_INSS[index][1] )
        {
            funcionario.valor_inss = ( TABELA_INSS[index][2] * funcionario.salario ).toFixed( 2 );
            return
        }
    }

    funcionario.valor_inss = TABELA_INSS[index][1] * TABELA_INSS[index][2];
}

let funcionario1 = Funcionario( "Jon Doe", 1000, "PJ" );
let funcionario2 = Funcionario( "Sam Kat", 2000, "CLT" );
let funcionario3 = Funcionario( "Lumia Rave", 3000, "PJ" );
let funcionario4 = Funcionario( "Luna Keyla ", 4000, "CLT" );
let funcionario5 = Funcionario( "Jeff Jr.", 8000, "CLT" );

let funcionarios = [funcionario1, funcionario2, funcionario3, funcionario4, funcionario5]

for (let index = 0; index < funcionarios.length; index ++ )
{
    console.log( `Funcionário: ${funcionarios[index].nome}` );
    console.log( `Vínculo: ${funcionarios[index].vinculo}` );
    console.log( `Salário: ${funcionarios[index].salario} R$` );
    console.log( `INSS: ${funcionarios[index].valor_inss} R$`, "\n" );
}
