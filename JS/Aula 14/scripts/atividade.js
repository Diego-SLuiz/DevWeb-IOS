function getFormData ()
{
    // Get form data
    let form = document.getElementById( "main-form" );
    let input = form.getElementsByTagName( "input" );
    let data = [];

    for ( let i = 0; i < input.length; i ++ )
    {
        if ( i == 1 )
        {
            data.push( new Date( input[i].value ) );
            continue;
        }

        data.push( input[i].value );
    }

    console.log( data );

    // Validate form data
    if ( ! validateAge( data[1], 18 ) ) // Age
    {
        alert( "menor de 18" );
        return;
    }
}

function validateAge ( birthDate, minimumAge )
{
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    let currentDay = currentDate.getDate();
    let birthYear = birthDate.getFullYear();
    let birthMonth = birthDate.getMonth();
    let birthDay = birthDate.getDate();

    // Get current age
    let age = birthYear - currentYear;

    if ( birthMonth < currentMonth || ( birthMonth == currentMonth && birthDay < currentDay ) )
    {
        age -= 1;
    }

    if ( age < minimumAge )
    {
        return 0;
    }

    return age;
}

function validateEmail ( email )
{

}

function updatePerson ()
{

}

function updateId ()
{

}

function addPerson ()
{

}

function delPerson ()
{

}

const currentDate = new Date()
const buttonAdd = document.getElementById( "button-add" );
const buttonDel = document.getElementById( "button-del" );

buttonAdd.addEventListener( "click", getFormData );
buttonDel.addEventListener( "click", delPerson );
