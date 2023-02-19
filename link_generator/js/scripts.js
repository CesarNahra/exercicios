const numero = document.querySelector("form #phone");
const msg = document.querySelector("form #msg");
const button = document.querySelector("form #btn-submit");
const link = `http://api.whatsapp.com/send?phone=${numero.value}&text=${msg.value}`;


button.addEventListener("click", geraLink);

function geraLink() {
    
}


console.log(geraLink());