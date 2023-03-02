function deleteDuplicate() {
    let arr = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria', 'Luis', 'Danilo', 'José'];

    let pedroDuplicado =  arr.splice(1, 1)[0];
    let daniloDuplicado =  arr.splice(2, 1)[0];

    console.log(arr);

    console.log(pedroDuplicado);
    console.log(daniloDuplicado);

    console.log(`${pedroDuplicado}, ${daniloDuplicado} e ${arr}`);
}

deleteDuplicate();