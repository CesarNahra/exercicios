const charName = document.querySelector(".name");
const charPhoto = document.querySelector(".photo");
const charSituation = document.querySelector(".alive");
const charCity = document.querySelector(".cityname");
const charOrigin = document.querySelector(".originname");
const charGender = document.querySelector(".type");
const charSpecie = document.querySelector(".human");


let url = "https://rickandmortyapi.com/api/character/1"

async function search() {
    const response = await fetch(url);
    const data =  await response.json();
    console.log(data);
}

charGender.innerHTML = "Male";

search();