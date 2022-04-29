function reajusteSalarial (base, percentual)
{
    let ajuste = base + base * (percentual / 100);
    return `Com um ajuste de ${percentual}% e um salário de ${base}, o resultado é ${ajuste}`
}

alert(reajusteSalarial(1000, 13))
