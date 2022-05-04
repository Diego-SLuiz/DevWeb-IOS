// Parte 1
console.log( "Atividade 1" )

let festa = ["Joaquim", "José", "Silva", "Xavier"];
let entrou = "";
let saiu = "";

const entrar_festa = ( nome ) => { console.log( `${nome} entrou na festa` ) }
const sair_festa = ( nome ) => { console.log( `${nome} saiu da festa` ) }

console.log( `A festa começou com ${festa}` );

entrou = "Amanda";
festa.unshift( entrou );
entrar_festa( entrou );

saiu = festa.pop();
sair_festa( saiu );

entrou = "Zuleica";
festa.push( entrou );
entrar_festa( entrou );

saiu = festa.shift();
sair_festa( saiu );

saiu = festa[ festa.length - 2 ];
delete festa[ festa.length - 2 ];
sair_festa( saiu );

entrou = "Silvana"
festa[ festa.length - 2 ] = "Silvana";
entrar_festa( entrou );

console.log( `Ficaram ${festa.length} pessoas na festa: ${festa}` );

// Parte 2
console.log( "Atividade 2" )

let frutas = ["laranja", "maça", "banana", "manga", "abacaxi"];
console.log( `Lista de frutas : ${frutas}`);

frutas.sort();
console.log( `Lista organizada de frutas : ${frutas}`);

let index = frutas.indexOf( "maça" );
console.log( `Posição da maça na lista: ${index}` );
