class CaixaRegistradora {
    constructor(produto, qtd, total) {
        this.produto = produto;
        this.qtd = qtd;
        this.total = total;
    }
    addItem(produto) {
        this.produto.push(produto);

        this.qtd += produto.qtd;
        this.total += produto.preco * produto.qtd;
    }
    removeItem(produto) {
        this.produto.pop();

        this.qtd -= produto.qtd;
        this.total -= produto.preco * produto.qtd;
    }
}

let carrinho = new CaixaRegistradora([
    {
        codigoBarras: 12345,
        nome: "Goiaba",
        preco: 4.5,
        qtd: 10,
    }
], 10, 4.5);

console.log(carrinho);

carrinho.addItem({codigoBarras: 65486, nome: "Banana", preco: 5, qtd: 5});

carrinho.removeItem();

console.log(carrinho);