class Person {
    constructor(nome, idade, altura) {
        this.nome = nome,
        this.idade = idade,
        this.altura = altura;
    }
    showData() {
        console.log(`Olá me chamo ${this.nome} tenho ${this.idade} anos e tenho ${this.altura} de altura`);
    }
}

class PersonProfession extends Person {
    constructor(nome, idade, altura, profissao) {
        super(nome, idade, altura);
        this.profissao = profissao;
    }
    showProfissao() {
        console.log(`Olá me chamo ${this.nome} tenho ${this.idade} anos e tenho ${this.altura} de altura e sou ${this.profissao}`)
    }
}

let pessoa = new Person("César", 22, 1.74);

pessoa.showData();

let pessoa2 = new PersonProfession("Leonardo", 22, 1.74, "marceneiro");

pessoa2.showData();

pessoa2.showProfissao();