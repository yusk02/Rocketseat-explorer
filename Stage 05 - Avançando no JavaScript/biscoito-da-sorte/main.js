const fortunePhrases = [
  {
    phrase: "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."
  },
  {
    phrase: "A vida trará coisas boas se tiver paciência."
  },
  {
    phrase: "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si."
  },
  {
    phrase: "Não compense na ira o que lhe falta na razão."
  },
  {
    phrase: "Defeitos e virtudes são apenas dois lados da mesma moeda."
  },
  {
    phrase: "A maior de todas as torres começa no solo."
  },
  {
    phrase: "Não há que ser forte. Há que ser flexível."
  },
  {
    phrase: "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?"
  },
  {
    phrase: "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida."
  },
  {
    phrase: "A juventude não é uma época da vida, é um estado de espírito."
  },
  {
    phrase: "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos."
  },
  {
    phrase: "Siga os bons e aprenda com eles."
  },
  {
    phrase: "Não importa o tamanho da montanha, ela não pode tapar o sol."
  },
  {
    phrase: "O bom-senso vale mais do que muito conhecimento."
  },
  {
    phrase: "Quem quer colher rosas tem de estar preparado para suportar os espinhos."
  },
  {
    phrase: "São os nossos amigos que nos ensinam as mais valiosas lições."
  },
  {
    phrase: "Aquele que se importa com o sentimento dos outros, não é um tolo."
  },
  {
    phrase: "A adversidade é um espelho que reflete o verdadeiro eu."
  },
  {
    phrase: "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos."
  },
  {
    phrase: "Uma bela flor é incompleta sem as suas folhas."
  },
  {
    phrase: "Sem o fogo do entusiasmo, não há o calor da vitória."
  },
  {
    phrase: "O riso é a menor distância entre duas pessoas."
  },
  {
    phrase: "O amor é fraco quando os defeitos são mais fortes."
  },
  {
    phrase: "Amizade e Amor são coisas que se unem num piscar de olhos."
  },
  {
    phrase: "Surpreender e ser surpreendido é o segredo do amor."
  },
  {
    phrase: "Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã."
  },
  {
    phrase: "A paciência na adversidade é sinal de um coração sensível."
  },
  {
    phrase: "A sorte favorece a mente bem preparada."
  },
  {
    phrase: "A sua visão se tornará mais clara apenas quando conseguir olhar para dentro do seu coração."
  },
  {
    phrase: "Quem olha para fora sonha; quem olha para dentro acorda."
  },
  {
    phrase: "As pessoas esquecerão o que você disse e o que você fez... mas nunca esquecerão como se sentiram."
  },
  {
    phrase: "Espere pelo mais sábio dos conselhos: o tempo."
  },
  {
    phrase: "Todas as coisas são difíceis antes de se tornarem fáceis."
  },
  {
    phrase: "Se você se sente só é porque construiu muros ao invés de pontes."
  },
  {
    phrase: "Vencer é 90 por cento suor e 10 por cento de engenho."
  },
  {
    phrase: "O amor está sempre mais próximo do que você imagina."
  },
  {
    phrase: "Você é do tamanho do seu sonho."
  },
  {
    phrase: "Pare de procurar eternamente; a felicidade está mesmo aqui ao seu lado."
  },
  {
    phrase: "O conhecimento é a única virtude e a ignorância é o único vício."
  },
  {
    phrase: "O nosso primeiro e último amor é... o amor-próprio."
  },
  {
    phrase: "Deixe de lado as preocupações e seja feliz."
  },
  {
    phrase: "A vontade das pessoas é a melhor das leis."
  },
  {
    phrase: "Nós somos o que pensamos."
  },
  {
    phrase: "A maior barreira para o sucesso é o medo do fracasso."
  },
  {
    phrase: "O pessimista vê a dificuldade em cada oportunidade; O otimista vê a oportunidade em cada dificuldade."
  },
  {
    phrase: "Muitas das grandes realizações do mundo foram feitas por homens cansados e desanimados que continuaram o seu trabalho."
  },
  {
    phrase: "O insucesso é apenas uma oportunidade para recomeçar de novo com mais experiência."
  },
  {
    phrase: "Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo."
  },
  {
    phrase: "O verdadeiro homem mede a sua força, quando se defronta com o obstáculo."
  },
  {
    phrase: "Quem quer vencer um obstáculo deve armar-se da força do leão e da prudência da serpente."
  },
  {
    phrase: "A adversidade desperta em nós capacidades que, em circunstâncias favoráveis, teriam ficado adormecidas."
  },
  {
    phrase: "Motivação não é sinónimo de transformação, mas um passo em sua direção."
  },
  {
    phrase: "O que empobrece o ser humano, não é a falta de dinheiro, mais sim, a falta de fé,motivação e criatividade."
  },
  {
    phrase: "A inspiração vem dos outros. A motivação vem de dentro de nós."
  },
  {
    phrase: "Não acredite mais em pessoas especiais, mas em momentos especiais com pessoas normais."
  },
  {
    phrase: "A nossa vida tem 4 sentidos... Amar, Sofrer, Lutar e Vencer. Ame muito, sofra pouco, lute bastante e vença sempre!"
  },
  {
    phrase: "Nada é por acaso... Acredite em seus sonhos e nos seus potenciais... Na vida tudo se supera.."
  },
  {
    phrase: "Acredite em milagres, mas não dependa deles."
  },
  {
    phrase: "Você sempre será a sua melhor companhia!"
  },
  {
    phrase: "Realize o óbvio, pense no improvável e conquiste o impossível."
  }
]
let cookieSelector = Math.round(Math.random() * 59)
console.log(cookieSelector)
const cookie = document.querySelector("#cookie")
const screen1 = document.querySelector("#screen1")
const screen2 = document.querySelector("#screen2")
const fortune = document.querySelector(".fortune")

cookie.addEventListener('click', cookieClick)
anotherCookie.addEventListener('click', oneMoreCookie)

function cookieClick() {
  toggle()
  fortune.innerText = fortunePhrases[cookieSelector].phrase
  console.log(fortunePhrases[cookieSelector])
}

function oneMoreCookie() {
  toggle()
  cookieSelector = Math.round(Math.random() * 61)
}

function toggle() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}