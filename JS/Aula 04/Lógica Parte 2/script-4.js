function toCelcius ( f_temp )
{
    let c_temp = ( (f_temp - 32) * (5 / 9) ).toFixed(2); 
    return `A temperatura ${f_temp}°F é ${c_temp}°C`;
}

console.log( toCelcius( 50 ) );
