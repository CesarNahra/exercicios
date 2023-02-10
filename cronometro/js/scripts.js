let number = 0;

function ate10() {
    number++;
    console.log(number);
    if(number === 10) {
        alert("Seu tempo acabou!! Tente novamente!!");
        clearTimeout();
    }
}

setInterval(ate10, 1000);