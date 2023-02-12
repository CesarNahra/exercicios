const inputName = document.getElementById("username");
const inputPass = document.getElementById("pass");

const user = {
    name: "João",
    pwd: 30,
}

localStorage.setItem("pessoa", JSON.stringify(pessoa))

let pessoaString = localStorage.getItem("pessoa");

let pessoaObj = localStorage.parse(pessoaString)

console.log(pessoaObj.nome);