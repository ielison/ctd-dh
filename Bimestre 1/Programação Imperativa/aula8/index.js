/* function podeSubir(altura, acompanhante);
  if (altura >= 1.40 && altura <= 2){
    console.log("Acesso autorizado.");
  }
  else if (altura < 1.40 && altura > 1.2 && acompanhante ==  true){
    console.log("Acesso autorizado somente com acompanhante.")
  }
  else{
    console.log("Acesso negado.");
  }
  
podeSubir(1.88,true) */

function menu(opcao){
  switch(opcao){
    case 1:
      console.log("Frango");
      break;
    case 2:
      console.log("Pizza");
      break;
    case 3:
      console.log("Carne");
    case 4:
      console.log("Sobremesa");
    case 5:
      console.log("Café");
  }
}
menu(3);


function menu(opcao) {
  if (opcao == 1) {
    console.log('Frango')
  } else if (opcao == 2) {
    console.log('Pizza')
  } else if (opcao == 3) {
    console.log('Carne')
  } else if (opcao == 4) {
    console.log('Sobremesa')
  } else if (opcao == 5) {
    console.log('Café')
  } else {
    console.log('Opção inválida')
  }
}

console.log(menu(8))
