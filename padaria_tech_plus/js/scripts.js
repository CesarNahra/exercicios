let produto1 = 2.2;
let produto2 = 5.8;
let total = produto1 + produto2
let cash = 20;

function troco() {
    return cash - total;
}

console.log(`O seu troco foi de ${troco()},00`);