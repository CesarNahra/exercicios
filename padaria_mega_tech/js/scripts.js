class CaixaRegistradora {
    constructor(produto, qtd, valor) {
        this.produto = produto;
        this.qtd = qtd;
        this.valor = valor;
    }
    addItem(produto) {
        this.produto += produto;
    }
}

let carrinho = new CaixaRegistradora([
    {
        codigoBarras: 12345,
        qtd: 1,
        preco: 20,
        nome: "Abacate"
    }
], 1, 20);

console.log(carrinho);

console.log(carrinho.produto);

console.log(carrinho.produto[0].codigoBarras);