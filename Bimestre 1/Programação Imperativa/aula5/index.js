//Declaração da função
function comprarComida(quantidade) {
  console.log(quantidade)
  const preco = quantidade * 12
  return preco
  //Após o return, a função é encerrada e nenhum comando após será executado
}

function darDesconto(preco) {
  return preco * 0.7
}

//Chamando a função
const retornoPreco = comprarComida(2)
console.log(
  'Preço inicial: R$ ' +
    retornoPreco +
    '. Preço do desconto: R$ ' +
    darDesconto(retornoPreco).toFixed(2)
)
