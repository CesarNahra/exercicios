const aniversario = new Date(2000, 4, 8);

const hoje = new Date();

if(aniversario === hoje) {
    console.log("Feliz Aniversário");
} else {
    console.log(`Faltam ${(hoje - aniversario)} dias`);
}