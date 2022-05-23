function microondas(opcao, tempo) {
  switch (opcao) {
    case 1:
      if (tempo < 10) {
        console.log(`Tempo insuficiente para preparar o prato`)
      } else if (tempo > 20 && tempo <= 30) {
        console.log(`Sua comida queimou!`)
      } else if (tempo > 30) {
        console.log(`Kabuum!`)
      } else {
        console.log(`Seu prato está pronto! Bom apetite!`)
      }
      break
    case 2:
      if (tempo < 8) {
        console.log(`Tempo insuficiente para preparar o prato`)
      } else if (tempo > 16 && tempo <= 24) {
        console.log(`Sua comida queimou!`)
      } else if (tempo > 24) {
        console.log(`Kabuum!`)
      } else {
        console.log(`Seu prato está pronto! Bom apetite!`)
      }
      break
    case 3:
      if (tempo < 15) {
        console.log(`Tempo insuficiente para preparar o prato`)
      } else if (tempo > 30 && tempo <= 45) {
        console.log(`Sua comida queimou!`)
      } else if (tempo > 45) {
        console.log(`Kabuum!`)
      } else {
        console.log(`Seu prato está pronto! Bom apetite!`)
      }
      break
    case 4:
      if (tempo < 12) {
        console.log(`Tempo insuficiente para preparar o prato`)
      } else if (tempo > 24 && tempo <= 36) {
        console.log(`Sua comida queimou!`)
      } else if (tempo > 36) {
        console.log(`Kabuum!`)
      } else {
        console.log(`Seu prato está pronto! Bom apetite!`)
      }
      break
    case 5:
      if (tempo < 8) {
        console.log(`Tempo insuficiente para preparar o prato`)
      } else if (tempo > 16 && tempo <= 24) {
        console.log(`Sua comida queimou!`)
      } else if (tempo > 24) {
        console.log(`Kabuum!`)
      } else {
        console.log(`Seu prato está pronto! Bom apetite!`)
      }
      break
    default:
      console.log(`Prato Inexistente`)
      break
  }
  console.log(`Seu prato está pronto! Bom apetite!`)
}

//local para chamada da função
microondas(3, 12)
