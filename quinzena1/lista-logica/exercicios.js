// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui

const altura = Number(prompt("Digite a altura"))
const largura = Number(prompt("Digite a largura"))
let area = altura * largura

console.log(area)



}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui

  const anoAtual = Number(prompt("Digite o ano em que estamos"))
  const anoDeNascimento = Number(prompt("Digite o seu ano de nascimento"))
  const idade = anoAtual - anoDeNascimento

  console.log(idade)

  



}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui

  const peso = Number(prompt("Digite o seu peso em Kg"))
  const altura = Number(prompt("Digite a sua altura em metros"))
  let imc = peso / (altura * altura)

  console.log(imc)

}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui

let nome
let idade
let email

 nome = prompt("Digite o seu nome")
 idade = Number(prompt("Digite a sua idade"))
 email = prompt("Digite o seu email")

 console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui

  const cor1 = prompt("Digite a primeira cor")
  const cor2 = prompt("Digite a segunda cor")
  const cor3 = prompt("Digite a terceira cor")
  let cores = [cor1, cor2, cor3]

  console.log(cores)
  

}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui

const qualquerCoisa = prompt("Escreva qualquer coisa")
const qualquerCoisaMaiuscula = qualquerCoisa.toUpperCase()
console.log(qualquerCoisaMaiuscula)

}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui

  const custo = Number(prompt("Quanto custa o espetáculo?"))
  const ingresso = Number(prompt("Quanto custa o ingresso?"))
  const resultado = custo / ingresso

  console.log(resultado)


}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui

  const palavra1 = prompt("Digite uma palavra")
  const palavra2 = prompt("Digite mais uma palavra")

  console.log(palavra1.length === palavra2.length)

  
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui

 const palavra1 = prompt("Digite uma palavra")
 const palavra2 = prompt("Digite mais uma palavra")
 
 console.log(palavra1.toUpperCase() === palavra2.toUpperCase())


}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui

  const anoAtual = Number(prompt("Qual o ano atual?"))
  const anoNascimento = Number(prompt("Qual o ano do seu nascimento?"))
  const anoEmissao = Number(prompt("Qual o ano de emissão da sua carteira de identidade?"))
  const idadeUsuario = anoAtual - anoNascimento
  const identidade = anoAtual - anoEmissao

  console.log((idadeUsuario <= 20 && identidade >=5) || (idadeUsuario > 20 && idadeUsuario < 50 && identidade >= 10)
   || (idadeUsuario >= 50 && identidade >=15))



}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui

  const anoUsuario = Number(prompt("Digite um ano"))

  const cem = anoUsuario % 100 === 0
  const quatro = anoUsuario % 4 === 0
  const quatrocentos = anoUsuario % 400 === 0

  console.log(cem === quatro === quatrocentos)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui

  const maiorDeIdade = prompt("Você tem 18 anos ou mais?")
  const ensinoMedio = prompt("Você já concluiu o ensino médio?")
  const horarioDisponivel = prompt("Você tem disponibilidade no horário proposto pelo curso?")
  
  console.log(maiorDeIdade === "sim" && ensinoMedio === "sim" && horarioDisponivel === "sim")

}