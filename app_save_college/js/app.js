const alunos = [
    {
        nome: "Rafael",
        altura: 1.70,
        idade: 15,
        sexo: "M",
        sala: 1,
        notas: {
            nota1: 8,
            nota2: 5,
        },
    },
    {
        nome: "César",
        altura: 1.74,
        idade: 22,
        sexo: "M",
        sala: 1,
        notas: {
            nota1: 6,
            nota2: 7,
        },
    },
    {
        nome: "Isabel",
        altura: 1.54,
        idade: 18,
        sexo: "F",
        sala: 1,
        notas: {
            nota1: 8,
            nota2: 7.5,
        },
    },
    {
        nome: "Julia",
        altura: 1.65,
        idade: 20,
        sexo: "F",
        sala: 2,
        notas: {
            nota1: 4.5,
            nota2: 7,
        },
    },
    {
        nome: "Alessandra",
        altura: 1.72,
        idade: 18,
        sexo: "F",
        sala: 2,
        notas: {
            nota1: 10,
            nota2: 10,
        },
    },
]

console.log(alunos);




function mediaIndividual() {
    for(let i = 0; i <= alunos.length - 1; i++) {

        let media = ((alunos[i].notas.nota1 + alunos[i].notas.nota2 )/ 2);

        console.log("A média do aluno " + alunos[i].nome + " foi " + media);
        
        if(media >= 7) {
            console.log("O aluno " + alunos[i].nome + " está aprovado");
        } else if(media < 7) {
            console.log("O aluno " + alunos[i].nome + " está reprovado");
        }
    }
}

mediaIndividual();