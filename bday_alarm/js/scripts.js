const aniversario = new Date(2023, 4, 8);

const hoje = new Date();

if(aniversario === hoje) {
    console.log("Feliz Aniversário");
} else {
    console.log(`Faltam ${(aniversario - hoje)} dias`);
}