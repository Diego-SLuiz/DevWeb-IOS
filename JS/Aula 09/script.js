function multiply ( currentValue, currentIndex, array )
{
    return currentValue * 2;
}

function positions ( currentValue, currentIndex, array )
{
    console.log( `Value: ${currentValue} | Index: ${currentIndex}` );
}

function even ( currentValue, currentIndex, array )
{
    return ! ( currentValue % 2 );
}

let myArray = [11, 23, 30, 57, 80];

myArray.forEach( positions );
console.log( myArray.map( multiply ) );
console.log( myArray.filter( even ) );
console.log( myArray.find( even ) );
console.log( myArray.findIndex( even ) );

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

function verificarAluno ( aluno )
{
    nomes.push( aluno.nome );

    if ( aluno.nota > 6 )
    {
        notasBoas.push( `${aluno.nome}: ${aluno.nota}`);
    }

    else if ( aluno.nota < 5 && ! notaRuim.length )
    {
        notaRuim.push( `${aluno.nome}: ${aluno.nota}`);
    }
}

const nomes = [];
const notasBoas = [];
const notaRuim = [];

let aluno_1 = Aluno( "Heloísa", 22, "A", 9 );
let aluno_2 = Aluno( "Jissara", 28, "B", 7 );
let aluno_3 = Aluno( "Jheniffer", 21, "B", 8 );
let aluno_4 = Aluno( "Brenno", 19, "C", 5 );
let aluno_5 = Aluno( "Erik", 18, "B", 3 );

const alunos = [aluno_1, aluno_2, aluno_3, aluno_4, aluno_5];

alunos.forEach( verificarAluno );

console.log( nomes )
console.log( notasBoas )
console.log( notaRuim )
