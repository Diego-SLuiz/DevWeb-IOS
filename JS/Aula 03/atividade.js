function alertCookie ()
{
    alert( "Gerando Cookie..." );
    console.log( "Cookie Gerado!" );
}

const alertSucesso = () =>
{
    alert( "Mensagem gerada com sucesso!" );
    console.log( "Mensagem gerada com sucesso!" );
}

const toDays = ( years ) => { return `${years} anos em dias = ` + years * 365 }

let notebook =
{
    "brand": "Apple",
    "model": "MacBook",
    "name": "MacBook Pro",
    "storage": 512,
    "ram": 8,
}

console.log( notebook )
console.log( toDays( 3 ) )
