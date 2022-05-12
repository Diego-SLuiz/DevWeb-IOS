alert( "Checar o console!" )

let text = `Dr Stephen Strange lança um feitiço proibido que abre um
portal para o multiverso. No entanto, surge uma ameaça que pode
ser grande demais para sua equipe lidar.`;

console.log( text );

// ex parte 1
console.log( `Primeiro indice: ${text[0]}` );

// ex parte 2
console.log( `O tamanho da string é: ${text.length}` );

// ex parte 3
console.log( `String com substituição: ${text.replace( "Dr Stephen Strange", "Feiticeira Escarlate" )}` );

// ex parte 4
console.log( `Palavra na posição 13: ${text.split( " " )[12]}` );

// ex parte 5
console.log( text.toUpperCase() );
