function calcularTabuada ()
{
    let sectionTabuada = document.getElementById( "calcular-tabuada" );
    let sectionTitle = document.createElement( "h2" );
    let number = parseInt( prompt( "Insira um número:" ) );

    // Verificar se o número é válido
    if ( isNaN( number ) )
    {
        alert( "Valor inválido" );
        return;
    }

    // Adicionar título e tabuada
    sectionTitle.innerText = `Tabuada de: ${number}`;
    sectionTabuada.appendChild( sectionTitle );

    for ( let i = 1; i <= 10; i ++ )
    {
        let paragraph = document.createElement( "p" );
        paragraph.innerText = `${number} X ${i} = ${number * i}`;
        sectionTabuada.appendChild( paragraph );
    }
}

function mostrarImagem ()
{
    let sectionUmbrella = document.getElementById( "umbrella-academy" );
    let sectionTitle = document.createElement( "h2" );
    let umbrellaImage = document.createElement( "img" );

    // Checar se já existem imagens
    let imagemAtual = sectionUmbrella.getElementsByTagName( "img" );
    if ( imagemAtual.length ) return;

    // Adicionar título e imagem
    sectionTitle.innerText = "Umbrella Academy";
    umbrellaImage.src = "./assets/umbrella-academy.jpg";
    umbrellaImage.style.maxWidth = "50%";
    sectionUmbrella.appendChild( sectionTitle );
    sectionUmbrella.appendChild( umbrellaImage );

    document.body.style.backgroundColor = "#262525";
    document.body.style.color = "#FFFFFF";
}

function mostrarNome ()
{
    let sectionNome = document.getElementById( "nome-usuario" );
    let sectionTitle = document.createElement( "h2" );
    let paragraphNome = document.createElement( "p" );
    let nomeUsuario = prompt( "Insira seu nome:" );

    // Checar se já existe um nome
    let tituloAtual = sectionNome.getElementsByTagName( "h2" );
    let nomeAtual = sectionNome.getElementsByTagName( "p" );

    if ( nomeAtual.length )
    {
        tituloAtual[0].remove();
        nomeAtual[0].remove();
    }

    // Adicionar título e nome
    sectionTitle.innerText = "Nome do usuário";
    paragraphNome.innerText = `Olá ${nomeUsuario}, bem-vindo à academia!`;
    sectionNome.appendChild( sectionTitle );
    sectionNome.appendChild( paragraphNome );
}

// Botões
const buttons = document.getElementsByClassName( "B_12" );
const buttonUmbrella = document.getElementById( "B_01" );
const buttonNome = document.getElementById( "B_02" );
const buttonTabuada = document.getElementById( "B_03" );

// Estilizar botões
for ( let i = 0; i < buttons.length; i ++ )
{
    buttons[i].style.backgroundColor = "#BFBFBF";
    buttons[i].style.border = "solid 2px #D9BC66";
    buttons[i].style.padding = "0.5rem";
    buttons[i].style.margin = "0.7rem";
}

// Adicionar funcionalidades aos botões
buttonUmbrella.addEventListener( "click", mostrarImagem );
buttonNome.addEventListener( "click", mostrarNome );
buttonTabuada.addEventListener( "click", calcularTabuada );
