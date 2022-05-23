// 1 - Obter qual a jogada do Jogador 1
// 2 - Gerar aleatoriamente uma jogada para o computador (entre 1 e 3)
// 3 - Verificar quem ganhou
// 4 - Mostrar o resultado na tela

const jogo = ['','Pedra', 'Papel', 'Tesoura']
let escolhaComputador
let escolhaUsuario

function novoJogo() {
  escolhaJogadores()
  opcaoJogada()
  jogarNovamente()
}

function escolhaJogadores() {
  escolhaUsuario = Number(
    prompt(`
            PEDRA, PAPEL OU TESOURA?
            Escolha a sua opção:
            1 - Pedra 
            2 - Papel 
            3 - Tesoura
`)
  )
  escolhaComputador = Math.floor(Math.random() * 3)+1
}

function opcaoJogada() {
  if (escolhaUsuario <= jogo.length -1) {

    if (escolhaUsuario == 1 && escolhaComputador == 2 || escolhaUsuario == 2 && escolhaComputador == 3 || escolhaUsuario == 3 && escolhaComputador == 1) {
      alert(`VOCÊ PERDEU
      Você escolheu: ${jogo[escolhaUsuario]}
      Computador escolheu: ${jogo[escolhaComputador]}
      `)
    } else if (jogo[escolhaComputador] == jogo[escolhaUsuario]) {
      alert(`EMPATE
      Você escolheu: ${jogo[escolhaUsuario]}
      Computador escolheu: ${jogo[escolhaComputador]}
      `)
    } else {
      alert(`VOCÊ GANHOU
      Você escolheu: ${jogo[escolhaUsuario]}
      Computador escolheu: ${jogo[escolhaComputador]}
      `)
    }
  } else {
    alert('Opção inválida, tente novamente')
    novoJogo()
  }
}

function jogarNovamente() {
  let maisUm = confirm('Deseja jogar novamente?')
  maisUm ? novoJogo(): '' 
}

novoJogo()