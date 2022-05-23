const participanteA = [5, 8, 4, 9, 5]
const participanteB = [8, 7, 8, 6, 8]
const participanteC = [7, 5, 10, 8, 3]

function pontuacaoMedia(notasParticipante) {
  let soma = 0
  for (let i = 0; i < notasParticipante.length; i++) {
    soma += notasParticipante[i]
  }
  console.log('Soma: ' + soma + ' Média: ' + soma / notasParticipante.length)

  return soma / notasParticipante.length
}

pontuacaoMedia(participanteA)
pontuacaoMedia(participanteB)
pontuacaoMedia(participanteC)

//outra função

function pontuacaoMaior(notasParticipante) {
  let maior = notasParticipante [0]
  for (let i = 1; i < notasParticipante.length; i++) {
    if (maior < notasParticipante[i]) {
      maior = notasParticipante[i]
    }
  }
  return maior
}

function competicao(participanteA, participanteB, participanteC) {
  const mediaA = pontuacaoMedia(participanteA)
  const mediaB = pontuacaoMedia(participanteB)
  const mediaC = pontuacaoMedia(participanteC)
    if(mediaA > mediaB && mediaA > mediaC) {
      console.log('O vencedor com melhor média é o participante A com média ' + mediaA)
    } else if (mediaB > mediaA && mediaB > mediaC) {
      console.log('O vencedor com melhor média é o participante B com média ' + mediaB)
    } else if (mediaC > mediaA && mediaC > mediaB) {
      console.log('O vencedor com melhor média é o participante C com média ' + mediaC)
    }
  }

    const maiorA = pontuacaoMaior(participanteA)
    const maiorB = pontuacaoMaior(participanteB)
    const maiorC = pontuacaoMaior(participanteC)
    if(maiorA > maiorB && maiorA > maiorC) {
      console.log('O vencedor com maior e-tip é o participante A com  ' + maiorA +'pontos.')
    } else if (maiorB > maiorA && maiorB > maiorC) {
      console.log('O vencedor com maior e-tip é o participante B com  ' + maiorB + ' pontos.')
    } else if (maiorC > maiorA && maiorC > maiorB) {
      console.log('O vencedor com maior e-tip é o participante C com  ' + maiorC +' pontos.')
    }

 competicao(participanteA, participanteB, participanteC);
