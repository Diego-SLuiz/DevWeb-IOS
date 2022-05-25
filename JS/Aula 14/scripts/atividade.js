function getFormData ()
{
    // Buscar dados do formulário
    let form = document.getElementById( "main-form" );
    let input = form.getElementsByTagName( "input" );
    let data = [];

    for ( let i = 0; i < input.length; i ++ )
    {
        data.push( input[i].value );
    }

    // Validar idade do usuário
    let age = validateAge( new Date( data[1] ) )

    if ( age < 18 || isNaN( age ) )
    {
        alert( "Somente maiores de 18 anos!" );
        return;
    }

    // Validate email do usuário
    if ( ! validateEmail( data[2] ) )
    {
        alert( "Insira um e-mail válido!" );
        return;
    }

    data[1] = String( age )
    return data;
}

function cleanFormData ()
{
    // Buscar dados do formulário
    let form = document.getElementById( "main-form" );
    let input = form.getElementsByTagName( "input" );

    for ( let i = 0; i < input.length; i ++ )
    {
        input[i].value = "";
    }
}

function validateAge ( birthDate )
{
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    let currentDay = currentDate.getDate();
    let birthYear = birthDate.getFullYear();
    let birthMonth = birthDate.getMonth();
    let birthDay = birthDate.getDate() + 1;

    // Calcular idade e aniversário
    let age = currentYear - birthYear;

    if ( currentMonth < birthMonth || ( currentMonth == birthMonth && currentDay < birthDay ) )
    {
        age -= 1;
    }

    return age;
}

function validateEmail ( email )
{
    // Validação por expressão regular
    let emailExp = RegExp( /.*@.*\..*/ );
    return emailExp.test( email );
}

function updateId ()
{
    let personContent = document.getElementById( "table-content" );
    let personList = personContent.getElementsByTagName( "tr" );

    // Atualizar ID em ordem crescente
    for ( let i = 0; i < personList.length; i ++ )
    {
        personList[i].children[3].innerText = i + 1;
    }
}

function addPerson ()
{
    let personContent = document.getElementById( "table-content" );
    let person = document.createElement( "tr" );
    let data = getFormData();

    if ( ! data )
    {
        return
    }

    // Adicionar uma pessoa em tbody
    for ( let i = 0; i < data.length; i ++ )
    {
        let personInfo = document.createElement( "td" );
        personInfo.innerText = data[i];
        person.appendChild( personInfo );
    }

    personContent.appendChild( person );
    updateId();
    cleanFormData();
}

function delPerson ()
{
    let personContent = document.getElementById( "table-content" );
    let personList = personContent.getElementsByTagName( "tr" );
    let targetId = document.getElementById( "item-id" ).value;

    // Remover pessoa com ID desejado
    for ( let i = 0; i < personList.length; i ++ )
    {
        let person = personList[i];
        let personId = person.children[3].innerText;

        if ( personId == targetId )
        {
            person.remove();
            break
        }
    }

    updateId()
    cleanFormData()
}

const currentDate = new Date()
const buttonAdd = document.getElementById( "button-add" );
const buttonDel = document.getElementById( "button-del" );

buttonAdd.addEventListener( "click", addPerson );
buttonDel.addEventListener( "click", delPerson );
