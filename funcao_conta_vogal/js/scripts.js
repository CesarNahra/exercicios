function countVowel(palavra) {
    let letras = palavra.split("");

    for(let i = 0; i < letras.length; i++) {
        if(letras[i] === 'a' || letras[i] === 'e' || letras[i] === 'i' || letras[i] === 'o' || letras[i] === 'u' ) {
            console.log(`Tem vogais`);
        } else if(typeof palavra !==  'string') {
            console.log("Não é uma string");
        } else {
            console.log("A palavra não contém nenhuma vogal");
        }
    }

    console.log(palavra);

    console.log(letras);
}

countVowel("Bklk");