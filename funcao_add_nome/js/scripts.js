function addName(nome) {
    let arr = ['Pedro', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria'];

    for(let i = 0; i < arr.length; i++) {
        if(typeof nome !== 'string') {
            throw new Error(`O valor ${nome} não é uma string`);
        } else if(nome == arr[i]) {
            throw new Error(`O nome ${nome} já se encontra na lista`);
        }
    }

    arr.push(nome);
    console.log(arr);

}

addName(4);