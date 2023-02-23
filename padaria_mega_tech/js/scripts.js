class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class CashRegister {
    constructor() {
        this.products = [];
        this.total = 0;
    }
    addProduct(product) {
        this.products.push(product);
        this.total += product.price;
    }
    removeProduct(product) {
        const index = this.products.indexOf(product);
        if(index > -1) {
            this.products.splice(index, 1);
            this.total -= product.price;
        }
    }
    startService() {
        const customerName = prompt("Qual é o seu nome?");
        console.log(`Bem-vindo, ${customerName}`);
    }
}

const register = new CashRegister();

register.startService();

const apple = new Product("Maçã", 2.50);
const banana = new Product("Banana", 1.50);
const laranja = new Product("Laranja", 2.00);

register.addProduct(apple);
register.addProduct(banana);
register.addProduct(laranja);

console.log(register);


console.log(`Total da conta: R$${register.total.toFixed(2)}`);