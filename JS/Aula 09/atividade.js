function Aluno ( nome, idade, turma, nota )
{
    let aluno = 
    {
        "nome": nome,
        "idade": idade,
        "turma": turma,
        "nota": nota,
    }

    return aluno;
}

let aluno_1 = Aluno( "Heloísa", 22, "A", 10 );
let aluno_2 = Aluno( "Jissara", 28, "B", 7 );
let aluno_3 = Aluno( "Jheniffer", 21, "B", 8 );
let aluno_4 = Aluno( "Brenno", 19, "C", 9 );
let aluno_5 = Aluno( "Erik", 18, "B", 1 );

const alunos = [aluno_1, aluno_2, aluno_3, aluno_4, aluno_5];

let nomes = alunos.map( ( aluno ) => aluno.nome );
let notas = alunos.map( ( aluno ) => aluno.nota > 6 ? `Nome: ${aluno.nome} Nota: ${aluno.nota}` : undefined );

console.log( `Alunos: ${nomes.join(" ")}` );
console.log( notas )
