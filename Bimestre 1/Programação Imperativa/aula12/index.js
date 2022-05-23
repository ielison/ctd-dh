const alicia = [23, 67, 32]
const bob = [12, 67, 43]

function encontrarGanhador(a, b) {
  let pontosAlicia = 0
  let pontosBob = 0

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      pontosAlicia++
    } else if (a[i] < b[i]) {
      pontosBob++
    }
  }
  if (pontosAlicia == pontosBob) {
    return 'Empate!'
  } else if (pontosAlicia > pontosBob) {
    return 'Alicia venceu!'
  } else {
    return 'Bob venceu!'
  }
}

console.log('E o resultado do grandeconcurso de Stand-Up Comedy é: ' + encontrarGanhador(alicia, bob))
