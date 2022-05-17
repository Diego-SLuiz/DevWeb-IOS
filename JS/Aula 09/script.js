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
