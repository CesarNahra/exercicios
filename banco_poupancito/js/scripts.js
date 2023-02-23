class Conta {
    constructor(saldo, juros) {
        this.saldo = saldo;
        this.juros = juros;
    }
    deposito(valor) {
        this.saldo += valor;
    }
    sacar(valor) {
        this.saldo -= valor;
    }
}

class ContaPoupanca extends Conta {
    constructor(saldo, juros) {
        super(saldo, juros);
        this.juros = 0.7;
    }
    atualizaJuros() {
        this.saldo += this.juros;
    }
}

class PoupançaPremium extends ContaPoupanca {
    constructor(saldo, juros) {
        super(saldo, juros);
        this.juros = 1.2;
    }
}

let dependente2 = new PoupançaPremium(10000, 1);

dependente2.atualizaJuros();

console.log(dependente2);

let dependente = new ContaPoupanca(10000, 1);

console.log(dependente);

dependente.atualizaJuros();

console.log(dependente);

let conta = new Conta(10000, 0);

console.log(conta);