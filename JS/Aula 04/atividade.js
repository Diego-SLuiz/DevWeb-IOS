let party = ["Joaquim", "José", "Silva", "Xavier"]
let joined = ""
let exited = ""

const exit_party = ( name ) => { console.log( `${name} saiu da festa` ) }
const join_party = ( name ) => { console.log( `${name} entrou na festa` ) }

console.log( `A festa começou com ${party}` )

joined = "Amanda"
party.unshift( joined )
join_party( joined )

exited = party.pop()
exit_party( exited )

joined = "Zuleica"
party.push(joined)
join_party( joined )

exited = party.shift()
exit_party( exited )

exited = party[ party.length - 2 ]
delete party[ party.length - 2 ]
exit_party( exited )

joined = "Silvana"
party.splice( party.length - 1, 0, joined )
join_party( joined )

console.log( `Ficaram na festa ${party}` )
