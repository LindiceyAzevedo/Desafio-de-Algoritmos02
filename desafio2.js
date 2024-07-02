let listaDeEstudantes = [
  {
    nome: "Eduardo",
    primeiraNota: 8,
    segundaNota: 5,
  },

  {
    nome: "Maria",
    primeiraNota: 7,
    segundaNota: 9,
  },

  {
    nome: "Renata",
    primeiraNota: 5,
    segundaNota: 3,
  },

  {
    nome: "Bruno",
    primeiraNota: 10,
    segundaNota: 6,
  },
]

function calculoAluno(primeiraNota, segundaNota){
  let media = (primeiraNota + segundaNota) / 2
  return media
}

for(let aluno of listaDeEstudantes) {
  mediaAluno = calculoAluno(aluno.primeiraNota, aluno.segundaNota)
  let passouOuNão = mediaAluno < 7 ? ' Infelizmente você reprovou. Vamos estudar mais!' : 'Parabéns, você foi aprovado!!'

  alert( `A média de ${aluno.nome} é ${mediaAluno}.\n ${passouOuNão} `)
}
