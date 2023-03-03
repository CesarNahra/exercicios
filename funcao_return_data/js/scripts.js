function returnData() {

    const maiores18 = [];

    const menores18 = [];

    const pessoas = [
        {
            nome: "Luis",
            idade: 26,
        },
        {
            nome: "Norma",
            idade: 16,
        },
        {
            nome: "Daiana", 
            idade: 26,
        },
        {
            nome: "Jorge",
            idade: 16,
        },
        {
            nome: "Kauan",
            idade: 16,
        },
        {
            nome: "Charles",
            idade: 26,
        },
        {
            nome: "Marco",
            idade: 16,
        },
        {
            nome: "Bruno",
            idade: 16,
        },
    ]

    for(let i = 0; i < pessoas.length; i++) {
        console.log(pessoas[i]);
        if(pessoas[i].idade >= 18) {
            maiores18.push(pessoas[i]);
        } else {
            menores18.push(pessoas[i]);
        }
    }

    console.log(maiores18);

    console.log(menores18);
}

returnData();