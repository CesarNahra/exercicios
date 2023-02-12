const username = document.querySelector("#form-container #username");
const password = document.querySelector("#form-container #pass");
const btn = document.querySelector("#form-container .btn-submit");


function enviarForm(event) {
}

// const person = {
//     username: "",
//     password: "",
//     setUser: function(newUser) {
//         this.username = username;
//     },
//     setPass: function(newPass) {
//         this.password = newPass;
//     },
//     getUser: function() {
//         return this.username;
//     },
//     getPass: function() {
//         return this.password;
//     },
// }

const person = {
    username: "",
    password: "",
}

let pessoaTexto = JSON.stringify(person);

console.log(pessoaTexto);