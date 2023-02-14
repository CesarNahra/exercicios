var questionName = prompt("Qual o usuário você deseja buscar?");

const users = [
    {
        name: "Scenic Stream",
        username: "Eladio66",
    },
    {
        name: "Indigo Shady Stream",
        username:  "Marian_Volkman10",
    },
    {
        name: "Historic Trail",
        username: "Tabitha_Bosco",
    },
    {
        name: "Old Footpath",
        username: "Ford50",
    },
    {
        name: "Viovar Historic Route",
        username: "Soledad_Olson",
    },
    {
        name: "Orange Shady Footpath",
        username: "Jarvis_Hackett",
    },
    {
        name: "Blue Stream",
        username: "Blue Stream",
    }
]


let user = users.find(user => {
    return user.name === questionName;
})

console.log(user);