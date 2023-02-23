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