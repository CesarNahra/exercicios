function trocarPosicao(inicial, final) {
    const lista = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitória"];

    const novaLista = [];

    if(inicial < 0 || final < 0) {
        console.log("Não pode enviar");
    }

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