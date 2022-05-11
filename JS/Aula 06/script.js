function Aluno ( nome, sobrenome, idade, turma, peso, altura, notas, endereco ) // O ideal seria utilizar class
{
    let aluno = 
    {
        "nome": nome,
        "sobrenome": sobrenome,
        "idade": idade,
        "turma": turma,
        "peso": peso,
        "altura": altura,
        "notas": notas,
        "endereco": endereco,
    }

    return aluno;
}

function Endereco ( cidade, bairro, rua, numero ) 
{
    let endereco = 
    {
        "cidade": cidade,
        "bairro": bairro,
        "rua": rua,
        "numero": numero,
    }

    return endereco;
}

function resultadoFinal ( aluno, minima )
{
    let media = aluno.notas.reduce( ( total, nota ) => { return total + nota } ) / aluno.notas.length;

    aluno.media = media;

    if ( aluno.media > minima ) { return `O aluno ${aluno.nome} foi APROVADO. Média: ${aluno.media} | Mínima: ${minima}` };
    
    return `O aluno ${aluno.nome} foi REPROVADO. Média: ${aluno.media} | Mínima: ${minima}`;
}

function apresentarAluno ( aluno )
{
    return `Aluno: ${aluno.nome}
Cidade: ${aluno.endereco.cidade}
Bairro: ${aluno.endereco.bairro}
Rua: ${aluno.endereco.rua}
Notas: ${aluno.notas}`
}

let aluno1 = Aluno( "Jon", "Doe", 31, "A", 84, 1.78, [5, 9, 8, 4], Endereco( "São Paulo", "Jardim Pery", "Rua dos Amigos", 501 ) );
let aluno2 = Aluno( "San", "Will", 22, "B", 72, 1.84, [9, 7, 7, 8], Endereco( "São Paulo", "Limão", "Rua dos Primos", 47 ) );
let aluno3 = Aluno( "Max", "Scot", 45, "C", 67, 1.63, [7, 5, 6, 4], Endereco( "São Paulo", "Cachoeirinha", "Rua dos Chegados", 678 ) );

let alunos = [aluno1, aluno2, aluno3];

for ( let index = 0; index < alunos.length; index ++ )
{
    console.log( apresentarAluno( alunos[index] ) );
    console.log( resultadoFinal( alunos[index], 7 ), "\n" );
}
