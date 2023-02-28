function trocarPosicao(inicial, final) {
    const lista = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitória"];

    const novaLista = [];

    for(let i = 0; i < lista.length; i++) {
        if(i === inicial) {
            novaLista.push(lista[final]);
            continue;
        }
        if(i === final) {
            novaLista.push(lista[inicial]);
            continue;
        }
        novaLista.push(lista[i]);
    }

    console.log(novaLista);
}

trocarPosicao(0, 2);