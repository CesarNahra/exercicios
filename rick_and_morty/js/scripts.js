let charName = document.querySelector(".name");
let charPhoto = document.querySelector(".photo");
let charSituation = document.querySelector(".alive");
let charCn = document.querySelector(".cityname");
let charOn = document.querySelector(".originname");
let charGender = document.querySelector(".type");
let charSpecie = document.querySelector(".human");


let url = "https://rickandmortyapi.com/api/character/1"

async function search() {
    const response = await fetch(url);
    const data =  await response.json();
    console.log(data);
}

charGender.innerHTML = "oi";

search();