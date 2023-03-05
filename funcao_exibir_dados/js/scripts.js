function showData() {
    let arrNomes = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria'];

    let arrFrutas = ["Banana", "Morango", "Maçã", "Uva", "Pera", "Laranja"];

    let arrFrutasInv = arrFrutas.reverse();

    let arrFormado = [];

    for(let i = 0; i < arrNomes.length && arrFrutas.length; i++) {
        console.log(`${arrNomes[i]} - ${arrFrutasInv[i]}`);
        arrFormado.push(`${arrNomes[i]} - ${arrFrutasInv[i]}`);
    }

    console.log(arrFormado);
}

showData();