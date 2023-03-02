function addName(nome) {
    let arr = ['Pedro', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria'];

    for(let i = 0; i < arr.length; i++) {
        if(nome == arr[i] || typeof nome !== 'string') {
            throw new Error("Aconteceu um erro");
        }
    }

    arr.push(nome);
    console.log(arr);

}

addName('César');