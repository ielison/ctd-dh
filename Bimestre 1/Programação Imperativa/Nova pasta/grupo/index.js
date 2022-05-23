function Pessoa(nome,altura, sexo){
    this.nome = nome;
    this.altura = altura;
    this.sexo = sexo;
}

const pessoa1 = new Pessoa('pessoa1', 1.80, 'M');
const pessoa2 = new Pessoa('pessoa2', 1.60, 'F');
const pessoa3 = new Pessoa('pessoa3', 1.90, 'M');
const pessoa4 = new Pessoa('pessoa4', 1.50, 'F');
const pessoa5 = new Pessoa('pessoa5', 1.70, 'M');


module.exports = {
  novaPessoa:function(nome,altura, sexo){
    const novaPessoa = new Pessoa(nome,altura, sexo);
    this.pessoas.push(novaPessoa);
    return novaPessoa;
  },
  pessoas:[pessoa1, pessoa2, pessoa3, pessoa4, pessoa5],
  numeroDeHomens: function(){
    for(let pessoa of this.pessoas){
      if(pessoa.sexo == 'M'){
        this.homens++;
      }
    }
    return this.homens;
  },
  
  pessoaMaisAlta: function(){
    for(let pessoa of this.pessoas){
      if(pessoa.altura > this.maiorAltura){
        this.maiorAltura = pessoa.altura;
        this.pessoaMaisAlta = pessoa;
      }
    }
     return this.pessoaMaisAlta;
  },

  pessoaMaisBaixa: function(){
    for(let pessoa of this.pessoas){
      if(pessoa.altura < this.menorAltura){
        this.menorAltura = pessoa.altura;
        this.pessoaMaisBaixa = pessoa;
      }
    }
    return this.pessoaMaisBaixa;
  },

  mediaAltura: function(){
    for(let pessoa of this.pessoas){
      this.somaAltura += pessoa.altura;
    }
    this.mediaAltura = this.somaAltura / this.pessoas.length;
    return this.mediaAltura;
  },
}