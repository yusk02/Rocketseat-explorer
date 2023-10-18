const students = [
  {
    name: "João",
    firstGrade: 8.5,
    secondGrade: 6.0,
    thirdGrade: 7.0,
  },
  {
    name: "Leticia",
    firstGrade: 9.0,
    secondGrade: 8.0,
    thirdGrade: 7.0,
  },
  {
    name: "Diego",
    firstGrade: 5.0,
    secondGrade: 6.0,
    thirdGrade: 5.0,
  },
  {
    name: "Julia",
    firstGrade: 5.0,
    secondGrade: 7.0,
    thirdGrade: 7.5,
  },
  {
    name: "Luis",
    firstGrade: 4.0,
    secondGrade: 6.0,
    thirdGrade: 5.5,
  },
  {
    name: "Eduardo",
    firstGrade: 8.0,
    secondGrade: 7.5,
    thirdGrade: 9.0,
  }
]

let studentAverage;

for (let student of students) {
  studentAverage = function() {
    return ((student.firstGrade + student.secondGrade + student.thirdGrade) / 3).toFixed(1)
  }

  if (studentAverage() >= 7) {
    let message = alert(`A média do(a) aluno(a) ${student.name} é: ${studentAverage()}
    Parabéns ${student.name}! Você foi aprovado(a) no concurso!`)
  } else {
    let message = alert(`A média do(a) aluno(a) ${student.name} é: ${studentAverage()}
    Não foi dessa vez ${student.name}. Tente novamente!`)
  }

}




