alert( "Checar console!" )

// Atividade 1
function oddEven ( number, index )
{
    if ( ! (number % 2) )
    {
        console.log( `Indice: ${index} | Valor: ${number} | Par` );
    }
    else
    {
        console.log( `Indice: ${index} | Valor: ${number} | Ímpar` );
    }
}

const myArray = [17, 43, 8, 4, 97, 56, 29];
console.log( `Valores Array: ${myArray.join( " " )}` );

console.log( `\nPar ou Ímpar:` );
myArray.forEach( oddEven );

let lowNumbers = myArray.filter( ( number ) => number < 18 );
console.log( `\nMenor que 18: \n${lowNumbers.join( " " )}` );

// Atividade 2
function Aluno ( nome, idade, nota, ano )
{
    let aluno =
    {
        "nome": nome,
        "idade": idade,
        "nota": nota,
        "ano": ano,
    }

    return aluno;
}

let aluno_1 = Aluno( "Ana", 17, 8, "2°B" );
let aluno_2 = Aluno( "Bruno", 16, 6, "2°C" );
let aluno_3 = Aluno( "Veronica", 16, 9, "2°C" );
let aluno_4 = Aluno( "Marta", 15, 5, "3°C" );
let aluno_5 = Aluno( "Maria", 14, 4, "1°F" );
const alunos = [aluno_1, aluno_2, aluno_3, aluno_4, aluno_5];

let turmas = alunos.map( ( aluno ) => `Nome: ${aluno.nome} Turma: ${aluno.ano}` );
let segundoAno = alunos.filter( ( aluno ) => aluno.ano.includes( "2" ) );
let media = alunos.reduce( ( nota, aluno ) => nota + aluno.nota, 0 ) / alunos.length;

console.log( "\nAlunos:" );
console.log( alunos );

console.log( "\nTurmas" );
console.log( turmas );

console.log( "\nSegundo Ano" );
console.log( segundoAno );

console.log( "\nMédia" );
console.log( media );

if ( media < 7 )
{
    console.log( "Os alunos NÃO estão na média!" );
}
else
{
    console.log( "Os alunos na média!" );
}
