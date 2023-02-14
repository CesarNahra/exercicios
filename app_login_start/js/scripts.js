const username = document.querySelector("#form-container #username");
const password = document.querySelector("#form-container #pass");
const btn = document.querySelector("#form-container #btn-submit");


btn.addEventListener("click", enviar);

function enviar() {
    const armazenaName = localStorage.setItem("usuario", username.value);
    const armazenaPass = localStorage.setItem("pass", password.value);
    

    if(armazenaName === armazenaName && armazenaPass === armazenaPass) {
        alert("logado");
    } 
}