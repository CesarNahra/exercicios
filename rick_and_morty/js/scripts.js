const charName = document.querySelector(".name");
const charPhoto = document.querySelector(".photo");
const charSituation = document.querySelector(".alive");
const charCity = document.querySelector(".cityname");
const charOrigin = document.querySelector(".originname");
const charGender = document.querySelector(".type");
const charSpecie = document.querySelector(".human");


let url = "https://rickandmortyapi.com/api/character/70"

async function search() {
    const response = await fetch(url);
    const data =  await response.json();
    console.log(data);
    charName.innerHTML = data.name;
    charPhoto.innerHTML = `<img src="https://rickandmortyapi.com/api/character/avatar/70.jpeg">`
    charSituation.innerHTML = data.status;
    charCity.innerHTML = data.location.name;
    charOrigin.innerHTML = data.origin.name;
    charGender.innerHTML = data.gender;
    charSpecie.innerHTML = data.species;
}

search();