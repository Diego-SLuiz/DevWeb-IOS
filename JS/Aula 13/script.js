function calcularTabuada ()
{
    let sectionTabuada = document.querySelector( "#calcular-tabuada" );
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
    let sectionUmbrella = document.querySelector( "#umbrella-academy" );
    let sectionTitle = document.createElement( "h2" );
    let umbrellaImage = document.createElement( "img" );

    // Checar se já existem imagens
    let imagemAtual = sectionUmbrella.querySelectorAll( "img" );
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
    let sectionNome = document.querySelector( "#nome-usuario" );
    let sectionTitle = document.createElement( "h2" );
    let paragraphNome = document.createElement( "p" );
    let nomeUsuario = prompt( "Insira seu nome:" );

    // Checar se já existe um nome
    let tituloAtual = sectionNome.querySelectorAll( "h2" );
    let nomeAtual = sectionNome.querySelectorAll( "p" );

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

function resetarMudancas ()
{
    let sectionNome = document.querySelector( "#nome-usuario" );
    let sectionUmbrella = document.querySelector( "#umbrella-academy" );
    let sectionTabuada = document.querySelector( "#calcular-tabuada" );

    // Remover nome
    while ( sectionNome.childElementCount )
    {
        sectionNome.children[0].remove();
    }

    // Remover imagem
    while ( sectionUmbrella.childElementCount )
    {
        sectionUmbrella.children[0].remove();
    }

    // Remover tabuada
    while ( sectionTabuada.childElementCount )
    {
        sectionTabuada.children[0].remove();
    }

    // Restaurar tema
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}

// Botões
const buttons = document.querySelectorAll( ".B_12" );
const buttonUmbrella = document.querySelector( "#B_01" );
const buttonNome = document.querySelector( "#B_02" );
const buttonTabuada = document.querySelector( "#B_03" );
const buttonResetar = document.querySelector( "#B_04" );

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
buttonResetar.addEventListener( "click", resetarMudancas )
