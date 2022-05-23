/* somaArray()... Reloaded
Vamos pegar o exercício sumArray() que fizemos na classe arrays, mas desta vez vamos modificá-lo para que ele possa receber um array de números de qualquer quantidade de elementos.
Se você não se lembrar da instrução original: Você deve criar uma função somaArray que aceita uma matriz de números e retorna
a soma de todos eles.
Exemplo:
  ● somaArray([1,2,3]) // 6
  ● somaArray([10, 3, 10, 4]) // 27
  ● somaArray([-5,100]) // 95 */

/* function somaArray(array) {
  let soma = 0
  for (let i = 0; i < array.length; i++) {
    soma += array[i]
  }
  return soma
}

const array1 = [1, 2, 3]
const array2 = [10, 3, 10, 4]
const array3 = [-5, 100]

console.log(
  'O resultado das somas de cada array é: ' +
    'array1 = ' +
    somaArray(array1) +
    ', array2 = ' +
    somaArray(array2) +
    ' e array3 = ' +
    somaArray(array3) +
    '.'
) */

/* E como estamos ajustando as funções, vamos fazer o mesmo com a função do exercício de simulação join().
Você deve modificar a função join() para que ela possa receber uma matriz de strings de qualquer quantidade de elementos.
Importante: Você não pode usar o método original Array.join().
Por exemplo:
  ● join(["o","l","a"]) deve retornar a string "ola";
  ● join(["t","c","h","a","u"]) deve retornar a string "tchau". */

function join(array) {
  let string = ''
  for (let i = 0; i < array.length; i++) {
    string += array[i]
  }
  return string
}
console.log(join(["o","l","a"]))
console.log(join(["t","c","h","a","u"]))
