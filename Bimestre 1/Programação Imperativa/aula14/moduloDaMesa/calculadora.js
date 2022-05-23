module.exports = function calculadora(numero1, numero2, operacao) {
  if (operacao == '+') {
    return numero1 + numero2
  } else if (operacao == '-') {
    return numero1 - numero2
  } else if (operacao == '*') {
    return numero1 * numero2
  } else if (operacao == '/') {
    return numero1 / numero2
  } else {
    return 'Operação inválida'
  }
}
