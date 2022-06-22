function soma(a, b) {
    console.log(a + b)
    return a + b
}
function subtracao(a, b) {
    console.log(a - b)
    return a - b
}

function divisao(a, b) {
    console.log(a / b)
    return a / b
}

function multiplicacao(a, b) {
    console.log(a * b)
    return a * b
}

module.exports = {
    soma,
    subtracao,
    divisao,
    multiplicacao
};