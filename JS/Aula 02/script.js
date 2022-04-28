function imc (nome, altura, peso)
{
    let resultado = peso / altura ** 2;
    alert(`${nome}, Seu IMC é de ${resultado.toFixed(2)}`)
}

imc("Diego", 1.84, 65)
