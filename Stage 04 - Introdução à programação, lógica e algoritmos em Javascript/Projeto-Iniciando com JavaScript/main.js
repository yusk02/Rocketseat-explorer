// Exercício 1

alert("Hello World!")


// E2

let number1 = 10
let number2 = 25

let sum = number1 + number2
  
alert(`A soma das variáveis declaradas no script é: ${sum}`)


// E3 & E4 & E5

let number = 1
let string = true
let boolean = "true"


if(typeof number == "number") {
  alert("A variável é um número!");
} else {
  alert("A variável não é um número!");
}


if(typeof string == "string") {
  alert("A variável é uma string!");
} else {
  alert("A variável não é uma string!");
}


if(typeof boolean == "boolean") {
  alert("A variável é um booleano!");
} else {
  alert("A variável não é um booleano!");
}


// E6

let firstNumber = 52
let secondNumber = 45

let sub = firstNumber - secondNumber

alert(`O resultado da subtração " ${firstNumber} - ${secondNumber} " é igual a: ${sub}`)


// E7

let n1 = 2
let n2 = 13

let mult = n1 * n2

alert(`A multiplicação: " ${n1} x ${n2} " resulta em: ${mult}`)


// E8

let num1 = 84
let num2 = 6

let div = num1 / num2

alert(`A divisão de ${num1} por ${num2} tem como resultado: ${div}`)


// E9 & E10

let even = 24
let odd = 23


if (even % 2 == 0) {
  alert("O número da variável é par!")
} else {
  alert("O número da variável é ímpar!")
}

if (odd % 2 == 0) {
  alert("O número da variável é par!")
} else {
  alert("O número da variável é ímpar!")
}
