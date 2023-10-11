const firstNumber = prompt(`Insira dois números para serem utilizados nos cálculos.
Primeiro:`)

const secondNumber = prompt(`Insira dois números para serem utilizados nos cálculos.
Segundo:`)

let n1 = Number(firstNumber)
let n2 = Number(secondNumber)

let sum = alert(`A soma dos números é: 
${n1 + n2}`)

let sub = alert(`A subtração dos números é:
${n1 - n2}`)

let mult = alert(`A multiplicação dos números é:
${n1 * n2}`)

let divi = alert(`A divisão dos números é:
${n1 / n2}`)

let rest = alert(`O resto da divisão dos números é:
${n1 % n2}`)

if ((n1 + n2) % 2 == 0) {
  alert(`A soma dos números é par!`)
} else if ((n1 + n2) % 2 > 0) {
  alert(`A soma dos números é ímpar!`)
} else {
  alert(`Algo deu errado!`)
}

if (n1 == n2) {
  alert(`Os números inseridos são iguais.`)
} else if (n1 / n2 < 1 || n1 / n2 > 1) {
  alert(`Os números inseridos são diferentes.`)
} else {
  alert(`Algo deu errado!`)
}
