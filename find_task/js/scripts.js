let tasks = ["Acordar", "Tomar café", "Almoçar", "Jogar", "Dormir"];

for(let i = 0; i < tasks.length; i++) {
    console.log(tasks[i]);
}

console.log(tasks);

let index = tasks.indexOf("Tomar café");

if(index !== -1) {
    tasks[index] = "Olá";
}

console.log(tasks);

let taskRemovida = tasks.shift();

console.log(tasks);

let taskAdicionada = tasks.push("oi");

console.log(tasks);